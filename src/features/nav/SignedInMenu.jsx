import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { Dropdown, Image, Menu } from "semantic-ui-react"


const SignedInMenu = ({ setAuthenticated }) => {


    const navigate = useNavigate()
    const handleSignOut = () => {
        console.log("signout function clicked")
        navigate("/")
        console.log("after navigate")
        setAuthenticated(false)
    }
    return (

        <>

            <Menu.Item position="right">


                <Image avatar spaced="right" src='/assets/user.png' />
                <Dropdown pointing="top left" text="Bob">


                    <Dropdown.Menu>
                        <Dropdown.Item as={Link} to='/createEvent' text='Create Event' icon='plus' />
                        <Dropdown.Item as={Link} text='My Profile' icon='user' />

                        {/* i have removed as {Link} below so that this fuction will call the event('/') otherwise it was not routed to correct navigation  */}
                        <Dropdown.Item onClick={handleSignOut} text='Sign out' icon='power' />
                    </Dropdown.Menu>

                </Dropdown>



            </Menu.Item>


        </>

    )


}

export default SignedInMenu