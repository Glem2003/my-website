export interface projectContentType {
    open: boolean,
    onClose: () => void,
    title: string,
    webLink: string,
    codeLink: string,
    date: string[],
    features: string[]
    library: string[],
    img: string,
    imgText: string,
    lib?: string[]
}