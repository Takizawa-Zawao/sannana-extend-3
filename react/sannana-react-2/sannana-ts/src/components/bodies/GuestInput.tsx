import React from "react";
type Props = {
    guestNumber: number,
    inputLabel: string,
    inputName: string,
    inputPattern: string,
    inputPlaceHolder: string
}

type State = {
    inputLabel: string,
    inputName: string,
    inputPattern: string,
    inputPlaceHolder: string
}


class GuestInput extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props);
        this.state = {
            inputLabel: this.props.inputLabel,
            inputName: this.props.inputName + "_" + this.props.guestNumber,
            inputPattern: this.props.inputPattern,
            inputPlaceHolder: this.props.inputPlaceHolder
        }
    }

    render(): React.ReactNode {
        return (
            <li>
                <p>{this.state.inputLabel}</p>
                <input type={this.state.inputName=="mail"? "email":"text"} name={this.state.inputName} pattern={this.state.inputPattern} placeholder={this.state.inputPlaceHolder} />
            </li>
        );
    }
}

export default GuestInput;