import { motion } from 'framer-motion';
import { fadeUp, viewportOnce } from '../../lib/motion';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  titleClassName?: string;
}

const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = 'left',
  titleClassName = '',
}: SectionHeadingProps) => {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <motion.div
      className={`max-w-3xl ${alignment}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2 className={`mt-5 text-balance ${titleClassName}`.trim()}>{title}</h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-base text-gray-500 dark:text-gray-400 sm:text-lg">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
};

export default SectionHeading;
