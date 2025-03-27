//style
import style from './date.module.sass'

// type
import { dateProps } from './date.type'

const DateText: React.FC<dateProps> = (props) => {

    const { date } = props

    return (
        <p className={style.date}>{date}</p>
    )
}

export default DateText