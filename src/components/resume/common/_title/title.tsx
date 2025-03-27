// type
import { titleTextProps } from "./title.type";

const TitleText: React.FC<titleTextProps> = (props) => {

    const { title } = props

    return (
        <h3>{title}</h3>
    )
}

export default TitleText;