import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

type Props = {
    PageSubTitle: React.ReactNode
}

class Header_01 extends React.Component<Props>{
    render(): React.ReactNode {
        return (
            <div id='header_01'>
                <h1>サンナナ予約システム</h1>
                <h2>{this.props.PageSubTitle}</h2>
            </div>
        );
    }
}

export default Header_01;