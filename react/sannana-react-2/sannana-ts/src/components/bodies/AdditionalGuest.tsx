import React from "react";
import GuestInput from './GuestInput';
import ActorsPulldown from './ActorsPulldown'

type Props = {
    guestNumber: number,
    isLeader?: boolean
    actorsList: Map<number, String>
}


type State = {
    leaderNode: React.ReactNode,
    guestNode: React.ReactNode
}

class AdditionalGuest extends React.Component<Props, State>{
    constructor(props: Props){
        super(props);
        
        this.state = {
            leaderNode: 
                <p>
                    <GuestInput guestNumber={this.props.guestNumber} inputLabel="姓" inputName="lastName" inputPattern=".*" inputPlaceHolder="三七" />
                    <GuestInput guestNumber={this.props.guestNumber} inputLabel="名" inputName="firstName" inputPattern=".*" inputPlaceHolder="太郎" />
                    <GuestInput guestNumber={this.props.guestNumber} inputLabel="フリガナ" inputName="phonetic" inputPattern="[\\u30A1-\\u30FC]*" inputPlaceHolder="サンナナタロウ" />
                    <GuestInput guestNumber={this.props.guestNumber} inputLabel="メールアドレス" inputName="mail" inputPattern=".*" inputPlaceHolder="sannana@gmail.com" />
                    <ActorsPulldown actorsList={this.props.actorsList}></ActorsPulldown>
                </p>,
            guestNode: 
                <p>
                    <GuestInput guestNumber={this.props.guestNumber} inputLabel="姓" inputName="lastName" inputPattern=".*" inputPlaceHolder="三七" />
                    <GuestInput guestNumber={this.props.guestNumber} inputLabel="名" inputName="firstName" inputPattern=".*" inputPlaceHolder="太郎" />
                    <GuestInput guestNumber={this.props.guestNumber} inputLabel="フリガナ" inputName="phonetic" inputPattern="[\\u30A1-\\u30FC]*" inputPlaceHolder="サンナナタロウ" />
                </p>
        }
    }

    render(): React.ReactNode {
        return(
            this.props.isLeader? this.state.leaderNode:this.state.guestNode
        );
    }
}

export default AdditionalGuest;