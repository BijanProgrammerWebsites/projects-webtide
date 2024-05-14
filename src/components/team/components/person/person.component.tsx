import React, {ComponentProps, ReactElement} from 'react';

import Image from 'next/image';

import teamShadow from '@/assets/shadows/team.svg';

import SocialsComponent from '@/components/socials/socials.component';

import styles from './person.module.scss';

type Props = {
    image: ComponentProps<typeof Image>['src'];
    name: string;
    role: string;
    description: string;
};

export default function PersonComponent({image, name, role, description}: Props): ReactElement {
    return (
        <li className={styles.person}>
            <div className={styles.visuals}>
                <Image className={styles.shadow} src={teamShadow} alt="" />
                <Image className={styles.image} src={image} alt="" />
            </div>
            <div className={styles.writings}>
                <div className={styles.name}>{name}</div>
                <div className={styles.role}>{role}</div>
                <p className={styles.description}>{description}</p>
                <div className={styles.socials}>
                    <SocialsComponent isSmall={true} />
                </div>
            </div>
        </li>
    );
}
