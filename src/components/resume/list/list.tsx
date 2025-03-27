import clsx from 'clsx'

// style
import style from './list.module.sass'

// type
import { listProps } from './list.type'

const List: React.FC<listProps> = (props) => {

    const {
        listText,
        listClass,
        listHandle
    } = props

    return (
        <li
            className={clsx(
                listClass && `${style[`${listClass}`]}`,
                style.list
            )}
            onClick={listHandle}
        >
            {listText}
        </li>
    )
}

export default List