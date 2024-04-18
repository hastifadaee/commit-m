import {CssBaseline, ThemeProvider} from '@mui/material'
import theme from '../assets/theme/theme'
import {CacheProvider} from '@emotion/react'
import rtlPlugin from 'stylis-plugin-rtl'
import createCache from '@emotion/cache'
// @ts-ignore
import {prefixer} from 'stylis'
import {ReactNode} from 'react'

const RtlThemeProvider = ({children}: { children: ReactNode }) => {
    const cacheRtl = createCache({
        key: 'muirtl',
        stylisPlugins: [prefixer, rtlPlugin],
    })
    return (
        <ThemeProvider theme={theme}>
                <CssBaseline/>
                <CacheProvider value={cacheRtl}>{children}</CacheProvider>
        </ThemeProvider>
    )
}
export default RtlThemeProvider
