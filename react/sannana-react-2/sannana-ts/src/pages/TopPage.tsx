import React from 'react';
import Header_01 from '../components/headers/Header_01';
import Head_01 from '../components/heads/Head_01'
import NewGuestLink from '../components/bodies/NewGuestLink';
import CheckGuestLink from '../components/bodies/CheckGuestLink';
import '../css/style.css';

class TopPage extends React.Component{
    render(): React.ReactNode {
        return (
            <div is="TopPage">
                <Head_01 PageTitle='サンナナ予約システムトップページ' />
                <Header_01 PageSubTitle='トップページ' />
                <NewGuestLink explanation='初めて予約される方はこちら' />
                <CheckGuestLink explanation='すでに予約済みの方はこちら' />
            </div>
        );
    }
}

export default TopPage;