import React from "react";
import EventListItem from "./EventListItem";

const EventList=({events,selectEvent,deleteEvent})=>
{

return(
    <div>
        {events.map(event=>(
          <EventListItem event={event} key={event.id} selectEvent={selectEvent} deleteEvent={deleteEvent} / >  
        ))}

        {/* { events.map(event=>(

<EventListItem event={event} key={event.id}/>
        ))} */}

{/* <EventListItem/>
<EventListItem/>
<EventListItem/> */}
    </div>

)


}

export default EventList