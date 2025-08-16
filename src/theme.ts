import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: "#000000",
            contrastText: "#ffffffff"
        }
    },
    typography: {
        fontFamily: `"JetBrains Mono", monospace`
    }
})

export default theme