// style
import './toolsOfChoice.sass'

// components
import DateText from "../common/_date/date"
import TitleText from "../common/_title/title"

// type
import { toolsOfChoiceProps } from './toolsOfChoice.type'

const ToolsOfChoice: React.FC<toolsOfChoiceProps> = (props) => {

    const {
        subtitle,
        title
    } = props

    return (
        <div className="toolsInfo">
            <DateText date={subtitle} />
            <TitleText title={title} />
        </div>
    )
}

export default ToolsOfChoice