import React from "react";
import AdditionalGuest from './AdditionalGuest';
import Head_01 from '../heads/Head_01';
import Header_01 from '../headers/Header_01';
import Header_02 from '../headers/Header_02';
import "../../css/style.css"

type Props = {
    createAccount: boolean
}

type State = {
    
}


class ReservationBody extends React.Component<Props>{
    render(): React.ReactNode {
        return(
            <div>
                <Head_01 PageTitle="予約登録" />
                <Header_01 PageSubTitle="予約登録" />
                <Header_02 />
                <AdditionalGuest guestNumber={0} isLeader={this.props.createAccount} />
            </div>
        );     
    }
}

export default ReservationBody