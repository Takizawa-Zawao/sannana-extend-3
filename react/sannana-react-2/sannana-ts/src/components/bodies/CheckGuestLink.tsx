import React from "react";

type Props = {
    explanation?: React.ReactNode
}


class CheckGuestLink extends React.Component<Props>{
    nextURL: string = "reservation_check";
    explanation: React.ReactNode = this.props.explanation == undefined? <p></p>:<p>{this.props.explanation}</p>;

    
    render(): React.ReactNode {
        return(
            <p>
                {this.explanation}
                <form method="GET" action={this.nextURL}>
                    <input className="btn button_link" type="submit" value="ログイン" />
                </form>
            </p>
        );
    };
}

export default CheckGuestLink;