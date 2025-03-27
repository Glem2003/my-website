import clsx from 'clsx'

// style
import style from './button.module.sass'

// type
import { buttonProps } from './button.type'

const Button: React.FC<buttonProps> = (props) => {

    const { name, icon, disabled, btnClick, className, type = 'button' } = props

    return (
        <button
            className={
                clsx(
                    className,
                    icon ? style.button : `${style.button} ${style['button--display-block']}`,
                    disabled && `${style['button--disabled']}`
                )
            }
            disabled={disabled}
            onClick={btnClick}
            type={type}
        >
            {name && <p>{name}</p>}
            {icon && <span className={style.icon}>{icon}</span>}
        </button>
    )
}

export default Button