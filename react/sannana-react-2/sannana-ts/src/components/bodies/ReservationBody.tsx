import React from "react";
import AdditionalGuest from './AdditionalGuest';
import Head_01 from '../heads/Head_01';
import Header_01 from '../headers/Header_01';
import Header_02 from '../headers/Header_02';
import "../../css/style.css"
import useLambda from "../../ts/ajax"

type Props = {
    
}

type State = {
    createAccount: boolean
    availableList: Array<number>
    actorsList: Map<number, string>
}


class ReservationBody extends React.Component<Props, State>{
    constructor(props: Props){
        super(props);
        let awsAPIResponse =  useLambda("https://cjz67ytgti.execute-api.ap-northeast-1.amazonaws.com/sannana_api_stage/reservation_edit_add");
        let body = awsAPIResponse["body-json"]["body"]
        let actorsList:Map<number, string> = new Map();
        for(let i = 0; i++; i < body["actorsList_keys"].size()){
            actorsList.set(i, body["actorsList_values"]);
        }
        this.state = {
            createAccount: body["createAccount"] == 1? true : false,
            availableList: body["available_numbers"],
            actorsList: actorsList
        }
    }
    render(): React.ReactNode {
        let additionalGuests: React.ReactNode[] = [];
        () => {
            for(let available_number of this.state.availableList){
                let additionalGuest = <AdditionalGuest guestNumber={available_number} isLeader={available_number == 0? this.state.createAccount : false} actorsList={this.state.actorsList} />
                additionalGuests.push(additionalGuest);
            }
        }
        return(
            <div>
                <Head_01 PageTitle="予約登録" />
                <Header_01 PageSubTitle="予約登録" />
                <Header_02 />
                {additionalGuests}
            </div>
        );     
    }
}

export default ReservationBody