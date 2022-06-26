import React from "react";

interface Values {
    inputType: string,
    message: string,
    placeHolder: string
}

interface PropDictionary{
    [place: string]: Values
}

type Props = {
    place: string
}

type State = {
    propDict: PropDictionary
    targetDict: Values
}

class AdditionalForm extends React.Component<Props, State>{
    render(): React.ReactNode {
        const dict: PropDictionary = {
            "mail_form": {
                inputType: "email",
                message: "予約時に登録したメールアドレスを入力してください。",
                placeHolder: "sannana4@gmail.com"
            },
            "id_form": {
                inputType: "number",
                message: "予約番号を入力してください",
                placeHolder: "0000000"
            }
        }
        this.state = {
            propDict: dict,
            targetDict: dict[this.props.place]
        };

        return(
            <p>
                <p>
                    {this.state.targetDict.message}
                </p>
                <input type={this.state.targetDict.inputType} name={this.props.place} placeholder={this.state.targetDict.placeHolder} />
            </p>
        );
    }
}

export default AdditionalForm;