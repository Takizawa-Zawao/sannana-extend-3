import React from "react";
import Head_01 from "../heads/Head_01"
import Header_01 from "../headers/Header_01"
import Header_02 from "../headers/Header_02"
import ReservedGuest, { PropsData } from "./ReservedGuest"
import ReservedLeader, { LeaderProps, LeaderPropsData } from "./ReservedLeader"
import useLambda, {AwsAPIResponse} from "../../ts/ajax"
import { useParams } from "react-router-dom";

type Props = {
    
}

type State = {
    leaderProps: LeaderProps,
    props: [{
        data: PropsData
        isHidden: boolean
    }]
}

function GetGuestId() :string | undefined {
    try{
        const params = useParams<{guestId: string}>();
        return params.guestId;
    }catch(e){
        alert(e)
    }
}

function UseLambda(URL: string): AwsAPIResponse{
    return useLambda(URL);
}

class ReservationList extends React.Component<Props, State>{
    constructor(props: Props){
        const guestId: string | undefined = GetGuestId();
        alert(guestId);
        super(props);
        let URL = "/reservation_list?" + guestId;
        let awsAPIResponse: AwsAPIResponse = UseLambda(URL);
        alert(awsAPIResponse);
    }
    render(){
        let list: React.ReactNode[] = [];
        this.createComponent(list);

        return(
            <div>
                <Head_01 PageTitle="サンナナ予約確認画面"></Head_01>
                <Header_01 PageSubTitle="予約確認画面"></Header_01>
                <Header_02></Header_02>
                <p>代表者様情報</p>
                <form action="" method="GET">
                    <table>
                        <ReservedLeader data={this.state.leaderProps.data} isHidden={this.state.leaderProps.isHidden} />
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

    createComponent(list: React.ReactNode[]){
        for(let prop of this.state.props){
            let component = <ReservedGuest data={prop.data} isHidden={prop.isHidden} />
            list.push(component);
        }
    }
}

export default ReservationList;