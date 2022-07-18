import React, { Dispatch, useState } from "react";
import Head_01 from "../heads/Head_01"
import Header_01 from "../headers/Header_01"
import Header_02 from "../headers/Header_02"
import ReservedGuest, { Props, PropsData } from "./ReservedGuest"
import ReservedLeader, { LeaderProps, LeaderPropsData } from "./ReservedLeader"
import useLambda, { AwsAPIResponse } from "../../ts/ajax"
import { useLocation, useParams } from "react-router-dom";
import Page404 from "../../errorPages/Page404"
import GetParams from "../../ts/GetParams"



type State = {
    leaderProps: LeaderProps,
    props: [{
        data: PropsData
        isHidden: boolean
    }]
}

const ReservationList = () => {
    const [isHidden, setIsHidden] = useState(true);

    const params:Map<string, string> | null = GetParams();
    let guestId: string | undefined = "";
    let mail: string | undefined = "";

    if(params === null){
        
    }else{
        guestId = params.get("id_form");
        mail = params.get("mail_form");
    }


    let URL = "";
    if(guestId === undefined){
        URL = "https://cjz67ytgti.execute-api.ap-northeast-1.amazonaws.com/sannana_api_stage/reservation_check?mail=" + mail;
    }else if(mail === undefined){
        URL = "/error";
    }else{
        URL = "https://cjz67ytgti.execute-api.ap-northeast-1.amazonaws.com/sannana_api_stage/reservation_check?guestId=" + guestId;
    }
    

    let awsAPIResponse: AwsAPIResponse = useLambda(URL);

    alert(useState(awsAPIResponse["body-json"]));
    const [leaderPropsData, setLeaderPropsdata] = useState(awsAPIResponse["body-json"].body.leaderPropsData);
    alert(leaderPropsData.mail);
    
    const [propsData, setPropsData]:[PropsData[], Dispatch<any>] = useState(awsAPIResponse["body-json"].body.propsData);
    alert(propsData[0].fullname);
 
    let list: React.ReactNode[] = [];
    createComponent(list, propsData, isHidden);
    

    return (
        <div>
            <Head_01 PageTitle="サンナナ予約確認画面"></Head_01>
            <Header_01 PageSubTitle="予約確認画面"></Header_01>
            <Header_02></Header_02>
            <p>代表者様情報</p>
            <form action="" method="GET">
                <table>
                    <ReservedLeader data={leaderPropsData} isHidden={isHidden} />
                </table>
            </form>
            <p>予約一覧</p>
            <form action="" method="GET">
                <table>
                    {list}
                </table>
            </form>
        </div>
    )
}

function createComponent(list: React.ReactNode[], props: PropsData[], isHidden: boolean) {
    for (let prop of props) {
        let component = <ReservedGuest data={prop} isHidden={isHidden} />
        list.push(component);
    }
}


export default ReservationList;