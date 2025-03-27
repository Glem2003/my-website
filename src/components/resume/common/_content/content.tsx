import clsx from 'clsx'

// hook
import { useTranslation } from 'react-i18next'

// style
import style from './content.module.sass'

// type
import { contentProps } from './content.type'

const ContentText: React.FC<contentProps> = (props) => {

    const { content } = props
    const { t } = useTranslation()

    return (
        typeof content === 'string' ? (
            <p className={style.content}>{content}</p>
        ) : (
            <ul>
                {content.map((item, index) => (
                    <li
                        key={index}
                        className={clsx(
                            `${style.content} ${style['content--number']}`
                        )}
                    >
                        {t(item)}
                    </li>
                ))}
            </ul>
        )
    )
}

export default ContentText