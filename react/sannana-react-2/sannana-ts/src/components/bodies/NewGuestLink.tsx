import React from "react";


type Props = {
    explanation?: React.ReactNode
}

class NewGuestLink extends React.Component<Props>{
    nextURL: string = "https://cjz67ytgti.execute-api.ap-northeast-1.amazonaws.com/sannana_api_stage/reservation_edit_add";
    explanation: React.ReactNode = this.props.explanation == undefined? <p></p>:<p>{this.props.explanation}</p>;

    render(): React.ReactNode {
        return(
            <p>
                {this.explanation}
                <form method="GET" action={this.nextURL}>
                    <input className="btn button_link" type="submit" value="新規登録" />
                </form>
            </p>
        );
    };
}

export default NewGuestLink;