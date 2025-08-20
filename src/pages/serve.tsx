// components
import DefaultPages from "../components/common/defaultPages/defaultPages"

// hooks
import { useTranslation } from "react-i18next"

const ServePage = () => {

    const { t } = useTranslation()

    return (
        <DefaultPages title={t("serve")} subtitle={t("delivered_insights")}>
        </DefaultPages>
    )
}

export default ServePage