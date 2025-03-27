// style
import './project.sass';

// hook
import { useTranslation } from 'react-i18next';

// data
import projectContent from '../../data/project';

// component
import DefaultPages from '../../components/common/defaultPages/defaultPages';
import Title from '../../components/common/title/title';
import ProjectCard from '../../components/common/projectCard/projectCard';

const ProjectsPage = () => {

    const { t } = useTranslation();

    return (
        <DefaultPages>

            <>
                <section>
                    <Title title={t('projects')} />
                </section>


                <main>
                    <div className="projectItems">
                        {projectContent && projectContent.map((item, index) => {
                            return <ProjectCard key={index}{...item} />
                        })}
                    </div>
                </main>

            </>

        </DefaultPages>
    )
}

export default ProjectsPage;