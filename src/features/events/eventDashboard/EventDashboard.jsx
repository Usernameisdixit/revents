import React from "react";
import { Grid } from "semantic-ui-react";
import EventList from "./EventList";
import EventForm from "../eventForm/EventForm";
import { sampleData } from "../../../app/api/sampleData";
import { useState } from "react";

const EventDashboard=({formOpen,setFormOpen})=>
{
    const[events,setEvents]=useState(sampleData)

    console.log(typeof events)

    const handleCreateEvent=(event)=>
    {
setEvents(...events,event)
    }
   

    return(
        <Grid>
            <Grid.Column width={10}>
                {/* we used events and removed sampleData as we  hardcoded earlier */}
                <h2><EventList events={events}/></h2>
            </Grid.Column>


            <Grid.Column width={6}>
                {formOpen && 
                <h2><EventForm setFormOpen={setFormOpen} setEvents={setEvents} createEvent={handleCreateEvent}/></h2>}
            </Grid.Column>
        </Grid>




    )


}

export default EventDashboard