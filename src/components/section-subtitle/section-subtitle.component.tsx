import {PropsWithChildren, ReactElement} from 'react';

import clsx, {ClassValue} from 'clsx';

import styles from './section-subtitle.module.scss';

type Props = PropsWithChildren & {
    className?: ClassValue;
};

export default function SectionSubtitleComponent({children, className}: Props): ReactElement {
    return <p className={clsx(styles.subtitle, className)}>{children}</p>;
}
