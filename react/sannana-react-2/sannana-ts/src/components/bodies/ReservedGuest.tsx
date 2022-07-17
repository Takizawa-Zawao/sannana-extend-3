import React from "react";

export interface Props {
    data: PropsData
    isHidden: boolean
}

export interface PropsData {
    [key: string]: string
    id: string,
    id_sort: string,
    lastName: string,
    firstName: string,
    fullname: string,
    phonetic: string,
    invitationId: string,
    invitationId_sort: string,
    guestNumber: string,
    isMagician: string
}

export type data = {
    name: string,
    value: string,
    type: string,
    label: string
}

export interface Elements {
    (): Elements;
    [key: string ]: data,
    id: data,
    id_sort: data,
    lastName: data,
    firstName: data,
    phonetic: data,
    invitationId: data,
    invitationId_sort: data,
    isMagician: data
}

export type State = {
    elements: Elements,
    isHidden: boolean,
    fullName: string
}

export interface KeyCommon {
    [key: string ]: string,
    id: string,
    id_sort: string,
    lastName: string,
    firstName: string,
    phonetic: string,
    invitationId: string,
    invitationId_sort: string,
    isMagician: string
}

export interface KeyTypes {
    [key: string ]: string,
    id: string,
    id_sort: string,
    lastName: string,
    firstName: string,
    phonetic: string,
    invitationId: string,
    invitationId_sort: string,
    isMagician: string
}

export interface KeyLabels {
    [key: string ]: string,
    id: string,
    id_sort: string,
    lastName: string,
    firstName: string,
    phonetic: string,
    invitationId: string,
    invitationId_sort: string,
    isMagician: string
}


class ReservedGuest extends React.Component<Props, State>{
    constructor(props: Props){
        super(props);
        let keyCommon: KeyCommon = this.getKeyCommon();
        let keyNames: string[] = this.getKeyNames();
        let keyTypes: KeyTypes = this.getKeyTypes();
        let keyLabels: KeyLabels = this.getKeyLabels();

        let elements = {} as Elements
        () => {
            for(let keyName of keyNames){
                elements[keyName] = {
                    name: keyCommon[keyName] + this.props.data.guestNumber,
                    value: this.props.data[keyName],
                    type: keyTypes[keyName],
                    label: keyLabels[keyName]
                }
            }
        }
        this.state = {
            elements: elements,
            isHidden: this.props.isHidden,
            fullName: this.props.data.firstName
        }



        
    }

    render(): React.ReactNode {
        let inputList: React.ReactNode[] = this.createComponent();
        let result = <div>{inputList}</div>
        return result
    }

    createComponent(): React.ReactNode[] {
        let inputList: React.ReactNode[] = [];
        let elements: Elements = this.state.elements();
        let keyNames = this.getKeyNames();
        () => {
            for(let keyName of keyNames){
                let element = elements[keyName];
                let input = this.props.isHidden || element.type === "hidden"? <input type="hidden" name={element.name} value={element.value} /> : <input type={element.type} name={element.name} placeholder={element.value} />
                let label = this.props.isHidden || element.type === "hidden"? input : <tr><th>{element.label}</th><td>{input}</td></tr>
                inputList.push(label);
            }
        }
        let fullNameDisplay = this.props.isHidden? <tr><td>{this.state.fullName}</td></tr> : <div></div>
        inputList.push
        return inputList;
    }

    getKeyNames(): string[]{
        return [
            "id",
            "id_sort",
            "lastName",
            "firstName",
            "phonetic",
            "invitationId",
            "invitationId_sort",
            "isMagician"
        ]
    }
    getKeyCommon(): KeyCommon {
        return {
            id: "guestId_",
            id_sort: "guestIdSort_",
            lastName: "lastName_",
            firstName: "firstName_",
            phonetic: "phonetic_",
            invitationId: "invitationId_",
            invitationId_sort: "invitationIdSort_",
            isMagician: "isMagician"
        }
    }

    getKeyTypes(): KeyTypes {
        return {
            id: "hidden",
            id_sort: "hidden",
            lastName: "text",
            firstName: "text",
            phonetic: "text",
            invitationId: "hidden",
            invitationId_sort: "hidden",
            isMagician: "hidden"
        }
    }

    getKeyLabels(): KeyLabels {
        return {
            id: "予約番号",
            id_sort: "予約番号枝番",
            lastName: "姓",
            firstName: "名",
            phonetic: "フリガナ",
            invitationId: "招待者コード",
            invitationId_sort: "招待者コード枝番",
            isMagician: "マジック経験"
        }
    }

}

export default ReservedGuest