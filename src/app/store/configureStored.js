import { configureStore } from "@reduxjs/toolkit";
import testReducer from "../../features/sandbox/testReducer";
// import { devToolsEnhancer } from "@reduxjs/toolkit/dist/devtoolsExtension";

const configuredStore=()=>{

return configureStore({reducer:testReducer,
    devTools:process.env.NODE_ENV!=="production"// enable devTool at development mode not production mode


})
}

export default configuredStore