import React from 'react';
import {RouterProvider} from "react-router-dom";
import {routes} from "./routes";
import {Box} from "@mui/material";

function App() {
  return (
    <Box>
        <RouterProvider router={routes}/>
    </Box>
  );
}

export default App;
