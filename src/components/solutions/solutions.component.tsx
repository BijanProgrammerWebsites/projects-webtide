'use client';

import {ReactElement} from 'react';

import solutionsBlingElement from '@/assets/elements/solutions-bling.svg';

import SectionTitleComponent from '@/components/section-title/section-title.component';
import SectionSubtitleComponent from '@/components/section-subtitle/section-subtitle.component';

import SolutionComponent from './components/solution/solution.component';

import styles from './solutions.module.scss';

export default function SolutionsComponent(): ReactElement {
    return (
        <div id="services" className={styles.solutions}>
            <SectionTitleComponent
                className={styles.title}
                normal="Our web & digital"
                highlight="Solutions"
                bling={solutionsBlingElement}
            />
            <SectionSubtitleComponent className={styles.subtitle}>
                At Webtide, we assure impactful Web & Digital solutions, boosting your online visibility, enhancing user
                experience, and elevating brand reputation for quality leads and improved sales.
            </SectionSubtitleComponent>
            <ul className={styles.items}>
                <SolutionComponent
                    title="Web Development"
                    description="Crafting custom websites to meet the distinct needs of your clients, our web development services ensure a seamless online experience marked by precision and innovation."
                    iconSrc="videos/browser.webm"
                />
                <SolutionComponent
                    title="E-Commerce Development"
                    description="Building e-commerce websites integrating with popular payment gateways and shopping cart solutions."
                    iconSrc="videos/shop.webm"
                />
                <SolutionComponent
                    title="SEO Services"
                    description="Optimizing your websites for search engines to improve their visibility and attract more organic traffic."
                    isHighlighted={true}
                />
                <SolutionComponent
                    title="App Development"
                    description="Customizing themes to match the branding, style, and preferences of your clients."
                    iconSrc="videos/responsive.webm"
                />
                <SolutionComponent
                    title="Theme Customization"
                    description="Customizing themes to match the branding, style, and preferences of your clients."
                    isHighlighted={true}
                />
                <SolutionComponent
                    title="Maintenance and Support"
                    description="Crafting custom websites to meet the distinct needs of your clients, our web development services ensure a seamless online experience marked by precision and innovation"
                    iconSrc="videos/support.webm"
                />
            </ul>
        </div>
    );
}
