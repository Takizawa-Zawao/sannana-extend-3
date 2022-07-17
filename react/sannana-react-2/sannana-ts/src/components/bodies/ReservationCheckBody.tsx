import React from "react";
import AdditionalForm from "../bodies/AdditionalForm";
import "../../css/style.css"

type Props = {
    explanation?: React.ReactNode
}

type State = {
    nextURL: string,
    additionalForm01: React.ReactNode,
    additionalForm02: React.ReactNode
}

class ReservationCheckBody extends React.Component<Props, State>{
    nextURL: string = "";
    explanation: React.ReactNode = this.props.explanation == undefined ? <p></p> : <p>{this.props.explanation}</p>;
    constructor(props: Props, state: State){
        super(props);
        this.state = {
            nextURL: this.nextURL,
            additionalForm01: <div id='additionalForm01'></div>,
            additionalForm02: <div id='additionalForm02'></div>
        };
    }


    render(): React.ReactNode {
        return (
            <div id='ReservationCheckBody'>
                {this.explanation}
                <form action={this.state.nextURL} method="post">
                    <p>
                        <input className="btn button_link" id="mail_form" type="button" onClick={this.buttonClick01} value="メールアドレスでログイン" required />
                    </p>
                    {this.state.additionalForm01}
                    <p>
                        <input className="btn button_link" id="id_form" type="button" onClick={this.buttonClick02} value="予約番号でログイン" required />
                    </p>
                    {this.state.additionalForm02}
                </form>
            </div>
        );
    }
    
    buttonClick01 = () => {
        this.setState({
            nextURL: "/reservation_list/mail/",
            additionalForm01: this.createAdditionalForm("mail_form"),
            additionalForm02: <div></div>
        });
        return;
    }

    buttonClick02 = () => {
        this.setState({
            nextURL: "/reservation_list/id/",
            additionalForm01: <div></div>,
            additionalForm02: this.createAdditionalForm("id_form")
        });
        return;
    }

    createAdditionalForm(place: string):React.ReactNode{
        return <AdditionalForm place={place} />
    }



}




export default ReservationCheckBody;