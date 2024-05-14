import {ReactElement, useState} from 'react';

import AnimatedIconComponent from '@/components/animated-icon/animated-icon.component';

import styles from './feature.module.scss';

type Props = {
    title: string;
    subtitle: string;
    iconSrc: string;
};

export default function FeatureComponent({title, subtitle, iconSrc}: Props): ReactElement {
    const [shouldIconAnimationPlay, setShouldIconAnimationPlay] = useState<boolean>(false);

    return (
        <li
            className={styles.feature}
            onMouseEnter={() => setShouldIconAnimationPlay(true)}
            onMouseLeave={() => setShouldIconAnimationPlay(false)}
        >
            <AnimatedIconComponent src={iconSrc} shouldPlay={shouldIconAnimationPlay} />
            <div className={styles.title}>{title}</div>
            <p className={styles.subtitle}>{subtitle}</p>
        </li>
    );
}
