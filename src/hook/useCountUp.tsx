// hooks
import { useEffect, useState } from "react";

const useCountUp = ({
    value,
    duration = 1000,
    decimals = 0
}: {
    value: number,
    duration?: number,
    decimals?: number
}) => {

    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        let start: number | null = null;

        const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);

            const easedProgress = 1 - Math.pow(1 - progress, 3);

            const current = value * easedProgress;
            setDisplayValue(Number(current.toFixed(decimals)));

            if (progress < 1) {
                requestAnimationFrame(step);
            }
        };

        requestAnimationFrame(step);
    }, [value, duration, decimals]);

    return displayValue
}

export default useCountUp