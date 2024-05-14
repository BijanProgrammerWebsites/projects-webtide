'use client';

import React, {MouseEvent, ReactElement, useEffect, useState} from 'react';

import Image from 'next/image';
import Link from 'next/link';

import clsx from 'clsx';

import logo from '@/assets/logos/webtide.svg';

import menuIcon from '@/assets/icons/menu.svg';
import closeIcon from '@/assets/icons/close.svg';

import CtaComponent from '@/components/cta/cta.component';

import styles from './header.module.scss';

export default function HeaderComponent(): ReactElement {
    const [isNavClosed, setIsNavClosed] = useState<boolean>(true);

    useEffect(() => {
        const scrollHandler = (): void => {
            setIsNavClosed(true);
        };

        window.removeEventListener('scroll', scrollHandler);
        window.addEventListener('scroll', scrollHandler);

        return (): void => {
            window.removeEventListener('scroll', scrollHandler);
        };
    }, []);

    const menuButtonClickHandler = (): void => {
        setIsNavClosed((old) => !old);
    };

    const backdropClickHandler = (e: MouseEvent<HTMLDivElement>): void => {
        if (e.currentTarget.closest('header')) {
            return;
        }

        setIsNavClosed(true);
    };

    return (
        <>
            <header className={styles.header}>
                <Link className={styles.logo} href="/" title="Webtide">
                    <Image src={logo} alt="" loading="eager" />
                </Link>
                <nav className={clsx(styles.nav, isNavClosed && styles.closed)}>
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
                </nav>
                <button className={styles.menu} onClick={menuButtonClickHandler}>
                    <Image src={isNavClosed ? menuIcon : closeIcon} alt="" loading="eager" />
                </button>
                <div className={styles.cta}>
                    <CtaComponent />
                </div>
            </header>
            <div className={clsx(styles.backdrop, isNavClosed && styles.hidden)} onClick={backdropClickHandler}></div>
        </>
    );
}
