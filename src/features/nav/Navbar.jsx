import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";

const Navbar = ({setFormOpen}) => {
    return (

        <Menu  className="inverted top ui fixed menu" >
            <Container>
                <Menu.Item header>
                    <img src="/assets/logo.png" alt="logo" style={{ marginRight: '15px' }}></img>
                    Re-vents
                </Menu.Item>
                {/* name and content both work same */}
                <Menu.Item name='Events' />

                <Menu.Item>
                    <Button onClick={()=>setFormOpen(true)} positive inverted content='Create Event'></Button>
                </Menu.Item>


                <Menu.Item position="right">
                    <Button basic inverted content='Login'></Button>
                    <Button basic inverted content='Register' style={{ marginLeft: '0.5em' }}></Button>
                </Menu.Item>






            </Container>
        </Menu>



    )
}

export default Navbar