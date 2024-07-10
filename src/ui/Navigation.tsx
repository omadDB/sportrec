import { Box, Container } from "@mui/material"
import Navbar from "./Navbar"
import ActionsBox from "./ActionsBox"

export default function Navigation() {
  return (
    <Box sx={{ backgroundColor: "#ffffff" }}>
      <Container
        sx={{ margin: "0 auto", maxWidth: "1160px !important" }}
        disableGutters
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img src="/logo.png" alt="Logo" width={"130px"} height={"32px"} />
          <Navbar />
          <ActionsBox />
        </Box>
      </Container>
    </Box>
  )
}
