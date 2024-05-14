import {ReactElement} from 'react';

import Image from 'next/image';

import contactUsBlingElement from '@/assets/elements/contact-us-bling.svg';
import contactUsSpiralArrowElement from '@/assets/elements/contact-us-spiral-arrow.svg';

import SectionTitleComponent from '@/components/section-title/section-title.component';
import SectionSubtitleComponent from '@/components/section-subtitle/section-subtitle.component';

import WaysComponent from './components/ways/ways.component';
import FormComponent from './components/form/form.component';

import styles from './contact-us.module.scss';

export default function ContactUsComponent(): ReactElement {
    return (
        <div id="contact" className={styles['contact-us']}>
            <SectionTitleComponent
                className={styles.title}
                normal="Project in Mind?"
                highlight="Contact Us"
                bling={contactUsBlingElement}
            />
            <SectionSubtitleComponent className={styles.subtitle}>
                Build high-quality software products that supports your business goals & delivers the best user
                experience. Leave your contact information here and a small description of your problem so we can
                contact you and solve your problem.
            </SectionSubtitleComponent>
            <WaysComponent />
            <FormComponent />
            <Image className={styles.spiral} src={contactUsSpiralArrowElement} alt="" />
        </div>
    );
}
