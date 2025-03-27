// style
import './about.sass';

// icon
import { MdArrowOutward, IoMdDownload } from '../../assets/icon/index';

// hook
import { useTranslation } from 'react-i18next';

// component
import DefaultPages from '../../components/common/defaultPages/defaultPages';
import Title from '../../components/common/title/title';
import Button from '../../components/common/button/button';
import TextInfo from '../../components/common/textInfo/textInfo';

const AboutPage = () => {

    const { t } = useTranslation();

    return (
        <DefaultPages>

            <section className='about'>

                <Title title={t('hi')} />
                <TextInfo
                    title={t('mySelf')}
                    description={t('myEnglishName...')}
                />

                <div className="about__buttonItems">

                    <a href='mailto:glem920813@gmail.com'>
                        <Button
                            name={t('contactMe')}
                            icon={<MdArrowOutward />}
                            className='about__btnEmail'
                        />
                    </a>

                    <Button
                        name={t('downloadCV')}
                        icon={<IoMdDownload />}
                        className='about__btnDownload'
                        disabled
                    />

                </div>

            </section>
        </DefaultPages>
    )
}

export default AboutPage;