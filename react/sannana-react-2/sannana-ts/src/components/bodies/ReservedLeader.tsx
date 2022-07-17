import React from "react";
import ReservedGuest, { data, Elements, KeyCommon, KeyLabels, KeyTypes, Props, PropsData, State } from "./ReservedGuest";

export interface LeaderPropsData extends PropsData {
    mail: string
}

export interface LeaderProps extends Props {
    data: LeaderPropsData
}

export interface LeaderElements extends Elements {
    mail: data
}

export interface LeaderKeyCommon extends KeyCommon {
    mail: string
}

export interface LeaderKeyTypes extends KeyTypes {
    mail: string
}

export interface LeaderKeyLabels extends KeyLabels {
    mail: string
}

export default class ReservedLeader extends ReservedGuest{
    constructor(props: Props){
        super(props);

    }

    render(): React.ReactNode {
        let inputList: React.ReactNode[] = this.createComponent();
        let result = <div>{inputList}</div>
        return result
    }

    getKeyNames(): string[] {
        let array = super.getKeyNames();
        array.push("mail");
        return array;
    }
    getKeyCommon(): LeaderKeyCommon {
        return {
            id: "leader_id",
            id_sort: "leader_id_sort",
            lastName: "leader_last_name",
            firstName: "leader_first_name",
            phonetic: "leader_phonetic",
            invitationId: "leader_invitation_id",
            invitationId_sort: "leader_invitation_id_sort",
            mail: "leader_mail",
            isMagician: "isMagician"
        }
    }
    getKeyTypes(): LeaderKeyTypes {
        return {
            id: "hidden",
            id_sort: "hidden",
            lastName: "text",
            firstName: "text",
            phonetic: "text",
            invitationId: "hidden",
            invitationId_sort: "hidden",
            mail: "email",
            isMagician: "hidden"
        }
    }
    getKeyLabels(): LeaderKeyLabels {
        return {
            id: "予約番号",
            id_sort: "予約番号枝番",
            lastName: "姓",
            firstName: "名",
            phonetic: "フリガナ",
            invitationId: "招待者コード",
            invitationId_sort: "招待者コード枝番",
            mail: "メールアドレス",
            isMagician: "マジック経験"
        }
    }
}