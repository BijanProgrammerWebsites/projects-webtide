'use client';

import {ComponentProps, ReactElement, useContext} from 'react';

import {Flipper} from 'react-flip-toolkit';

import clsx, {ClassValue} from 'clsx';

import useSwipe from '@/hooks/swipe.hook';

import DetailComponent from '../detail/detail.component';

import {ActiveContext} from '../../providers/active/active.provider';

import styles from './details.module.scss';

type Detail = Omit<ComponentProps<typeof DetailComponent>, 'isActive' | 'onClick'>;

type Props = {
    className: ClassValue;
    details: Detail[];
};

export default function DetailsComponent({className, details}: Props): ReactElement {
    const {activeIndex, setActiveIndex, goBack, goNext} = useContext(ActiveContext);

    const eventHandlers = useSwipe({
        onSwipeHorizontally: (direction) => {
            if (direction === 'right') {
                goBack();
            } else {
                goNext();
            }
        },
    });

    return (
        <Flipper flipKey={activeIndex}>
            <ol className={clsx(styles.details, className)} {...eventHandlers}>
                {details.map((detail, index) => (
                    <DetailComponent
                        key={index}
                        {...detail}
                        isActive={index === activeIndex}
                        onClick={() => setActiveIndex(index)}
                    />
                ))}
            </ol>
        </Flipper>
    );
}
