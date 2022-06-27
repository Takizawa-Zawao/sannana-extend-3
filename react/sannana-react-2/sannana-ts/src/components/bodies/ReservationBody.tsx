import React from "react";
import AdditionalGuest from './AdditionalGuest';
import Head_01 from '../heads/Head_01';
import Header_01 from '../headers/Header_01';
import Header_02 from '../headers/Header_02';

type Props = {

}

type State = {

}


class ReservationBody extends React.Component{
    render(): React.ReactNode {
        return(
            <div>
                <Head_01 PageTitle="予約登録" />
                <Header_01 PageSubTitle="予約登録" />
                <Header_02 />
            </div>
        );     
    }
}

export default ReservationBody