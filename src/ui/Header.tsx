import {
  NorthOutlined,
  PlaceOutlined,
  ReplyOutlined,
} from "@mui/icons-material"
import {
  Box,
  Button,
  Card,
  Divider,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material"
import TabsContainer from "./TabsContainer"

export default function Header() {
  const theme = useTheme()

  return (
    <Card sx={{ borderRadius: "20px" }} elevation={0}>
      <Box
        sx={{
          height: "134px",
          background: "linear-gradient(90deg, #09043E 0%, #29208B 100%)",
        }}
      ></Box>

      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          padding: "14px 16px 0 20px",
        }}
      >
        <img
          src="./header-img.png"
          alt="Header image"
          style={{ position: "absolute", top: "-54px", left: "20px " }}
        />
        <img
          src="./header-img-secondary.png"
          alt="Header image secondary"
          style={{ position: "absolute", top: "56px", left: "130px " }}
        />

        <Box
          sx={{
            display: "flex",
            width: "fit-content",
            borderRadius: "11px",
            gap: "4px",
            marginLeft: "auto",
            marginBottom: "52px",
            alignItems: "center",
            padding: "10px",
            backgroundColor: "#F8F8F9",
          }}
        >
          <NorthOutlined sx={{ color: "#31C16B", width: "18px" }} />
          <Typography variant="body1" color={theme.palette.secondary.light}>
            №2
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: "8px",
            alignItems: "center",
            marginBottom: "16px",
          }}
        >
          <Typography
            fontSize={"30px"}
            fontWeight={600}
            color={theme.palette.primary.main}
            lineHeight={"32px"}
            letterSpacing={"-1%"}
          >
            Спортивная Организация Алтайского Края
          </Typography>
          <img src="./galochka.png" alt="Official symbol" height={"24px"} />
        </Box>

        <Box
          sx={{ display: "flex", alignItems: "center", marginBottom: "16px" }}
        >
          <PlaceOutlined sx={{ color: theme.palette.secondary.light }} />
          <Box
            sx={{ display: "flex", alignItems: "center", marginLeft: "4px" }}
          >
            <Typography
              variant="body2"
              sx={{ color: theme.palette.secondary.main }}
              fontWeight={500}
            >
              Алтайский край
            </Typography>
            <Divider
              sx={{
                width: "3px",
                height: "3px",
                borderRadius: "50%",
                backgroundColor: "#CCCFDA",
                margin: "0 6px",
              }}
            />
            <Typography
              variant="body2"
              sx={{ color: theme.palette.secondary.main }}
              fontWeight={500}
            >
              Грэпплинг
            </Typography>
            <Divider
              sx={{
                width: "3px",
                height: "3px",
                borderRadius: "50%",
                backgroundColor: "#CCCFDA",
                margin: "0 6px",
              }}
            />
            <Typography
              variant="body2"
              sx={{ color: theme.palette.secondary.main }}
              fontWeight={500}
            >
              Греко-римская борьба
            </Typography>
            <Divider
              sx={{
                width: "3px",
                height: "3px",
                borderRadius: "50%",
                backgroundColor: "#CCCFDA",
                margin: "0 6px",
              }}
            />
            <Typography
              variant="body2"
              sx={{ color: theme.palette.secondary.main }}
              fontWeight={500}
            >
              Пляжная борьба
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginBottom: "28px",
            gap: "8px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img src="./header-person-1.png" alt="Header person 1" />
            <img
              src="./header-person-2.png"
              alt="Header person 2"
              style={{ marginLeft: "-7px" }}
            />
            <img
              src="./header-person-3.png"
              alt="Header person 3"
              style={{ marginLeft: "-7px" }}
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ display: "flex", alignitems: "center", gap: "6px" }}>
              <Typography
                variant="body2"
                color={theme.palette.primary.main}
                fontWeight={500}
              >
                45
              </Typography>
              <Typography
                variant="body2"
                color={theme.palette.secondary.light}
                fontWeight={500}
              >
                Спортсменов
              </Typography>
            </Box>
            <Divider
              sx={{
                width: "3px",
                height: "3px",
                borderRadius: "50%",
                backgroundColor: "#CCCFDA",
                margin: "0 8px",
              }}
            />
            <Box sx={{ display: "flex", alignitems: "center", gap: "6px" }}>
              <Typography
                variant="body2"
                color={theme.palette.primary.main}
                fontWeight={500}
              >
                125
              </Typography>
              <Typography
                variant="body2"
                color={theme.palette.secondary.light}
                fontWeight={500}
              >
                Подписчиков
              </Typography>
            </Box>
            <Divider
              sx={{
                width: "3px",
                height: "3px",
                borderRadius: "50%",
                backgroundColor: "#CCCFDA",
                margin: "0 8px",
              }}
            />
            <Box sx={{ display: "flex", alignitems: "center", gap: "6px" }}>
              <Typography
                variant="body2"
                color={theme.palette.primary.main}
                fontWeight={500}
              >
                12
              </Typography>
              <Typography
                variant="body2"
                color={theme.palette.secondary.light}
                fontWeight={500}
              >
                Лиг
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "40px   ",
          }}
        >
          <Box
            sx={{
              padding: "8px 10px",
              display: "flex",
              gap: "8px",
              alignItems: "center",
              backgroundColor: "#F8F8F9",
              borderRadius: "8px",
            }}
          >
            <Divider
              sx={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                background:
                  "linear-gradient(275.71deg, #BE823B 3.64%, #D0A461 72.32%, #FED5A5 110.54%)",
              }}
            />
            <Typography
              variant="body2"
              color={theme.palette.secondary.light}
              fontWeight={500}
            >
              12
            </Typography>
          </Box>
          <Box
            sx={{
              padding: "8px 10px",
              display: "flex",
              gap: "8px",
              alignItems: "center",
              backgroundColor: "#F8F8F9",
              borderRadius: "8px",
            }}
          >
            <Divider
              sx={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                background:
                  "linear-gradient(275.71deg, #878788 3.64%, #BFC0C5 72.32%, #939499 110.54%)",
              }}
            />
            <Typography
              variant="body2"
              color={theme.palette.secondary.light}
              fontWeight={500}
            >
              4
            </Typography>
          </Box>
          <Box
            sx={{
              padding: "8px 10px",
              display: "flex",
              gap: "8px",
              alignItems: "center",
              backgroundColor: "#F8F8F9",
              borderRadius: "8px",
            }}
          >
            <Divider
              sx={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                background:
                  " linear-gradient(275.71deg, #74391D 3.64%, #C46236 72.32%, #FF9B67 110.54%)",
              }}
            />
            <Typography
              variant="body2"
              color={theme.palette.secondary.light}
              fontWeight={500}
            >
              19
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            marginBottom: "40px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Button
            variant="contained"
            sx={{
              padding: "10px 24px",
              borderRadius: "8px",
              fontSize: "14px",
              textTransform: "capitalize",
              ":hover": {
                backgroundColor: "#06082C",
              },
            }}
            disableRipple
            disableElevation
          >
            Подписаться
          </Button>
          <Button
            variant="contained"
            sx={{
              padding: "10px 24px",
              borderRadius: "8px",
              fontSize: "14px",
              textTransform: "capitalize",
              backgroundColor: "#EEF0F7",
              color: "#06082C",

              ":hover": {
                backgroundColor: "#EEF0F7",
              },
            }}
            disableRipple
            disableElevation
          >
            Подробнее
          </Button>
          <IconButton
            sx={{
              padding: "10px",
              borderRadius: "8px",
              fontSize: "14px",
              textTransform: "capitalize",
              backgroundColor: "#EEF0F7",
              color: "#06082C",
              ":hover": {
                backgroundColor: "#EEF0F7",
              },
            }}
            disableRipple
          >
            <ReplyOutlined />
          </IconButton>
        </Box>

        <TabsContainer isComp={false} />
      </Box>
    </Card>
  )
}
