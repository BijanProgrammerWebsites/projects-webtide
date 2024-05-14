'use client';

import {ReactElement} from 'react';

import reviewsBlingElement from '@/assets/elements/reviews-bling.svg';

import jackPortrait from '@/assets/portraits/jack.webp';
import jamesPortrait from '@/assets/portraits/james.webp';
import katePortrait from '@/assets/portraits/kate.webp';

import SectionTitleComponent from '@/components/section-title/section-title.component';
import SectionSubtitleComponent from '@/components/section-subtitle/section-subtitle.component';

import SliderComponent from './components/slider/slider.component';

import styles from './reviews.module.scss';

export default function ReviewsComponent(): ReactElement {
    return (
        <div className={styles.reviews}>
            <SectionTitleComponent
                className={styles.title}
                normal="Webtide"
                highlight="Reviews"
                bling={reviewsBlingElement}
            />
            <SectionSubtitleComponent className={styles.subtitle}>
                Recently we have crafted responsive websites optimized for search engines & deliver a seamless digital
                experience to customers. From designing intuitive UI/UX to implementing effective e-commerce solutions.
            </SectionSubtitleComponent>
            <div className={styles.slider}>
                <SliderComponent
                    reviews={[
                        {
                            image: jackPortrait,
                            name: 'Jack Shepherd',
                            company: 'Oceanic Company',
                            quote: 'Understanding the need and quick production of the project made us highly satisfied with the Webtide team and we will definitely cooperate with this team in the next projects.',
                        },
                        {
                            image: katePortrait,
                            name: 'Kate Austen',
                            company: '815 Company',
                            quote: 'Understanding the need and quick production of the project made us highly satisfied with the Webtide team and we will definitely cooperate with this team in the next projects.',
                        },
                        {
                            image: jamesPortrait,
                            name: 'James Ford',
                            company: 'Island Company',
                            quote: 'Understanding the need and quick production of the project made us highly satisfied with the Webtide team and we will definitely cooperate with this team in the next projects.',
                        },
                    ]}
                />
            </div>
        </div>
    );
}
