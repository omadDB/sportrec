import { Box, Typography } from "@mui/material"

export default function Rating() {
  return (
    <Box
      sx={{
        background: "#ffffff",
        padding: "28px 24px",
        borderRadius: "20px",
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
        Рейтинг организации
      </Typography>

      <img src="./chart.png" alt="Chart" />

      <Box
        sx={{
          marginTop: "20px",
          padding: "14px",
          backgroundColor: "#F8F8F9",
          borderRadius: "12px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <Typography
          variant="body2"
          sx={{ color: "#06082C", letterSpacing: "-0.5px", fontWeight: "500" }}
        >
          Рейтинг : Очень высокий
        </Typography>
        <Typography variant="body2" sx={{ fontSize: "12px", color: "#7B7EA5" }}>
          Спортсмены организации показывают достаточно хорошие результаты на
          тренировках и соревнованиях, а также за последний год стабильно
          поднимаются в рейтинге.
        </Typography>
      </Box>
    </Box>
  )
}
