import { useLocation } from "react-router-dom";

export default function GetParams(): Map<string, string> | null {

    const location_slice = useLocation().search.split("?");
    if(location_slice.length <= 1){
        return null
    }else{
        let paramMap: Map<string, string> = new Map<string, string>;
        const params = location_slice[1].split("&");
        for(let param of params){
            const paramSet = param.split("=");
            const key = paramSet[0];
            const value = paramSet[1];
            paramMap.set(key, value);
        }
        return paramMap;
    }

}