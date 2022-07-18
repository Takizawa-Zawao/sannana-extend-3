import { json } from "stream/consumers";

export type AwsAPIResponse = {
    "body-json": any
}


function useLambda(URL: string):AwsAPIResponse {
    let promise = fetch(URL).then(
        (response) =>{
            let json = response.json();
            return json;
        }
    ).then(
        () => {
            console.log(json);
            return json;
        }
    ).catch(
        (error)=>{
            alert(error);
            return {
                "body-json": "error"
            }
        }
    );
    
        let falseJson: AwsAPIResponse = {
            "body-json": "error"
        }
    return falseJson;
}


export default useLambda;