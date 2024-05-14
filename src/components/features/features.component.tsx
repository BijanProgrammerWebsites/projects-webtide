import {ReactElement} from 'react';

import FeatureComponent from './components/feature/feature.component';

import styles from './features.module.scss';

export default function FeaturesComponent(): ReactElement {
    return (
        <div className={styles.features}>
            <ul className={styles.items}>
                <FeatureComponent
                    title="Premium brand web development"
                    subtitle="Improvised UX, performance for superior marketing results."
                    iconSrc="videos/optimized.webm"
                />
                <FeatureComponent
                    title="Team of web development specialists"
                    subtitle="Access vetted experts in the web tech stack of your choice."
                    iconSrc="videos/team.webm"
                />
                <FeatureComponent
                    title="Long term support web development"
                    subtitle="Get our free support even after project completion."
                    iconSrc="videos/guarantee.webm"
                />
            </ul>
        </div>
    );
}
