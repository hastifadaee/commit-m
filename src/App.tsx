import React from 'react';
import {useRoutes} from "react-router-dom";
import {routes} from "./routes";
import {Box} from "@mui/material";

function App() {
    const route = useRoutes(routes)
  return (
    <Box>
        {route}
    </Box>
  );
}

export default App;
