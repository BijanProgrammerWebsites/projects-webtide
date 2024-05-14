import {ReactElement} from 'react';

import Image from 'next/image';

import clsx from 'clsx';

import heroDividerElement from '@/assets/elements/hero-divider.jpg';
import heroSparkSmallElement from '@/assets/elements/hero-spark-small.svg';
import heroSparkLargeElement from '@/assets/elements/hero-spark-large.svg';

import heroImage from '@/assets/images/hero.png';

import heroShadow from '@/assets/shadows/hero.svg';

import CtaComponent from '@/components/cta/cta.component';

import HighlightComponent from './components/highlight/highlight.component';

import styles from './hero.module.scss';

export default function HeroComponent(): ReactElement {
    return (
        <div className={styles.hero}>
            <div className={styles.writings}>
                <h1 className={styles.title}>
                    Elevate your digital experience with
                    <br />
                    cutting-edge <HighlightComponent className={styles.highlight} />
                </h1>
                <p className={styles.subtitle}>
                    Webtide, your partner in Web & Application development, extends a hand to effortlessly expand your
                    client reach, optimizing both time and effort for your digital success.
                </p>
                <CtaComponent />
            </div>
            <div className={styles.grid}>
                <div className={styles.row}>
                    <div className={styles.title}>Elevate your</div>
                    <Image
                        className={clsx(styles.divider, styles.small)}
                        src={heroDividerElement}
                        alt=""
                        loading="eager"
                    />
                    <div className={styles.title}>digital experience</div>
                </div>
                <div className={styles.row}>
                    <p className={styles.subtitle}>
                        Webtide, your partner in Web & Application development, extends a hand to effortlessly expand
                        your client reach, optimizing both time and effort for your digital success.
                    </p>
                    <div className={styles.title}>with cutting-edge</div>
                </div>
                <div className={styles.row}>
                    <Image
                        className={clsx(styles.divider, styles.large)}
                        src={heroDividerElement}
                        alt=""
                        loading="eager"
                    />
                    <HighlightComponent className={styles.highlight} />
                    <CtaComponent />
                </div>
            </div>
            <div className={styles.visuals}>
                <Image className={styles.shadow} src={heroShadow} alt="" loading="eager" />
                <Image className={styles.shadow} src={heroShadow} alt="" loading="eager" />
                <Image className={styles.image} src={heroImage} alt="" loading="eager" />
            </div>
            <div className={styles.elements}>
                <Image className={styles.large} src={heroSparkLargeElement} alt="" loading="eager" />
                <Image className={styles.small} src={heroSparkSmallElement} alt="" loading="eager" />
            </div>
        </div>
    );
}
