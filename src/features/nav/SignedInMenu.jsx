import React from "react"
import { Button,Dropdown,Image,Menu } from "semantic-ui-react"


const SignedInMenu=()=>
{
return(

<>

<Menu.Item  position="right">
                    

<Image avatar spaced="right" src='/assets/user.png' />
<Dropdown pointing="top left" text="Bob"></Dropdown>




                </Menu.Item>


</>

)


}

export default SignedInMenu