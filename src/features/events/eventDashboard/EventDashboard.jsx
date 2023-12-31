import React from "react";
import { Grid } from "semantic-ui-react";
import EventList from "./EventList";
// import EventForm from "../eventForm/EventForm";
//import { sampleData } from "../../../app/api/sampleData";
//import { useState } from "react";
import { useSelector } from "react-redux";

// we have removed all props because they were for single page but not good for routing
// const EventDashboard = ({ formOpen, setFormOpen, selectEvent, selectedEvent }) => {
const EventDashboard = () => {
    // const [events, setEvents] = useState(sampleData) we commented it to use data from store

    const {events}=useSelector(state=>state.event)


    // console.log(typeof events)

    // const handleCreateEvent = (event) => {
    //     setEvents([...events, event])
    // }


    // const handleUpdateEvent = (updatedEvent) => {
    //     setEvents(events.map(evt => evt.id === updatedEvent.id ? updatedEvent : evt))
    //     // selectEvent(null)
    //     // setFormOpen(false)
    // }


    const handleDeleteEvents = (eventId) => {
        //setEvents(events.filter(evt => evt.id !== eventId))
    }





    return (
        <Grid>
            <Grid.Column width={10}>
                {/* we used events and removed sampleData as we  hardcoded earlier */}
                {/* changed to selectEvent from handleSelectEvent  */}
                <h2><EventList events={events} /*selectEvent={selectEvent}*/ deleteEvent={handleDeleteEvents} /></h2>
            </Grid.Column>


            <Grid.Column width={6}>
                {/* {formOpen &&
                    <h2><EventForm setFormOpen={setFormOpen} setEvents={setEvents} createEvent={handleCreateEvent} selectedEvent={selectedEvent} key={selectedEvent ? selectedEvent.id : null} updateEvent={handleUpdateEvent} /></h2>} */}
            <h2>Event Filters</h2>
            </Grid.Column>
        </Grid>




    )


}

export default EventDashboard