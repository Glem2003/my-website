type buttonType = 'button' | 'submit' | 'reset'

export interface buttonProps {
    name?: string
    icon?: React.ReactNode
    disabled?: boolean
    btnClick?: () => void
    className?: string,
    type?: buttonType
}