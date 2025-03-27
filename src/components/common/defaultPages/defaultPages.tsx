// hook
import { useTranslation } from 'react-i18next';

// icon
import { CgMenuHotdog } from "../../../assets/icon/index";

// component
import Header from "../../header/header";
import Footer from "../../footer/footer";

// type
import { defaultPagesProps } from './defaultPages.type'

// data
import { navItems } from '../../../data/navItems';

const DefaultPages: React.FC<defaultPagesProps> = (props) => {

    const { t } = useTranslation()
    const { children } = props

    return (
        <>
            <Header
                lists={navItems}
                headerMenuIcon={<CgMenuHotdog />}
            />
            {children}
            <Footer
                copyright={t('copyright')}
                version={t('version')}
            />
        </>
    )
}

export default DefaultPages