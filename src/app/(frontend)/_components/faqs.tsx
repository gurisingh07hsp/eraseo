'use client';

import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import * as React from 'react';

import { Button } from '@/components/ui/button';

import { cn } from '@/lib/utils';

const faqsContent = [
  {
    question: 'Can I start for free?',
    answer: 'Yes. You can use BackErase for free without entering your credit card details.',
  },
  {
    question: 'Can I upgrade later?',
    answer: 'Yes. You can switch to a higher plan anytime as your requirements grow.',
  },
  {
    question: 'Is there a contract?',
    answer: 'No. You can manage or cancel your subscription according to your plan terms.',
  },
  {
    question: 'Is payment secure?',
    answer: 'Yes. All transactions are processed through secure payment gateways.',
  },
  {
    question: 'Does the Business plan include API access?',
    answer: 'Yes. API access is included with the Business plan for automated background removal.',
  },
  {
    question: 'Are my images secure?',
    answer: 'Yes. Your uploaded images are processed securely, and your privacy is protected.',
  },
];

const FaqSection = () => {
  return (
    <section className={'w-full bg-gradient-to-b from-transparent via-muted/20 to-transparent'}>
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-semibold mb-3 bg-gradient-to-r from-foreground via-foreground/80 to-foreground bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-muted-foreground">
            Everything you need to know about our platform
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-2">
          {faqsContent.map((item, index) => (
            <FaqItem key={index} question={item.question} answer={item.answer} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Internal FaqItem component
const FaqItem = React.forwardRef<
  HTMLDivElement,
  {
    question: string;
    answer: string;
    index: number;
  }
>((props, ref) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { question, answer, index } = props;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: index * 0.1 }}
      className={cn(
        'group rounded-lg bg-accent/30',
        'transition-all duration-200 ease-in-out',
        'border border-border/50',
        isOpen
          ? 'bg-gradient-to-br from-background via-muted/50 to-background'
          : 'hover:bg-muted/50',
      )}
    >
      <Button
        variant="ghost"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 h-auto justify-between hover:bg-transparent"
      >
        <h3
          className={cn(
            'text-base font-medium text-wrap transition-colors duration-200 text-left',
            'text-foreground/70',
            isOpen && 'text-foreground',
          )}
        >
          {question}
        </h3>
        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0,
            scale: isOpen ? 1.1 : 1,
          }}
          transition={{ duration: 0.2 }}
          className={cn(
            'p-0.5 rounded-full flex-shrink-0',
            'transition-colors duration-200',
            isOpen ? 'text-primary' : 'text-muted-foreground',
          )}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </Button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: 'auto',
              opacity: 1,
              transition: { duration: 0.2, ease: 'easeOut' },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: { duration: 0.2, ease: 'easeIn' },
            }}
          >
            <div className="px-6 pb-4 pt-2">
              <motion.p
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                className="text-sm text-muted-foreground leading-relaxed"
              >
                {answer}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
});
FaqItem.displayName = 'FaqItem';

export { FaqSection };
