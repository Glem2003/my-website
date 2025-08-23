export interface langMenuType {
    open: boolean,
    isLoad: boolean,
    isLang: string,
    onClose: () => void
    handleActive: (value: string) => void
}