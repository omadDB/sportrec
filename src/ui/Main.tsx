import { Container, Grid } from "@mui/material"
import Header from "./Header"
import InfoGeneral from "./InfoGeneral"
// import MediaBlock from "./MediaBlock"
import Management from "./Management"
// import Athletes from "./Athletes"
// import Coaches from "./Coaches"
import Rating from "./Rating"

export default function Main() {
  return (
    <Container
      sx={{
        marginTop: "24px",
        borderTopLeftRadius: "20px",
        maxWidth: "1160px !important",
      }}
      disableGutters
    >
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <Header />
          <InfoGeneral />
          {/* <MediaBlock /> */}
        </Grid>
        <Grid item xs={4}>
          <Rating />
          <Management />
          {/* <Athletes />
          <Coaches /> */}
        </Grid>
      </Grid>
    </Container>
  )
}
