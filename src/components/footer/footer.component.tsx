import React, {ReactElement} from 'react';

import Image from 'next/image';
import Link from 'next/link';

import logo from '@/assets/logos/webtide.svg';

import SocialsComponent from '@/components/socials/socials.component';

import styles from './footer.module.scss';

export default function FooterComponent(): ReactElement {
    return (
        <div className={styles.footer}>
            <div className={styles.heading}>
                <Link className={styles.title} href="/">
                    <Image className={styles.logo} src={logo} alt="" />
                    Webtide
                </Link>
                <p className={styles.subtitle}>
                    Webtide, your partner in Web & Application development, extends a hand to effortlessly expand your
                    client reach, optimizing both time and effort for your digital success.
                </p>
            </div>
            <div className={styles.links}>
                <div className={styles.title}>Quick Links</div>
                <ul>
                    <li>
                        <Link href="#services">Services</Link>
                    </li>
                    <li>
                        <Link href="#projects">Projects</Link>
                    </li>
                    <li>
                        <Link href="#contact">Contact</Link>
                    </li>
                    <li>
                        <Link href="#about">About</Link>
                    </li>
                </ul>
            </div>
            <div className={styles.contact}>
                <div className={styles.title}>The Contact Info</div>
                <ul>
                    <li>
                        <Link href="mailto:bijaneisapour@gmail.com">bijaneisapour@gmail.com</Link>
                    </li>
                    <li>
                        <Link href="tel:+989124210720">+98 9124210720</Link>
                    </li>
                </ul>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.copyright}>&copy; Copyright 2023 Webtide. All rights reserved.</div>
            <div className={styles.socials}>
                <SocialsComponent isSmall={true} />
            </div>
        </div>
    );
}
