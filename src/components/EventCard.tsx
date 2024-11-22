import { IconType } from 'react-icons';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface EventCardProps {
  event: {
    date: string;
    time: string;
    title: string;
    description: string;
    icon: IconType;
    iconColor: string;
    bgGradient: string;
    highlights: string[];
  };
  onClick: () => void;
  index: number;
}

export function EventCard({ event, onClick, index }: EventCardProps) {
  const Icon = event.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Card
        className={`hover:shadow-lg transition-all duration-200  cursor-pointer bg-gradient-to-br ${event.bgGradient} h-full`}
        onClick={onClick}
      >
        <CardHeader className='flex flex-row items-center space-x-4'>
          <motion.div
            className='p-3 rounded-xl bg-white shadow-sm'
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <Icon className={`h-6 w-6 ${event.iconColor}`} />
          </motion.div>
          <div>
            <div className='text-sm font-medium text-gray-600'>
              {event.date}
            </div>
            <CardTitle className='text-xl'>{event.title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className='mb-4 text-gray-600 line-clamp-2'>{event.description}</p>
          <div className='flex flex-wrap gap-2'>
            {event.highlights.slice(0, 3).map((highlight, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className='bg-white/80 backdrop-blur-sm text-gray-700 text-xs px-2 py-1 rounded-full shadow-sm'
              >
                {highlight}
              </motion.span>
            ))}
            {event.highlights.length > 3 && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className='bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full'
              >
                +{event.highlights.length - 3} more
              </motion.span>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
