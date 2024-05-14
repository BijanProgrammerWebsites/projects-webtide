import {ReactElement, useEffect, useRef} from 'react';

import styles from './animated-icon.module.scss';

type Props = {
    src: string;
    shouldPlay: boolean;
};

export default function AnimatedIconComponent({src, shouldPlay}: Props): ReactElement {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (shouldPlay && videoRef.current?.paused) {
            videoRef.current.currentTime = 0;
            videoRef.current.play().then();
        }
    }, [shouldPlay]);

    const videoEndedHandler = (): void => {
        if (!shouldPlay || !videoRef.current) {
            return;
        }

        videoRef.current.currentTime = 0;
        videoRef.current.play().then();
    };

    return (
        <video
            ref={videoRef}
            className={styles['animated-icon']}
            src={src}
            muted
            playsInline
            onEnded={videoEndedHandler}
        >
            Your browser does not support video tag.
        </video>
    );
}
