import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: "#000000",
            contrastText: "#ffffffff"
        },
        secondary: {
            main: "#ffaa00ff",
            contrastText: '"#000000"'
        }
    },
    typography: {
        fontFamily: `"JetBrains Mono", monospace`
    }
})

export default theme