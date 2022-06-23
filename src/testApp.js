import React from "react";
import ReactDOM from "react";
import Component from "react";

export default class TestApp extends Component {
    render(){
        return(
            <h1>Hello, React!</h1>
        );
    }
}

const app = document.getElementById("app");
alert("test");
ReactDOM.render(<TestApp />, app);