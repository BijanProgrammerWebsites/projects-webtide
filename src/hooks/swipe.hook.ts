import {TouchEvent, useState} from 'react';

type Touch = {
    x: number;
    y: number;
};

export type Options = {
    onSwipeHorizontally?: (direction: 'left' | 'right') => unknown;
    onSwipeVertically?: (direction: 'up' | 'down') => unknown;
};

const MIN_SWIPE_DISTANCE = 50;

export default function useSwipe(options: Options): {
    onTouchStart: (e: TouchEvent) => void;
    onTouchMove: (e: TouchEvent) => void;
    onTouchEnd: () => void;
} {
    const [touchStart, setTouchStart] = useState<Touch>({x: 0, y: 0});
    const [touchEnd, setTouchEnd] = useState<Touch>({x: 0, y: 0});

    const onTouchStart = (e: TouchEvent): void => {
        setTouchStart({x: e.targetTouches[0].clientX, y: e.targetTouches[0].clientY});
        setTouchEnd({x: e.targetTouches[0].clientX, y: e.targetTouches[0].clientY});
    };

    const onTouchMove = (e: TouchEvent): void => {
        setTouchEnd({x: e.targetTouches[0].clientX, y: e.targetTouches[0].clientY});
    };

    const onTouchEnd = (): void => {
        const deltaX = touchStart.x - touchEnd.x;
        const deltaY = touchStart.y - touchEnd.y;

        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            const isLeftSwipe = deltaX > MIN_SWIPE_DISTANCE;
            const isRightSwipe = deltaX < -MIN_SWIPE_DISTANCE;

            if (isLeftSwipe) {
                options.onSwipeHorizontally?.('left');
            } else if (isRightSwipe) {
                options.onSwipeHorizontally?.('right');
            }
        } else {
            const isUpSwipe = deltaY > MIN_SWIPE_DISTANCE;
            const isDownSwipe = deltaY < -MIN_SWIPE_DISTANCE;

            if (isUpSwipe) {
                options.onSwipeVertically?.('up');
            } else if (isDownSwipe) {
                options.onSwipeVertically?.('down');
            }
        }
    };

    return {
        onTouchStart,
        onTouchMove,
        onTouchEnd,
    };
}
