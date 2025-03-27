// style
import "./experience.sass"

// components
import ContentText from "../common/_content/content"
import DateText from "../common/_date/date"
import TitleText from "../common/_title/title"

// type
import { experienceProps } from "./experience.type"

const ExperienceCard: React.FC<experienceProps> = (props) => {

    const { lastDate, firstDate, title, content } = props

    const date = lastDate ? `${firstDate} - ${lastDate}` : `${firstDate}`

    return (
        <div className="experience">
            <div className="experience__head">
                <DateText date={date} />
                <TitleText title={title} />
            </div>
            <ContentText content={content} />
        </div>
    )
}

export default ExperienceCard