import { useSpring, useTransform } from 'motion/react';
import React, { useEffect } from 'react';
import { MotionSpan } from './MotionWrapper';

export default function AnimateNumber({ value }) {
  const isNumber = !isNaN(Number(value)) && value !== '--';
  const displayValue = isNumber ? Number(value) : 0;

  const spring = useSpring(0, { bounce: 0, duration: 1000 });

  useEffect(() => {
    if (isNumber) {
      spring.set(displayValue);
    } else {
      spring.set(0);
    }
  }, [displayValue, isNumber, spring]);

  const transform = useTransform(spring, (current) => Math.round(current));

  if (!isNumber) return <span>--</span>;

  return <MotionSpan>{transform}</MotionSpan>;
}
