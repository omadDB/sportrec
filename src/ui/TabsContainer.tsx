import { Box, Tab, Tabs, useTheme } from "@mui/material"

export default function TabsContainer({ isComp }: { isComp: boolean }) {
  const theme = useTheme()

  const getPaddingStyle = (isComp: boolean) => {
    return isComp ? { padding: "0 16px" } : { paddingBottom: "24px" }
  }

  return (
    <Box sx={{ width: "100%", borderBottom: "2px solid #EEF0F7" }}>
      <Tabs>
        <Tab
          disableRipple
          label={
            isComp ? (
              <div>
                Соревнования{" "}
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    marginLeft: "8px",
                  }}
                >
                  2
                </span>
              </div>
            ) : (
              "Соревнования"
            )
          }
          sx={{
            ...getPaddingStyle(isComp),
            fontSize: "14px",
            textTransform: "capitalize",
            color: theme.palette.secondary.main,
            position: "relative",
            ":hover": {
              color: "#06082C",
              ":after": {
                content: '""',
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: "2px",
                backgroundColor: theme.palette.secondary.main,
              },
            },
          }}
        />
        <Tab
          disableRipple
          label={
            isComp ? (
              <div>
                Предстоящие
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    marginLeft: "8px",
                  }}
                >
                  2
                </span>
              </div>
            ) : (
              "Результаты"
            )
          }
          sx={{
            ...getPaddingStyle(isComp),
            fontSize: "14px",
            textTransform: "capitalize",
            color: theme.palette.secondary.main,
            position: "relative",
            ":hover": {
              color: "#06082C",
              ":after": {
                content: '""',
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: "2px",
                backgroundColor: theme.palette.secondary.main,
              },
            },
          }}
        />
        <Tab
          disableRipple
          label={
            isComp ? (
              <div>
                Прошедшие
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    marginLeft: "8px",
                  }}
                >
                  367
                </span>
              </div>
            ) : (
              "Новости"
            )
          }
          sx={{
            ...getPaddingStyle(isComp),
            fontSize: "14px",
            textTransform: "capitalize",
            color: theme.palette.secondary.main,
            position: "relative",
            ":hover": {
              color: "#06082C",
              ":after": {
                content: '""',
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: "2px",
                backgroundColor: theme.palette.secondary.main,
              },
            },
          }}
        />
      </Tabs>
    </Box>
  )
}
