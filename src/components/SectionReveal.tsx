import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface SectionRevealProps {
    children: ReactNode;
    className?: string;
    direction?: 'up' | 'down' | 'left' | 'right';
    delay?: number;
}

const SectionReveal = ({
    children,
    className = '',
    direction = 'up',
    delay = 0
}: SectionRevealProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const getInitialPosition = () => {
        switch (direction) {
            case 'up': return { y: 80, x: 0 };
            case 'down': return { y: -80, x: 0 };
            case 'left': return { y: 0, x: 80 };
            case 'right': return { y: 0, x: -80 };
        }
    };

    const initial = getInitialPosition();

    return (
        <motion.div
      ref= { ref }
    initial = {{ opacity: 0, ...initial }
}
animate = { isInView? { opacity: 1, y: 0, x: 0 } : { opacity: 0, ...initial }}
transition = {{
    duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
className = { className }
    >
    { children }
    </motion.div>
  );
};

export default SectionReveal;