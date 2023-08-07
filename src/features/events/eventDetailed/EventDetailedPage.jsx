import React from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import Navbar from "../../nav/Navbar";
import EventDetailedChat from "./EventDetailedChat";
import EventDetailedHeader from "./EventDetailedHeader";
import EventDetailedInfo from "./EventDetailedInfo";
import EventDetailedSidebar from "./EventDetailedSidebar";

const EventDetailedPage=(isNavBarVisible)=>
{

    return(
        <>
<Grid>

<GridColumn width={10}>
<EventDetailedHeader/>
<EventDetailedInfo/>

<EventDetailedChat/>
    
</GridColumn>

<GridColumn width={6}>

<EventDetailedSidebar/>
</GridColumn>


</Grid>


{isNavBarVisible && <Navbar/>}
</>

    )


}

export default EventDetailedPage