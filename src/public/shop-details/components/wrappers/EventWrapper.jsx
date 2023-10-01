import React from 'react'
import { EventCard } from '../../../shared/components/cards/Card'

const EventWrapper = () => {
    return (
        <section className='grid gap-4 rounded grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 bg-white py-4 px-4'>
            {[...new Array(6)].map(item => <EventCard />)}
        </section>
    )
}

export default EventWrapper