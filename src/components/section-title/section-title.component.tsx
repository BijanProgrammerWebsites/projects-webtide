import {ReactElement, ComponentProps} from 'react';

import Image from 'next/image';

import clsx, {ClassValue} from 'clsx';

import styles from './section-title.module.scss';

type Props = {
    className?: ClassValue;
    normal: string;
    highlight: string;
    bling: ComponentProps<typeof Image>['src'];
};

export default function SectionTitleComponent({className, normal, highlight, bling}: Props): ReactElement {
    return (
        <h2 className={clsx(styles.title, className)}>
            <div className={styles.normal}>{normal}</div>
            <div className={styles.highlight}>
                {highlight}
                <Image className={styles.bling} src={bling} alt="" />
            </div>
        </h2>
    );
}
