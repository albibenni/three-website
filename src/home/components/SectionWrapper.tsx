import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { staggerContainer } from '../utils/motion.ts';
import { styles } from '../../styles.ts';

interface SectionWrapperProps {
  children: ReactNode;
}

export default function SectionWrapper({ children }: SectionWrapperProps) {
  return (
    <motion.section
      variants={staggerContainer(0, 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <span className="hash-span">&nbsp;</span>
      {children}
    </motion.section>
  );
}
