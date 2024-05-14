import {ComponentProps, MouseEventHandler, ReactElement} from 'react';

import Image from 'next/image';

import clsx, {ClassValue} from 'clsx';

import quoteStartWatermark from '@/assets/watermarks/quote-start-watermark.svg';
import quoteEndWatermark from '@/assets/watermarks/quote-end-watermark.svg';

import styles from './review.module.scss';

type Props = {
    image: ComponentProps<typeof Image>['src'];
    name: string;
    company: string;
    quote: string;
    className: ClassValue;
    onClick: MouseEventHandler;
};

export default function ReviewComponent({image, name, company, quote, className, onClick}: Props): ReactElement {
    return (
        <li className={clsx(styles.review, className)} onClick={onClick}>
            <Image className={clsx(styles.watermark, styles.start)} src={quoteStartWatermark} alt="" />
            <p className={styles.quote}>{quote}</p>
            <div className={styles.cite}>
                <Image className={styles.image} src={image} alt="" />
                <div className={styles.name}>{name}</div>
                <div className={styles.company}>{company}</div>
            </div>
            <Image className={clsx(styles.watermark, styles.end)} src={quoteEndWatermark} alt="" />
        </li>
    );
}
