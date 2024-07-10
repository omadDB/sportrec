import {
  AccountBalanceOutlined,
  EmojiEventsOutlined,
  HomeOutlined,
  PeopleAltOutlined,
  SensorsOutlined,
  ShoppingBagOutlined,
} from "@mui/icons-material"
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  useTheme,
} from "@mui/material"

export default function Navbar() {
  const theme = useTheme()

  return (
    <Box>
      <BottomNavigation
        showLabels
        sx={{ gap: "16px", marginLeft: "30px", marginRight: "50px" }}
      >
        <BottomNavigationAction
          disableRipple
          label="Лента"
          icon={<HomeOutlined />}
          sx={{
            color: theme.palette.secondary.light,
            display: "flex",
            marginLeft: "-10px",
            gap: "10px",
            padding: "10px",
            flexDirection: "row",
            ":hover": {
              color: theme.palette.primary.main,
            },
          }}
        />
        <BottomNavigationAction
          disableRipple
          label="Маркетплейс"
          icon={<ShoppingBagOutlined />}
          sx={{
            color: theme.palette.secondary.light,
            display: "flex",
            marginLeft: "-10px",
            padding: "10px",
            gap: "10px",
            flexDirection: "row",
            ":hover": {
              color: theme.palette.primary.main,
            },
          }}
        />
        <BottomNavigationAction
          disableRipple
          label="Рейтинги"
          icon={<PeopleAltOutlined />}
          sx={{
            color: theme.palette.secondary.light,
            display: "flex",
            // marginLeft: "-4px",
            padding: "10px",
            gap: "10px",
            flexDirection: "row",
            ":hover": {
              color: theme.palette.primary.main,
            },
          }}
        />
        <BottomNavigationAction
          disableRipple
          label="Соревнования"
          icon={<EmojiEventsOutlined />}
          sx={{
            color: theme.palette.secondary.light,
            display: "flex",
            padding: "10px",
            // marginLeft: "-4px",
            gap: "10px",
            flexDirection: "row",
            ":hover": {
              color: theme.palette.primary.main,
            },
          }}
        />
        <BottomNavigationAction
          disableRipple
          label="Организации"
          icon={<AccountBalanceOutlined />}
          sx={{
            color: theme.palette.secondary.light,
            display: "flex",
            marginLeft: "14px",
            padding: "10px",
            gap: "10px",
            flexDirection: "row",
            ":hover": {
              color: theme.palette.primary.main,
            },
          }}
        />
        <BottomNavigationAction
          disableRipple
          label="Live"
          icon={<SensorsOutlined />}
          sx={{
            color: theme.palette.secondary.light,
            display: "flex",
            padding: "12px 10px",
            marginLeft: "-16px",
            gap: "10px",
            flexDirection: "row",
            ":hover": {
              color: theme.palette.primary.main,
            },
          }}
        />
      </BottomNavigation>
    </Box>
  )
}
