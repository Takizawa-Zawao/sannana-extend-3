import { json } from "stream/consumers";

export interface ResponseBody  {
    "body-json": {
        body: {
    }
}
}



function useLambda<T>(URL: string): Promise<T> {
    let promise: Promise<T> = fetch(URL).then(
        (response) =>{
            let json: Promise<T> = response.json();
            return json;
        }
    ).then(
        (json: T) => {
            console.log(json);
            return json;
        }
    ).catch(
        (error: T)=>{
            return error;
        }
    );

    return promise;
}


export default useLambda;