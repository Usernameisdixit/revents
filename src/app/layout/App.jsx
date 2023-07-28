
import React, { useEffect } from "react";
import { Button, Container } from "semantic-ui-react";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import Navbar from "../../features/nav/Navbar";
import { useState } from "react";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import EventDetailedPage from "../../features/events/eventDetailed/EventDetailedPage";
import EventForm from "../../features/events/eventForm/EventForm";
import Cookies from "js-cookie";


export default function App() {
  const[formOpen,setFormOpen]=useState(false)

  const[selectedEvent,setSelectedEvent]=useState(null)


  const handleSelectEvent=(event)=>
  {
      setSelectedEvent(event)
      setFormOpen(true)
  }


  const handleCreateFormOpen=()=>
  {
    console.log("hi")
    setSelectedEvent(null)
    setFormOpen(true)
    
  }
  // how to hide navigation bar in Router v6, i have implemented useState and passed the state to HomePage 
  // and handled both events and navbar visibility with useNaviage

  const initialIsNavBarVisible=localStorage.getItem('isNavBarVisible')==='true';
  // const initialIsNavBarVisible=Cookies.get('isNavBarVisible')==='true'
  console.log("hi"+initialIsNavBarVisible)
  const[isNavBarVisible,setIsNavBarVisible]=useState(initialIsNavBarVisible)
console.log("bi"+isNavBarVisible)


  useEffect=(()=>{
    localStorage.setItem('isNavBarVisible',isNavBarVisible.toString())
  
    // Cookies.set('isNavBarVisible',isNavBarVisible.toString(),{expires:7})
    
  },[isNavBarVisible])

  

  //the second parameter takes the element attribute and in the below scenario there is no attribute so we can write empty object as {} or null
  //const title=React.createElement('h1',{},'hello')
  //const div=React.createElement('div',{className:'App'},title) 

  return (
    //div
    <>
     <Routes>
    <Route path="/" element={<HomePage setIsNavBarVisible={setIsNavBarVisible}/>}/>
    </Routes>
      {/* <div className="App" style={{marginTop:5}}> */}
      {/* <h1>Re-vents</h1> */}
      {/* <Button icon='facebook'  color="green" content="React Button"/> */}
      {/* we changed to handleCreateFormOpen  below from setFormOpen so that we can pass the value */}
      {/* {showNav&& <Navbar setFormOpen={handleCreateFormOpen}/>} */}
     
      <Container className="ui main container"> 
      
      <Routes>
        

<Route path="/events" Component={EventDashboard}/>
<Route path="/events/:id" Component={EventDetailedPage}/>
<Route path="/createEvent" Component={EventForm}/>

</Routes>

{isNavBarVisible && <Navbar setFormOpen={handleCreateFormOpen}/>}


      {/* <EventDashboard  
      formOpen={formOpen} 
      setFormOpen={setFormOpen} 
      selectEvent={handleSelectEvent} 
      selectedEvent={selectedEvent}
      /> */}
      </Container>


      

    </>
  );
}

//export default App;
