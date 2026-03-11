import { motion } from 'framer-motion';

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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
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
