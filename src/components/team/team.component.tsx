'use client';

import {ReactElement} from 'react';

import teamBlingElement from '@/assets/elements/team-bling.svg';

import bijanPortrait from '@/assets/portraits/bijan.webp';

import SectionTitleComponent from '@/components/section-title/section-title.component';
import SectionSubtitleComponent from '@/components/section-subtitle/section-subtitle.component';

import PersonComponent from './components/person/person.component';

import styles from './team.module.scss';

export default function TeamComponent(): ReactElement {
    return (
        <div id="about" className={styles.team}>
            <SectionTitleComponent
                className={styles.title}
                normal="Our Team at"
                highlight="Webtide"
                bling={teamBlingElement}
            />
            <SectionSubtitleComponent className={styles.subtitle}>
                We are a web/app development company that can help you grow your business by helping you to stand out
                from your competition and drive more traffic to your business.
            </SectionSubtitleComponent>
            <ul className={styles.people}>
                <PersonComponent
                    image={bijanPortrait}
                    name="Bijan Eisapour"
                    role="Full Stack Developer"
                    description="We are a web/app development company that can help you grow your business by helping you to stand out from your competition and drive more traffic to your business."
                />
            </ul>
        </div>
    );
}
