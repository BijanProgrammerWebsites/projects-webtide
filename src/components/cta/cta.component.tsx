import {ReactElement} from 'react';

import Image from 'next/image';
import Link from 'next/link';

import ctaIcon from '@/assets/icons/cta.svg';

import styles from './cta.module.scss';

export default function CtaComponent(): ReactElement {
    return (
        <Link className={styles.cta} href="#contact">
            Let’s Talk
            <Image src={ctaIcon} alt="" loading="eager" />
        </Link>
    );
}
