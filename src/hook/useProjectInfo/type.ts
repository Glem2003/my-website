export interface ProjectData {
    titleText: string,
    date: string[],
    codeLink: string,
    webLink: string,
    img: string,
    imgText: string,
    features: string[],
    library: string[]
}

export interface State {
    isOpen: boolean;
    data: ProjectData;
}

export type Action =
    | { type: 'OPEN' }
    | { type: 'CLOSE' }
    | { type: 'SET_DATA'; payload: ProjectData }