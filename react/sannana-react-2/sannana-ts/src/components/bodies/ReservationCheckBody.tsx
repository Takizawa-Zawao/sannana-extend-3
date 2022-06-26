import React from "react";
import AdditionalForm from "../bodies/AdditionalForm";

type Props = {
    explanation?: React.ReactNode
}

type State = {
    additionalForm01: React.ReactNode,
    additionalForm02: React.ReactNode
}

class ReservationCheckBody extends React.Component<Props, State>{
    nextURL: string = "https://cjz67ytgti.execute-api.ap-northeast-1.amazonaws.com/sannana_api_stage/reservation_check";
    explanation: React.ReactNode = this.props.explanation == undefined ? <p></p> : <p>{this.props.explanation}</p>;

    render(): React.ReactNode {
        this.state = {
            additionalForm01: <div id='additionalForm01'></div>,
            additionalForm02: <div id='additionalForm02'></div>
        };

        return (
            <div id='ReservationCheckBody'>
                {this.explanation}
                <form action={this.nextURL} method="post">
                    <p>
                        <input className="btn button_link" id="mail_form" type="button" onClick={this.buttonClick01} value="メールアドレスで確認" required />
                    </p>
                    {this.state.additionalForm01}
                    <p>
                        <input className="btn button_link" id="id_form" type="button" onClick={this.buttonClick02} value="予約番号で確認" required />
                    </p>
                    {this.state.additionalForm02}
                </form>
            </div>
        );
    }
    
    buttonClick01 = () => {
        alert("01");
        this.setState({
            additionalForm01: <AdditionalForm place="mail_form" />,
            additionalForm02: <div></div>
        });
    }

    buttonClick02 = () => {
        alert("02");
        this.setState({
            additionalForm01: <div></div>,
            additionalForm02: <AdditionalForm place="id_form" />
        });
    }



}




export default ReservationCheckBody;