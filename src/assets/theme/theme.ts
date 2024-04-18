import {createTheme} from "@mui/material";
// @ts-ignore
import IranYekan from '../fonts/IRANYekan.woff';

const theme = createTheme({
    direction: 'rtl',
    palette: {
        primary: {
            main: '#A1BCD7',
        },
    },
    typography: {
        fontFamily: IranYekan,
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
                    @font-face {
                      font-family: 'iranYekan';
                      font-style: normal;
                      font-display: swap;
                      font-weight: 400;
                      src: local('Raleway'), local('Raleway-Regular'), url(${IranYekan}) format('woff2');
                    }
                    body {
                      font-family : iranYekan
                    }
                    a {
                      text-decoration : none ;
                    }   
                  `,
        },MuiButtonBase: {
            styleOverrides: {
                root: {
                    '&.MuiButton-root': {
                        fontFamily: 'iranYekan',
                        borderRadius: '10px',
                    },
                },
            },
        }, MuiInputBase:{
            styleOverrides:{
                root:{
                    '&.MuiOutlinedInput-root': {
                        borderRadius: '10px',
                        fontSize: 15,
                        paddingRight: 0,
                    }
                }
            }
        }
    }
});
export default theme;