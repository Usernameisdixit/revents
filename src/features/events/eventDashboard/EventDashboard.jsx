import React from "react";
import { Grid } from "semantic-ui-react";
import EventList from "./EventList";
import EventForm from "../eventForm/EventForm";
import { sampleData } from "../../../app/api/sampleData";
import { useState } from "react";

const EventDashboard=({formOpen,setFormOpen})=>
{
    const[events,setEvents]=useState(sampleData)
   

    return(
        <Grid>
            <Grid.Column width={10}>
                {/* we used events and removed sampleData as we were hardcoded earlier */}
                <h2><EventList events={events}/></h2>
            </Grid.Column>


            <Grid.Column width={6}>
                {formOpen && 
                <h2><EventForm setFormOpen={setFormOpen}/></h2>}
            </Grid.Column>
        </Grid>




    )


}

export default EventDashboard