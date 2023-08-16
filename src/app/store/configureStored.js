import { configureStore } from "@reduxjs/toolkit";
//import testReducer from "../../features/sandbox/testReducer";
import rootReducer from "./rootReducer";
// import { devToolsEnhancer } from "@reduxjs/toolkit/dist/devtoolsExtension";

const configuredStore=()=>{

    // as we are now going for event so we will define rootReducer and will remove testReducer
return configureStore({reducer:rootReducer,
    devTools:process.env.NODE_ENV!=="production"// enable devTool at development mode not production mode


})
}

export default configuredStore