import React from "react";
import EventListItem from "./EventListItem";

const EventList=({events})=>
{

return(
    <div>
        {events.map(event=>(
          <EventListItem event={event} key={event.id}/>  
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