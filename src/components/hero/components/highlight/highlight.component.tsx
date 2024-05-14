import {ReactElement} from 'react';

import clsx, {ClassValue} from 'clsx';

import styles from './highlight.module.scss';

type Props = {
    className: ClassValue;
};

export default function HighlightComponent({className}: Props): ReactElement {
    const text = 'Web development';

    return (
        <span className={clsx(styles.highlight, className)}>
            {text.split('').map((character, index) => (
                <span key={index} className={styles.character} style={{animationDelay: `${index * 0.1}s`}}>
                    {character}
                </span>
            ))}
        </span>
    );
}
