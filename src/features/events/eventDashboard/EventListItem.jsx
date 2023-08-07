import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Button, Icon, Item, ItemGroup, List, Segment, SegmentGroup } from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";

const EventListItem = ({event,selectEvent,deleteEvent}) => {


    const navigate=useNavigate()
// const handleViewEvent=()=>
// {
//     console.log('id',event.id)
//     navigate(`/events/${event.id}`)
    
//     //setIsNavBarVisible(true)
//     // as ={NavLink} to={`/events/${event.id}`}
//     //`/events/${event.id}`

// }

    return (

        <SegmentGroup>
            <Segment>


                <Item.Group>

                    <Item>
                        <Item.Image size="tiny" circular src={event.hostPhotoURL} />
                        <Item.Content>
                            <Item.Header content={event.title}></Item.Header>
                            <Item.Description>Hosted by {event.hostedBy}</Item.Description>


                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>

            <Segment>
                <span>

                    <Icon name="clock" /> {event.date}
                    <Icon name="marker" />{event.venue}
                </span>

            </Segment>

            <Segment secondary>
                <List horizontal>
{event.attendees.map(attendee=>(
    <EventListAttendee key={attendee.id} attendee={attendee} />

))}

                    {/* <EventListAttendee />
                    <EventListAttendee />
                    <EventListAttendee />
                    <EventListAttendee /> */}
                </List>

            </Segment>


            <Segment clearing>

                <div>Description of Event: {event.description}</div>
                <Button onClick={()=>deleteEvent(event.id)} color="red" floated="right" content="Delete" />
                {/* <Button onClick={()=>selectEvent(event)} color="teal" floated="right" content="View" /> */}
                <Button as ={NavLink} to={`/events/${event.id}`} color="teal" floated="right" content="View" />
               
            </Segment>


        </SegmentGroup>

    )
}

export default EventListItem