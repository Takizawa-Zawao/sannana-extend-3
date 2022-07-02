import React from "react";

type Props = {
    pageBack?: string;
}

class Header_02 extends React.Component<Props>{
    render(): React.ReactNode {
        return(
            <p>
                <p><a href={this.props.pageBack}>戻る</a></p>
                <p><a href="top">予約システムトップ</a></p>
            </p>
        );
    };
}

export default Header_02;