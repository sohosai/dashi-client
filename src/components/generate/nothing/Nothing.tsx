import { FC } from "react";


type Props = {
    visible_id: string;
}

const Nothing: FC<Props> = (props) => {
    return (
        <p>{props.visible_id}</p>
    )
}

export default Nothing;
