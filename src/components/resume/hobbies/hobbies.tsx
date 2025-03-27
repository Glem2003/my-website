// style
import './hobbies.sass'

// components
import DateText from "../common/_date/date";
import TitleText from "../common/_title/title";

// type
import { hobbiesProps } from './hobbies.type';

const Hobbies: React.FC<hobbiesProps> = (props) => {

    const { subtitle, title } = props

    return (
        <div className="hobbies">
            <DateText date={subtitle} />
            <TitleText title={title} />
        </div>
    )
}

export default Hobbies;