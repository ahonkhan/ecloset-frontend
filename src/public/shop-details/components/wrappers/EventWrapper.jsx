import React from 'react'
import { EventCard } from '../../../shared/components/cards/Card'

const EventWrapper = () => {
    return (
        <section className='grid grid-cols-3 bg-white py-4 px-4'>
            <EventCard />
        </section>
    )
}

export default EventWrapper