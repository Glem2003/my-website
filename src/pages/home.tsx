// component
//import { Box } from "@mui/material"
import DefaultPages from "../components/common/defaultPages/defaultPages"

// hooks
import { useTranslation } from "react-i18next"

const HomePage = () => {

    const { t } = useTranslation()

    /*
    alert(`*The current version is still under development, some features are not ready yet!*
        
        目前版本尚在開發中，有些功能尚未完全！
        `)
    */

    return (
        <DefaultPages title={t("home")} subtitle={t("central_hub")}>
        </DefaultPages>
    )
}

export default HomePage