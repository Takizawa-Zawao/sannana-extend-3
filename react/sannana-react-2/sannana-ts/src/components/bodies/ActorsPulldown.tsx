import React from "react";

type Props = {
    actorsList: Map<number, String>
}

type State = {

}


class actorsPulldown extends React.Component<Props, State>{
    render(): React.ReactNode {
        let options: Array<React.ReactNode> = [];
        () => {
            for (let actor_id of this.props.actorsList.keys()) {
                let option_tmp = <option value={actor_id}>{this.props.actorsList.get(actor_id)}</option>
                options.push(option_tmp)
            }
        }
        return (
            <select name="invitation_id_0">
                {options}
            </select>
        )
    }
}

export default actorsPulldown;