
import React from "react";
import { Button, Container } from "semantic-ui-react";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import Navbar from "../../features/nav/Navbar";
import { useState } from "react";

export default function App() {
  const[formOpen,setFormOpen]=useState(false)
  //the second parameter takes the element attribute and in the below scenario there is no attribute so we can write empty object as {} or null
  //const title=React.createElement('h1',{},'hello')
  //const div=React.createElement('div',{className:'App'},title) 

  return (
    //div
    <>
      {/* <div className="App" style={{marginTop:5}}> */}
      {/* <h1>Re-vents</h1> */}
      {/* <Button icon='facebook'  color="green" content="React Button"/> */}
      <Navbar setFormOpen={setFormOpen}/>
      <Container className="ui main container"> <EventDashboard  formOpen={formOpen} setFormOpen={setFormOpen}/></Container>

    </>
  );
}

//export default App;
