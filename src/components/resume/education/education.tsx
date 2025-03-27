// style
import './education.sass'

// components
import ContentText from "../common/_content/content";
import DateText from "../common/_date/date";
import TitleText from "../common/_title/title";

// type
import { educationProps } from './education.type';

const Education: React.FC<educationProps> = (props) => {

    const { firstDate, lastDate, title, content } = props
    const date = lastDate ? `${firstDate} - ${lastDate}` : `${firstDate}`

    return (
        <div className="education">
            <div className='education__head'>
                <DateText date={date} />
                <TitleText title={title} />
            </div>
            <ContentText content={content} />
        </div>
    )
}

export default Education;