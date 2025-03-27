import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

// hook
import useIsMobile from '../../../hook/useIsMobile';

// style
import './languageSwitcher.sass';

const LanguageSwitcher = () => {

    const { isMobile } = useIsMobile()
    const { i18n } = useTranslation()

    const [isChecked, setIsChecked] = useState<boolean>(i18n.language === 'zh-TW');

    useEffect(() => {
        document.documentElement.lang = i18n.language;
        setIsChecked(i18n.language === 'zh-TW');
    }, [i18n.language]);

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <>
            {
                !isMobile && (
                    <div className='languageSwitcher'>
                        {i18n.language === 'en' ? (
                            <p onClick={() => changeLanguage('zh-TW')}>中</p>
                        ) : (
                            <p onClick={() => changeLanguage('en')}>EN</p>
                        )}
                    </div>
                )
            }

            {
                isMobile && (
                    <div className="checkbox-wrapper-8">
                        <input
                            type="checkbox"
                            id="cb3-8"
                            className="tgl tgl-skewed"
                            checked={isChecked} // 這裡使用 state 來控制勾選狀態
                            onChange={() => changeLanguage(i18n.language === 'en' ? 'zh-TW' : 'en')}
                        />
                        <label htmlFor="cb3-8" data-tg-on="中文" data-tg-off="EN" className="tgl-btn" />
                    </div>
                )
            }
        </>
    )
}

export default LanguageSwitcher;