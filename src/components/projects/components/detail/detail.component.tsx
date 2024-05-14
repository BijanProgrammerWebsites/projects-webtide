import {MouseEventHandler, ReactElement} from 'react';

import Image from 'next/image';
import Link from 'next/link';

import {Flipped} from 'react-flip-toolkit';

import clsx from 'clsx';

import ArrowRightIcon from '@/assets/icons/arrow-right.svg';

import styles from './detail.module.scss';

type Props = {
    title: string;
    description: string;
    url: string;
    tags: string[];
    isActive: boolean;
    onClick: MouseEventHandler;
};

export default function DetailComponent({title, description, url, tags, isActive, onClick}: Props): ReactElement {
    return (
        <Flipped flipId={title}>
            <li className={clsx(styles.detail, isActive && styles.active)} onClick={onClick}>
                <div className={styles.indicator}></div>
                <div className={styles.content}>
                    <Flipped inverseFlipId={title}>
                        <div className={styles.title}>{title}</div>
                    </Flipped>
                    <Link className={styles.link} href={url} target="_blank">
                        <span className={styles.text}>Website</span> <Image src={ArrowRightIcon} alt="" />
                    </Link>
                    <p className={styles.description}>{description}</p>
                    <ul className={styles.tags}>
                        {tags.map((tag) => (
                            <li key={tag} className={styles.tag}>
                                {tag}
                            </li>
                        ))}
                    </ul>
                </div>
            </li>
        </Flipped>
    );
}
