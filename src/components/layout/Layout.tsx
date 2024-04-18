import {AppBar, Box, Toolbar, Typography} from "@mui/material";
import {Link, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <Box>
            <AppBar sx={{boxShadow:'none' , height:'auto' , px:4}} position={'static'}>
                <Toolbar>
                    <Box display={'flex'} gap={3}>
                        <Link to={'/'}><Typography>کوییز جدید</Typography></Link>
                        <Link to={'/select-quiz'}><Typography>انتخاب کوییز </Typography></Link>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box pt={4}>
                {
                    <Outlet />
                }
            </Box>
        </Box>
    )
}
export default Layout;