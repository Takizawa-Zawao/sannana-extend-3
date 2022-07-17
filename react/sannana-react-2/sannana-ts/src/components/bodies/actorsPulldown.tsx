import React from "react";

type Props = {
    actorsList: Map<number, String>
}

type State = {

}


class actorsPulldown extends React.Component<Props, State>{
    render(): React.ReactNode {
        let options: Array<React.ReactNode> = [];
        this.createOptions(options);
        return (
            <select name="invitation_id_0">
                {options}
            </select>
        )
    }

    createOptions(options: React.ReactNode[]){
        for (let actor_id in this.props.actorsList.keys()) {
            let option_tmp = <option value={actor_id}>{this.props.actorsList.get(parseInt(actor_id))}</option>
            options.push(option_tmp)
        }
    } 
}

export default actorsPulldown;