import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Container, Menu } from "semantic-ui-react";
import SignedInMenu from "./SignedInMenu";
import SignedOutMenu from "./SignedOutMenu";


const Navbar = ({setFormOpen}) => {
    return (

        <Menu  className="inverted top ui fixed menu" >
            <Container>
                <Menu.Item as={NavLink} to='/' header>
                    <img src="/assets/logo.png" alt="logo" style={{ marginRight: '15px' }}></img>
                    Re-vents
                </Menu.Item>
                {/* name and content both work same */}
                <Menu.Item as={NavLink} to='/events' name='Events' />

                <Menu.Item as={NavLink} to='/createEvent'>
                    <Button 
                    // onClick={()=>setFormOpen(true)} 
                    positive inverted content='Create Event'></Button>
                </Menu.Item>

{/* the below code pasted to SignedOutMenu */}
                {/* <Menu.Item  position="right">
                    <Button basic inverted content='Login'></Button>
                    <Button basic inverted content='Register' style={{ marginLeft: '0.5em' }}></Button>
                </Menu.Item> */}

<SignedOutMenu/>
<SignedInMenu/>




            </Container>
        </Menu>



    )
}

export default Navbar