import React from "react";
import { Helmet } from "react-helmet";

type Props = {
    PageTitle: React.ReactNode
}

class Head_01 extends React.Component<Props> {
    render(): React.ReactNode {
        return (
            <Helmet>
                <title>{this.props.PageTitle}</title>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width" />
            </Helmet>
        );
    };
}

export default Head_01;