export type AwsAPIResponse = {
    "body-json": any
}


function useLambda(URL: string):AwsAPIResponse {
    fetch(URL).then(
        (response) =>{
            let json = response.json;
            alert(json);
            return json;
        }
    ).catch(
        (error)=>{
            let json: AwsAPIResponse = {
                "body-json": "error"
            }
            return json;
        }
    );
    
    let falseJson: AwsAPIResponse = {
        "body-json": "error"
    }
    return falseJson;
}


export default useLambda;