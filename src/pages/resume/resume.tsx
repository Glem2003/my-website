// style
import './resume.sass'

// hook
import { useTranslation } from 'react-i18next';
import useActive from '../../hook/useActive';

// component
import DefaultPages from '../../components/common/defaultPages/defaultPages';
import Title from '../../components/common/title/title';
import List from '../../components/resume/list/list';
import ExperienceCard from '../../components/resume/experience/experience';
import ToolsOfChoice from '../../components/resume/toolsOfChoice/toolsOfChoice';
import Education from '../../components/resume/education/education';
import Hobbies from '../../components/resume/hobbies/hobbies';

// data
import { lists } from '../../data/resume/lists';
import { experience } from '../../data/resume/experience';
import { toolsOfChoice } from '../../data/resume/toolsOfChoice';
import { education } from '../../data/resume/education';
import { hobbies } from '../../data/resume/hobbies';

const ResumePage = () => {

    const { t } = useTranslation()

    const { active, handleClick } = useActive()

    return (
        <DefaultPages>

            <div className="resume">

                <section className="resume__head">
                    <Title title={t('resume')} />
                </section>

                <div className="resume__slide">
                    <ul>
                        {lists.map((item) => (
                            <List
                                listText={t(item.text)}
                                listClass={active === item.text ? 'list--active' : ''}
                                listHandle={() => handleClick(item.text)}
                            />
                        ))}
                    </ul>
                </div>

                <main className="resume__main">

                    {active === 'experience' && experience.map(({
                        firstDate,
                        lastDate,
                        title,
                        content
                    }, index) => (
                        <ExperienceCard
                            key={index}
                            firstDate={firstDate}
                            lastDate={lastDate}
                            title={t(title)}
                            content={content}
                        />
                    ))}

                    {active === 'toolsOfChoice' && toolsOfChoice.map(({
                        subtitle,
                        title
                    }, index) => (
                        <ToolsOfChoice
                            key={index}
                            subtitle={t(subtitle)}
                            title={title}
                        />
                    ))}

                    {active === 'education' && education.map(({
                        firstDate,
                        lastDate,
                        title,
                        content
                    }, index) => (
                        <Education
                            key={index}
                            firstDate={firstDate}
                            lastDate={lastDate}
                            title={t(title)}
                            content={t(content)}
                        />
                    ))}

                    {active === 'hobbies' && hobbies.map(({
                        subtitle,
                        title
                    }, index) => (
                        <Hobbies
                            key={index}
                            subtitle={t(subtitle)}
                            title={t(title)}
                        />
                    ))}

                </main>

            </div>

        </DefaultPages>
    )
}

export default ResumePage;