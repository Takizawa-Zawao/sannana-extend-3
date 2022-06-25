import React from "react";
import ReservationCheckBody from "./ReservationCheckBody";
import Header_01 from "../headers/Header_01";
import Header_02 from "../headers/Header_02";

class CheckReservation extends React.Component{
    render(): React.ReactNode {
        return(
            <div id='CheckReservation'>
                <Header_02 />
                <Header_01 PageSubTitle='予約確認' />
                <ReservationCheckBody />
            </div>
        );
    }
}

export default CheckReservation;