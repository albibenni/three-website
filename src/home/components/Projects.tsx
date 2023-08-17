import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion.ts';
import { styles } from '../../styles.ts';
import { projects } from '../constants/recap.ts';
import ProjectCard from './ProjectCard.tsx';

export default function Projects() {
  const description = `The following projects demonstrate my love for building applications and test my skills with new technologies.
   Each project is briefly described with links to its code repositories.`;
  return (
    <div>
      <span className="hash-span" id={'projects'}>
        &nbsp;
      </span>
      <motion.div initial="hidden" animate="visible" variants={textVariant(0)}>
        <p className={styles.sectionSubText}>My work</p>
        <h3 className={styles.sectionHeadText}>Projects</h3>
      </motion.div>
      <div className="w-full flex">
        <motion.p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          {description}
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            project={project}
          />
        ))}
      </div>
    </div>
  );
}
