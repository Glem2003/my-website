// hooks
import { useState } from "react"

const useProjectInfo = () => {

    const [isOpen, setOpen] = useState<boolean>(false)
    const [isData, setData] = useState({
        titleText: '',
        date: [],
        codeLink: '',
        webLink: '',
        img: '',
        imgText: '',
        features: [],
        library: []
    })

    const handleClose = () => {
        setOpen(false)
    }

    const handleOpen = () => {
        setOpen(true)
    }

    const handleMore = (data: any) => {
        setData({ ...data })
    }

    return {
        isData,
        isOpen,
        handleMore,
        handleOpen,
        handleClose
    }
}

export default useProjectInfo