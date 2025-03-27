import clsx from 'clsx';

// style
import style from './title.module.sass';

// type
import { titleProps } from './title.type';

const Title: React.FC<titleProps> = (props) => {

    const { title } = props

    return (
        <>
            <h1 className={
                clsx(
                    title.length < 6 && style['title--small']
                )}
            >
                {title}
            </h1>
        </>
    )
}

export default Title