import { ArrowForwardRounded } from "@mui/icons-material"
import { Box, Typography } from "@mui/material"

export default function Management() {
  return (
    <Box
      sx={{
        background: "#ffffff",
        padding: "24px 20px",
        borderRadius: "20px",
        marginTop: "24px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "24px",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            fontSize: "20px",
            lineHeight: "28px",
            fontWeight: "600",
            color: "#06082C",
          }}
        >
          Руководство
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <Typography
            variant="body2"
            sx={{ fontSize: "14px", color: "#7B7EA5", fontWeight: 500 }}
          >
            Смотреть все
          </Typography>
          <ArrowForwardRounded sx={{ color: "#CCCFDA" }} />
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <img src="./management-1.png" alt="Management 1" />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "2px",
            }}
          >
            <Typography
              variant="body2"
              sx={{ fontSize: "14px", color: "#06082c", fontWeight: 500 }}
            >
              Дмитрий Пономарев
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: "12px", color: "#06082c" }}
            >
              Президент ФНТР
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <img src="./management-2.png" alt="Management 2" />
          <Box>
            <Typography
              variant="body2"
              sx={{ fontSize: "14px", color: "#06082c", fontWeight: 500 }}
            >
              Кристина Козлова
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: "12px", color: "#06082c" }}
            >
              Вице-президент ФНТР
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <img src="./management-3.png" alt="Management 3" />
          <Box>
            <Typography
              variant="body2"
              sx={{ fontSize: "14px", color: "#06082c", fontWeight: 500 }}
            >
              Андрей Козлов
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: "12px", color: "#06082c" }}
            >
              Первый вице-президент, генеральный директор ФНТР
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
