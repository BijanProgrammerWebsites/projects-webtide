import {ReactElement, useState} from 'react';

import Image from 'next/image';

import clsx from 'clsx';

import solutionShadow from '@/assets/shadows/solution.svg';

import AnimatedIconComponent from '@/components/animated-icon/animated-icon.component';

import styles from './solution.module.scss';

type Props = {
    title: string;
    description: string;
    iconSrc?: string;
    isHighlighted?: boolean;
};

export default function SolutionComponent({title, description, iconSrc, isHighlighted}: Props): ReactElement {
    const [shouldIconAnimationPlay, setShouldIconAnimationPlay] = useState<boolean>(false);

    return (
        <li
            className={clsx(styles.solution, !!isHighlighted && styles.highlighted)}
            onMouseEnter={() => setShouldIconAnimationPlay(true)}
            onMouseLeave={() => setShouldIconAnimationPlay(false)}
        >
            {!!isHighlighted && <Image className={styles.shadow} src={solutionShadow} alt="" />}
            <div className={styles.writings}>
                <div className={styles.title}>{title}</div>
                <p className={styles.description}>{description}</p>
            </div>
            {!isHighlighted && !!iconSrc && (
                <div className={styles.visuals}>
                    <AnimatedIconComponent src={iconSrc} shouldPlay={shouldIconAnimationPlay} />
                </div>
            )}
        </li>
    );
}
