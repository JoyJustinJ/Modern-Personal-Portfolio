import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);

    const springConfig = { damping: 25, stiffness: 400 };
    const cursorX = useSpring(0, springConfig);
    const cursorY = useSpring(0, springConfig);

    const outlineSpringConfig = { damping: 20, stiffness: 200 };
    const outlineX = useSpring(0, outlineSpringConfig);
    const outlineY = useSpring(0, outlineSpringConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
            cursorX.set(e.clientX - 4);
            cursorY.set(e.clientY - 4);
            outlineX.set(e.clientX - 20);
            outlineY.set(e.clientY - 20);
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('cursor-hover')
            ) {
                setIsHovering(true);
            }
        };

        const handleMouseOut = () => setIsHovering(false);

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('mouseover', handleMouseOver);
        window.addEventListener('mouseout', handleMouseOut);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('mouseover', handleMouseOver);
            window.removeEventListener('mouseout', handleMouseOut);
        };
    }, [cursorX, cursorY, outlineX, outlineY]);

    if (typeof window !== 'undefined' && 'ontouchstart' in window) {
        return null;
    }

    return (
        <>
            <motion.div
                className="pointer-events-none fixed z-[9999] mix-blend-difference"
                style={{
                    x: cursorX,
                    y: cursorY,
                }}
            >
                <motion.div
                    className="rounded-full bg-primary"
                    animate={{
                        width: isClicking ? 12 : isHovering ? 16 : 8,
                        height: isClicking ? 12 : isHovering ? 16 : 8,
                    }}
                    transition={{ duration: 0.15 }}
                />
            </motion.div>
            <motion.div
                className="pointer-events-none fixed z-[9998] mix-blend-difference"
                style={{
                    x: outlineX,
                    y: outlineY,
                }}
            >
                <motion.div
                    className="rounded-full border-2 border-primary/50"
                    animate={{
                        width: isClicking ? 50 : isHovering ? 60 : 40,
                        height: isClicking ? 50 : isHovering ? 60 : 40,
                        borderColor: isHovering ? 'hsl(var(--primary))' : 'hsl(var(--primary) / 0.5)',
                    }}
                    transition={{ duration: 0.2 }}
                />
            </motion.div>
        </>
    );
};

export default CustomCursor;