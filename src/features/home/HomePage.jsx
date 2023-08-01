import React from "react";
import {  useNavigate } from "react-router-dom";
import { Button, Container, Header, Icon, Image, Segment } from "semantic-ui-react";


const HomePage=({setIsNavBarVisible})=>



{
    const navigate=useNavigate()
    const handleNavigate=()=>
    {
      console.log('Get started button clicked')    
    navigate("/events")
    setIsNavBarVisible(true)
       
    }

    

    return(
        <div>
<Segment inverted textAlign="center" vertical className="masthead">

<Container>

    <Header as='h1' inverted>
<Image size="massive" src="/assets/logo.png" style={{marginBottom:'12'}}/>
 Re-vents
    </Header>
    <Button onClick={handleNavigate} size="huge" inverted>
Get started
<Icon name="right arrow"  inverted/>
    </Button>
</Container>


</Segment>


</div>
    )


}

export default HomePage