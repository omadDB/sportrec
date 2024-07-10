import { Box, Button, Card, Divider, Typography } from "@mui/material"
import TabsContainer from "./TabsContainer"
import {
  CalendarTodayOutlined,
  Notifications,
  PanTool,
  PlaceOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material"
import { useTheme } from "@mui/material"

export default function InfoGeneral() {
  const theme = useTheme()

  return (
    <Card
      sx={{ borderRadius: "20px", marginTop: "24px", marginBottom: "24px" }}
      elevation={0}
    >
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          padding: "28px 20px",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            fontSize: "20px",
            lineHeight: "28px",
            fontWeight: "600",
            color: "#06082C",
            marginBottom: "24px",
          }}
        >
          Соревнования
        </Typography>

        <TabsContainer isComp={true} />

        <Box
          sx={{
            marginTop: "28px",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <Typography
              sx={{
                fontSize: "16px",
                lineHeight: "22px",
                color: "#353754",
                fontWeight: "500",
              }}
            >
              На этой неделе
            </Typography>
            <Box sx={{ display: "flex", gap: "12px" }}>
              <img src="./fight1.png" alt="Fight 1" height={"120px"} />
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginLeft: "4px",
                    }}
                  >
                    <CalendarTodayOutlined
                      sx={{
                        color: theme.palette.secondary.light,
                        marginRight: "6px",
                      }}
                    />
                    <Typography
                      variant="body2"
                      sx={{ color: theme.palette.secondary.main }}
                      fontWeight={500}
                    >
                      17 Марта, 14:00
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
                    <PlaceOutlined
                      sx={{
                        color: theme.palette.secondary.light,
                        marginRight: "6px",
                      }}
                    />
                    <Typography
                      variant="body2"
                      sx={{ color: theme.palette.secondary.main }}
                      fontWeight={500}
                    >
                      Москва, Россия
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
                      5 матчей
                    </Typography>
                  </Box>
                </Box>
                <Typography
                  sx={{
                    fontSize: "16px",
                    lineHeight: "22px",
                    color: "#06082c",
                    fontWeight: "500",
                    marginLeft: "6px",
                  }}
                >
                  Первенство Московской области по спортивной борьбе (вольная
                  борьба) среди юниоров до 24 лет
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    margin: "12px 0 28px 6px",
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
                    <Box
                      sx={{ display: "flex", alignitems: "center", gap: "6px" }}
                    >
                      <Typography
                        variant="body2"
                        color={theme.palette.primary.main}
                        fontWeight={500}
                      >
                        167
                      </Typography>
                      <Typography
                        variant="body2"
                        color={theme.palette.secondary.light}
                        fontWeight={500}
                      >
                        Участников
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box
                  sx={{
                    marginTop: "28px",
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      padding: "10px 24px",
                      borderRadius: "8px",
                      fontSize: "14px",
                      textTransform: "none",
                      color: "#06082C",
                      fontWeight: "550",
                      backgroundColor: "#EEF0F7",
                      display: "flex",
                      alignItems: "center",
                      ":hover": {
                        backgroundColor: "#EEF0F7",
                      },
                    }}
                    disableRipple
                    disableElevation
                  >
                    <PanTool sx={{ color: "#9395B8", marginRight: "6px" }} />
                    Принять участие
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
                      fontWeight: "500",
                      display: "flex",
                      alignItems: "center",

                      ":hover": {
                        backgroundColor: "#EEF0F7",
                      },
                    }}
                    disableRipple
                    disableElevation
                  >
                    <ShoppingCartOutlined
                      sx={{ color: "#9395B8", marginRight: "6px" }}
                    />
                    Купить билет
                  </Button>
                </Box>
              </Box>
              <Notifications sx={{ color: "#CCCFDA" }} />
            </Box>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <Typography
              sx={{
                fontSize: "16px",
                lineHeight: "22px",
                color: "#353754",
                fontWeight: "500",
              }}
            >
              На этой неделе
            </Typography>
            <Box sx={{ display: "flex", gap: "12px" }}>
              <img src="./fight2.png" alt="Fight 2" height={"120px"} />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: "16px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginLeft: "4px",
                    }}
                  >
                    <CalendarTodayOutlined
                      sx={{
                        color: theme.palette.secondary.light,
                        marginRight: "6px",
                      }}
                    />
                    <Typography
                      variant="body2"
                      sx={{ color: theme.palette.secondary.main }}
                      fontWeight={500}
                    >
                      21 Февраля, 08:30
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
                    <PlaceOutlined
                      sx={{
                        color: theme.palette.secondary.light,
                        marginRight: "6px",
                      }}
                    />
                    <Typography
                      variant="body2"
                      sx={{ color: theme.palette.secondary.main }}
                      fontWeight={500}
                    >
                      Москва, Россия
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
                      10 матчей
                    </Typography>
                  </Box>
                </Box>
                <Typography
                  sx={{
                    fontSize: "16px",
                    lineHeight: "22px",
                    color: "#06082c",
                    fontWeight: "500",
                    marginLeft: "6px",
                  }}
                >
                  Соревновании по греко-римской борьбе среди юношей до 16 лет
                  памяти ЗТСССР В.А.Бормана в честь дня рождения
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    margin: "12px 0 0 6px",
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
                    <Box
                      sx={{ display: "flex", alignitems: "center", gap: "6px" }}
                    >
                      <Typography
                        variant="body2"
                        color={theme.palette.primary.main}
                        fontWeight={500}
                      >
                        167
                      </Typography>
                      <Typography
                        variant="body2"
                        color={theme.palette.secondary.light}
                        fontWeight={500}
                      >
                        Участников
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box
                  sx={{
                    marginTop: "28px",
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      padding: "10px 24px",
                      borderRadius: "8px",
                      fontSize: "14px",
                      textTransform: "none",
                      color: "#06082C",
                      fontWeight: "550",
                      backgroundColor: "#EEF0F7",
                      display: "flex",
                      alignItems: "center",
                      ":hover": {
                        backgroundColor: "#EEF0F7",
                      },
                    }}
                    disableRipple
                    disableElevation
                  >
                    <PanTool sx={{ color: "#9395B8", marginRight: "6px" }} />
                    Принять участие
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
                      fontWeight: "500",
                      display: "flex",
                      alignItems: "center",

                      ":hover": {
                        backgroundColor: "#EEF0F7",
                      },
                    }}
                    disableRipple
                    disableElevation
                  >
                    <ShoppingCartOutlined
                      sx={{ color: "#9395B8", marginRight: "6px" }}
                    />
                    Купить билет
                  </Button>
                </Box>
              </Box>

              <Notifications
                sx={{
                  color: "#CCCFDA",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Card>
  )
}
