'use client';

import {ComponentProps, ReactElement, useContext} from 'react';

import Image from 'next/image';

import clsx, {ClassValue} from 'clsx';

import projectShadow from '@/assets/shadows/project.svg';

import useSwipe from '@/hooks/swipe.hook';

import {ActiveContext} from '../../providers/active/active.provider';

import styles from './screenshots.module.scss';

type Props = {
    className: ClassValue;
    screenshots: ComponentProps<typeof Image>['src'][];
};

export default function ScreenshotsComponent({className, screenshots}: Props): ReactElement {
    const {activeIndex, setActiveIndex, goBack, goNext} = useContext(ActiveContext);

    const eventHandlers = useSwipe({
        onSwipeHorizontally: (direction) => {
            if (direction === 'right') {
                goBack();
            } else {
                goNext();
            }
        },
    });

    return (
        <div className={clsx(styles.screenshots, className)} {...eventHandlers}>
            <Image className={styles.shadow} src={projectShadow} alt="" />
            {screenshots.map((screenshot, index) => (
                <Image
                    key={index}
                    className={clsx(styles.image, index === activeIndex && styles.active)}
                    src={screenshot}
                    alt=""
                />
            ))}
            <ol className={styles.bullets}>
                {screenshots.map((_, index) => (
                    <li
                        key={index}
                        className={clsx(styles.bullet, index === activeIndex && styles.active)}
                        onClick={() => setActiveIndex(index)}
                    ></li>
                ))}
            </ol>
        </div>
    );
}
