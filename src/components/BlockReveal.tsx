import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface BlockRevealProps {
    children: ReactNode;
    className?: string;
    color?: string;
    delay?: number;
}

const BlockReveal = ({
    children,
    className = '',
    color = 'bg-primary',
    delay = 0
}: BlockRevealProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    return (
        <div ref= { ref } className = {`relative overflow-hidden ${className}`
}>
    <motion.div
        className={ `absolute inset-0 ${color} z-10` }
initial = {{ x: 0 }}
animate = { isInView? { x: '101%' } : { x: 0 }}
transition = {{
    duration: 0.6,
        delay,
        ease: [0.77, 0, 0.175, 1],
        }}
      />

    < motion.div
initial = {{ opacity: 0 }}
animate = { isInView? { opacity: 1 } : { opacity: 0 }}
transition = {{
    duration: 0.4,
        delay: delay + 0.3,
        }}
      >
    { children }
    </motion.div>
    </div>
  );
};

export default BlockReveal;