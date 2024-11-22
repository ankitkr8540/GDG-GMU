import React from 'react';
import { motion } from 'framer-motion';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
// import { Calendar, MapPin, Users, Clock, CalendarPlus } from 'lucide-react';
import { IoCalendar, IoLocationSharp, IoTime, IoPeople, IoAddCircleOutline } from "react-icons/io5"
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface EventDialogProps {
  event: any;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const EventDialog: React.FC<EventDialogProps> = ({ event, open, onOpenChange }) => {
  const Icon = event.icon;
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-2">
            <motion.div
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Icon className={`h-6 w-6 ${event.iconColor}`} />
            </motion.div>
            <motion.span
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {event.title}
            </motion.span>
          </DialogTitle>
        </DialogHeader>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-6"
        >
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: IoCalendar, color: "text-blue-500", text: event.date },
              { icon: IoTime, color: "text-green-500", text: event.time },
              { icon: IoLocationSharp, color: "text-red-500", text: event.location },
              { icon: IoPeople, color: "text-purple-500", text: event.capacity }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="flex items-center gap-2"
              >
                <item.icon className={`h-5 w-5 ${item.color}`} />
                <span>{item.text}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-lg font-semibold mb-2">About this event</h3>
            <p className="text-gray-600">{event.description}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <h3 className="text-lg font-semibold mb-2">What to expect</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {event.highlights.map((highlight: string, i: number) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  className="flex items-center gap-2 text-gray-600"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                  {highlight}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <h3 className="text-lg font-semibold mb-2">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {event.tags?.map((tag: string, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + i * 0.1 }}
                >
                  <Badge variant="secondary">{tag}</Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            <Button 
              className="w-full"
              onClick={() => window.open(event.calendarLink, '_blank')}
            >
              <IoAddCircleOutline className="mr-2 h-4 w-4" />
              Add to Calendar
            </Button>
          </motion.div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

export default EventDialog;