import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion.ts';
import { styles } from '../../styles.ts';
import { services } from '../constants/recap.ts';
import ServiceCard from './ServiceCard.tsx';

export default function About() {
  const blockOfText =
    "I'm a software engineer with experience in TypeScript,\n" +
    '          JavaScript and Java and expertise in frameworks like React, Node.js, and\n' +
    "          Spring. I'm a quick learner and I enjoy learning new things to improve my abilities.";
  const workTogether = `Let's work together to bring your ideas to life!`;
  return (
    <div>
      <span className="hash-span" id={'about'}>
        &nbsp;
      </span>
      <motion.div initial="hidden" animate="visible" variants={textVariant(0)}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h3 className={styles.sectionHeadText}>Overview</h3>
      </motion.div>
      <motion.p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        {blockOfText}
      </motion.p>
      <motion.p className="font-bold text-white text-[18px] max-w-3xl leading-[30px]">
        {workTogether}
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} service={service} index={index} />
        ))}
      </div>
    </div>
  );
}
