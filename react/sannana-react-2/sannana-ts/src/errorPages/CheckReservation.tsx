import React from "react";
import Header_01 from "../components/headers/Header_01";
import Header_02 from "../components/headers/Header_02";

class CheckReservation extends React.Component{
    render(): React.ReactNode {
        return(
            <div id='CheckReservation'>
                <Header_02 />
                <Header_01 PageSubTitle='予約確認' />
            </div>
        );
    }
}

export default CheckReservation;