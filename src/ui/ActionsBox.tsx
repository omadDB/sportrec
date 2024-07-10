import { ExpandMore, NotificationsNone } from "@mui/icons-material"
import { Avatar, Box, Typography } from "@mui/material"

export default function ActionsBox() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <img src="/language-russian.png" alt="Language photo" />
        <Typography variant="body2" sx={{ marginLeft: "6px " }}>
          RU
        </Typography>
        <ExpandMore sx={{ color: "#9395B8" }} />
      </Box>

      <Box
        sx={{
          position: "relative",
          "::after": {
            content: '""',
            position: "absolute",
            top: "2px",
            right: "14px",
            width: "5px",
            height: "5px",
            borderRadius: "50%",
            backgroundColor: "#D21010",
          },
        }}
      >
        <NotificationsNone sx={{ color: "#9395B8", margin: "0 15px 0 24px" }} />
      </Box>

      <Box sx={{ display: "flex", gap: "9px", alignItems: "center" }}>
        <Avatar src="./avatar.png" sx={{ backgroundColor: "#000000" }} />
        <ExpandMore sx={{ color: "#9395B8" }} />
      </Box>
    </Box>
  )
}
