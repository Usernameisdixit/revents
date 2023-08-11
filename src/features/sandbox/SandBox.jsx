import { useDispatch, useSelector } from "react-redux"
import { Button } from "semantic-ui-react"
import Navbar from "../nav/Navbar"
import { decrement,increment} from "./testReducer"

const SandBox=({setIsNavBarVisible})=>
{

    const dispath=useDispatch()
    const data=useSelector(state=>state.data)
    
return(
<>
<h1>Testing</h1>
<h3>The data is: {data} </h3>
<Button onClick={()=>dispath(increment(20))} content='Increment' color="green"/>
<Button onClick={()=>dispath(decrement(10))} content='Decrement' color="red"/>
{setIsNavBarVisible(true) && <Navbar/>}
</>
    
)


}

export default SandBox