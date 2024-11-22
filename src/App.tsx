import { useState } from 'react'
import { motion } from 'framer-motion'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { EventCard } from '@/components/EventCard'
import EventDialog from '@/components/EventDialog'
import { events } from '@/data/events'

function App() {
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [dialogOpen, setDialogOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <EventCard
              key={event.id}
              event={event}
              index={index}
              onClick={() => {
                setSelectedEvent(event)
                setDialogOpen(true)
              }}
            />
          ))}
        </div>
      </motion.div>

      {selectedEvent && <EventDialog event={selectedEvent} open={dialogOpen} onOpenChange={setDialogOpen} />}
    </div>
  )
}

export default App
