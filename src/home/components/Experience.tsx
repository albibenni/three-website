import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion.ts';
import { styles } from '../../styles.ts';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import { experiences } from '../constants/recap.ts';
import ExperienceCard from './ExperienceCard.tsx';

export default function Experience() {
  const subText = "What I've done so far";

  return (
    <>
      <span className="hash-span" id={'work'}>
        &nbsp;
      </span>
      <motion.div initial="hidden" animate="visible" variants={textVariant(0)}>
        <p className={styles.sectionSubText}>{subText}</p>
        <h3 className={styles.sectionHeadText}>Work experience</h3>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
}
