import React from "react";
import { Button, Form, Header, Input, Segment } from "semantic-ui-react";
import { useState } from "react";
import cuid from "cuid";


const EventForm=({setFormOpen, setEvents,createEvent})=>
{

    const initialValues={

        title:'',
        category:'',
        description:'',
        city:'',
        venue:'',
        date:''


    }

    

    const[values,setValues]=useState(initialValues)


    const handleFormSubmit=()=>
    {
         createEvent({...values,id:cuid(),hostedBy:'Bob',attendees:[]});
        // console.log(values)
        setFormOpen(false)
    }

    const handleInputChange=(e)=>
    {
        const{name,value}=e.target
        setValues({...values,[name]:value})

    }

    const [title,setTitle]=useState('')

    

return(
<Segment clearing>
<Header content='Create new event'/>

<Form onSubmit={handleFormSubmit}>


<Form.Field>
    <Input type="text" placeholder="Event Title" name='title' value={values.title} onChange={(e)=>handleInputChange(e)}/>
    {/* onChange={(e)=>setTitle(e.target.value)} */}
</Form.Field>

<Form.Field>
    <Input type="text" placeholder="Category" name='category' value={values.Category} onChange={(e)=>handleInputChange(e)}/>
</Form.Field>

<Form.Field>
    <Input type="text" placeholder="Description" name='description' value={values.description} onChange={(e)=>handleInputChange(e)}/>
</Form.Field>

<Form.Field>
    <Input type="text" placeholder="City" name='city' value={values.city} onChange={(e)=>handleInputChange(e)}/>
</Form.Field>

<Form.Field>
    <Input type="text" placeholder="Venue" name='venue' value={values.venue} onChange={(e)=>handleInputChange(e)}/>
</Form.Field>

<Form.Field>
    <Input type="Date" placeholder="Date" name='date' value={values.date} onChange={(e)=>handleInputChange(e)}/>
</Form.Field>

<Button type="submit" floated="right" positive content='Submit'/>
<Button onClick={()=>setFormOpen(false)} type="submit" floated="right"  content='Cancel'/>

</Form>

</Segment>


)
}

export default EventForm