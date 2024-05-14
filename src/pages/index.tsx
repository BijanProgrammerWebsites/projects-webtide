import {ReactElement} from 'react';

import Head from 'next/head';

import HeaderComponent from '@/components/header/header.component';
import HeroComponent from '@/components/hero/hero.component';
import ProjectsComponent from '@/components/projects/projects.component';
import SolutionsComponent from '@/components/solutions/solutions.component';
import ReviewsComponent from '@/components/reviews/reviews.component';
import TeamComponent from '@/components/team/team.component';
import FeaturesComponent from '@/components/features/features.component';
import ContactUsComponent from '@/components/contact-us/contact-us.component';
import FooterComponent from '@/components/footer/footer.component';

import styles from './index.module.scss';

export default function HomePage(): ReactElement {
    return (
        <>
            <Head>
                <title>Webtide</title>
                <meta name="description" content="Elevate your digital experience with cutting-edge Web development." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <HeaderComponent />
            <main className={styles.main}>
                <HeroComponent />
                <ProjectsComponent />
                <SolutionsComponent />
                <ReviewsComponent />
                <TeamComponent />
                <FeaturesComponent />
                <ContactUsComponent />
            </main>
            <FooterComponent />
        </>
    );
}
