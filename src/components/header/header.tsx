import { Link } from 'react-router-dom';

// style
import './header.sass';

// icon
import { AiOutlineCloseCircle } from '../../assets/icon/index'

// hook
import useMobileMenuActive from '../../hook/useMobileMenuActive';
import { useTranslation } from 'react-i18next';
import useBreakPoint from '../../hook/useBreakPoint';

// components
import LanguageSwitcher from '../common/languageSwitcher/languageSwitcher';

// type
import { headerProps } from './header.type';

const Header: React.FC<headerProps> = (props) => {

    const {
        lists,
        headerMenuIcon
    } = props

    const { t } = useTranslation()

    const { isActive: handleMenuActive, handleClick: handleMenuClick } = useMobileMenuActive()
    const { isMobile } = useBreakPoint()

    return (
        <header className='header'>

            {/* desktop menu */}
            <ul className='header__menu'>
                {lists && lists.map((list, index) => (
                    <li
                        key={index}
                        className='header__list'
                    >
                        <Link to={list.to}>{t(list.text)}</Link>
                    </li>
                ))}
            </ul>

            {!isMobile && (<LanguageSwitcher />)}

            {/* mobile menu */}
            <div className='header__mobileMenu' onClick={handleMenuClick}>
                {handleMenuActive ? (<AiOutlineCloseCircle style={{ color: 'black' }} />) : headerMenuIcon}
            </div>

            <main className='header__mobileMain'>

                <ul className='header__mobileItem'>
                    {lists && lists.map((list, index) => (
                        <li
                            key={index}
                            className='header__mobileList'
                        >
                            <Link to={list.to}>{t(list.text)}</Link>
                        </li>
                    ))}
                </ul>

                {isMobile && (<LanguageSwitcher />)}

                <div className="header__mainBody" onClick={handleMenuClick}></div>
            </main>

        </header>
    );
};

export default Header;