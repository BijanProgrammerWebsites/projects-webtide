import {ReactElement} from 'react';

import Link from 'next/link';

import SocialsComponent from '@/components/socials/socials.component';

import styles from './ways.module.scss';

export default function WaysComponent(): ReactElement {
    return (
        <ul className={styles.ways}>
            <li className={styles.way}>
                <div className={styles.title}>You can email us at</div>
                <div className={styles.content}>
                    <Link href="mailto:bijaneisapour@gmail.com">bijaneisapour@gmail.com</Link>
                </div>
            </li>
            <li className={styles.way}>
                <div className={styles.title}>Or call us at</div>
                <div className={styles.content}>
                    <Link href="tel:+989124210720">+98 9124210720</Link>
                </div>
            </li>
            <li className={styles.way}>
                <div className={styles.title}>Follow us in Social media</div>
                <div className={styles.content}>
                    <SocialsComponent />
                </div>
            </li>
        </ul>
    );
}
