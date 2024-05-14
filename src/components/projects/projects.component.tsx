import {ReactElement} from 'react';

import Image from 'next/image';

import projectsBlingElement from '@/assets/elements/projects-bling.svg';
import projectsSpiralArrowElement from '@/assets/elements/projects-spiral-arrow.svg';

import projectPaylyImage from '@/assets/images/project-payly.png';
import projectGcgImage from '@/assets/images/project-gcg.png';
import projectGavariStudioImage from '@/assets/images/project-gavari-studio.png';

import SectionTitleComponent from '@/components/section-title/section-title.component';
import SectionSubtitleComponent from '@/components/section-subtitle/section-subtitle.component';

import ScreenshotsComponent from '@/components/projects/components/screenshots/screenshots.component';
import DetailsComponent from './components/details/details.component';

import ActiveProvider from './providers/active/active.provider';

import styles from './projects.module.scss';

export default function ProjectsComponent(): ReactElement {
    return (
        <div id="projects" className={styles.projects}>
            <SectionTitleComponent
                className={styles.title}
                normal="Recent"
                highlight="Projects"
                bling={projectsBlingElement}
            />
            <SectionSubtitleComponent className={styles.subtitle}>
                Recently we have crafted responsive websites optimized for search engines & deliver a seamless digital
                experience to customers. From designing intuitive UI/UX to implementing effective e-commerce solutions.
            </SectionSubtitleComponent>
            <ActiveProvider itemsCount={3}>
                <ScreenshotsComponent
                    className={styles.screenshots}
                    screenshots={[projectPaylyImage, projectGcgImage, projectGavariStudioImage]}
                />
                <DetailsComponent
                    className={styles.details}
                    details={[
                        {
                            title: 'Payly',
                            description:
                                'Payly is a crypto currency B2B service that provides user with many features in the world of crytpo currency, it has a unique user experience design and a greatly secure transaction system which is trusted by many users.',
                            url: '#',
                            tags: ['SEO Services', 'Website Development'],
                        },
                        {
                            title: 'GCG',
                            description:
                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem minima natus non officiis, praesentium sint tenetur unde? Amet consequatur cum earum eligendi eveniet harum illo inventore iste laudantium.',
                            url: '#',
                            tags: ['Android', 'iOS'],
                        },
                        {
                            title: 'Gavari studio',
                            description:
                                'A amet consequatur cum dicta, ducimus eaque error exercitationem expedita inventore ipsam itaque maxime molestias non praesentium quam quidem repellat reprehenderit rerum sed tempora. Alias dolorem facilis nihil temporibus ullam!',
                            url: '#',
                            tags: ['Finance'],
                        },
                    ]}
                />
            </ActiveProvider>
            <Image className={styles.spiral} src={projectsSpiralArrowElement} alt="" />
        </div>
    );
}
