import { createTheme, ThemeProvider } from "@mui/material"

import Main from "./ui/Main"
import Navigation from "./ui/Navigation"

const theme = createTheme({
  palette: {
    primary: {
      main: "#06082C",
    },
    secondary: {
      main: "#7B7EA5",
      light: "#9395B8",
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
  },
})

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navigation />
        <Main />
      </ThemeProvider>
    </>
  )
}

export default App

// import React from "react"
// import {
//   CssBaseline,
//   Container,
//   Grid,
//   Box,
//   Typography,
//   AppBar,
//   Toolbar,
//   Avatar,
//   Card,
//   CardContent,
//   CardMedia,
//   Button,
//   List,
//   ListItem,
//   ListItemAvatar,
//   ListItemText,
//   Divider,
//   createTheme,
//   ThemeProvider,
//   Drawer,
//   ListItemIcon,
//   IconButton,
// } from "@mui/material"
// import { AccountCircle, Home, Event, LiveTv, Sports } from "@mui/icons-material"
// import { styled } from "@mui/system"

// // Custom Theme
// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#1976d2",
//     },
//     secondary: {
//       main: "#f50057",
//     },
//   },
//   typography: {
//     fontFamily: "Roboto, Arial, sans-serif",
//     h4: {
//       fontWeight: 700,
//     },
//     h6: {
//       fontWeight: 600,
//     },
//     body2: {
//       fontWeight: 500,
//     },
//   },
// })

// // Custom Styles
// const MainContainer = styled(Container)({
//   backgroundColor: "#f4f6f8",
//   padding: "20px",
// })

// const DrawerHeader = styled("div")(({ theme }) => ({
//   ...theme.mixins.toolbar,
// }))

// const Content = styled("main")(({ theme }) => ({
//   flexGrow: 1,
//   padding: theme.spacing(3),
// }))

// const App: React.FC = () => {
//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <Box sx={{ display: "flex" }}>
//         <AppBar
//           position="fixed"
//           sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
//         >
//           <Toolbar>
//             <IconButton edge="start" color="inherit" aria-label="menu">
//               <Home />
//             </IconButton>
//             <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//               Sportrec UI Design
//             </Typography>
//             <Avatar alt="Profile Picture" src="profile.jpg" />
//           </Toolbar>
//         </AppBar>
//         <Drawer
//           variant="permanent"
//           sx={{
//             width: 240,
//             flexShrink: 0,
//             [`& .MuiDrawer-paper`]: { width: 240, boxSizing: "border-box" },
//           }}
//         >
//           <DrawerHeader />
//           <List>
//             {["Главная", "Соревнования", "Трансляции", "Спортсмены"].map(
//               (text, index) => (
//                 <ListItem button key={text}>
//                   <ListItemIcon>
//                     {index === 0 && <Home />}
//                     {index === 1 && <Event />}
//                     {index === 2 && <LiveTv />}
//                     {index === 3 && <Sports />}
//                   </ListItemIcon>
//                   <ListItemText primary={text} />
//                 </ListItem>
//               )
//             )}
//           </List>
//         </Drawer>
//         <Content>
//           <DrawerHeader />
//           <MainContainer maxWidth="lg">
//             <Box sx={{ my: 4 }}>
//               <Typography variant="h4" component="h1" gutterBottom>
//                 Профиль организации от 3го лица / личный вид спорта
//               </Typography>
//               <Grid container spacing={3}>
//                 {/* Left Column */}
//                 <Grid item xs={12} md={8}>
//                   <Box mb={2}>
//                     <Card>
//                       <CardMedia
//                         component="img"
//                         height="140"
//                         image="organization-banner.jpg"
//                         alt="Organization Banner"
//                       />
//                       <CardContent>
//                         <Typography gutterBottom variant="h5" component="div">
//                           Спортивная Организация Алтайского Края
//                         </Typography>
//                         <Typography variant="body2" color="text.secondary">
//                           Греко-римская борьба
//                         </Typography>
//                       </CardContent>
//                     </Card>
//                   </Box>
//                   {/* Competitions Section */}
//                   <Box mb={2}>
//                     <Card>
//                       <CardContent>
//                         <Typography variant="h6" component="div">
//                           Соревнования
//                         </Typography>
//                         <Divider />
//                         <List>
//                           <ListItem alignItems="flex-start">
//                             <ListItemAvatar>
//                               <Avatar
//                                 alt="Competition"
//                                 src="competition1.jpg"
//                               />
//                             </ListItemAvatar>
//                             <ListItemText
//                               primary="Март 14, 14:00, Москва, Россия"
//                               secondary="Первенство Московской области по спортивной борьбе"
//                             />
//                             <Button variant="contained">Принять участие</Button>
//                             <Button variant="outlined" sx={{ ml: 2 }}>
//                               Купить билет
//                             </Button>
//                           </ListItem>
//                           <Divider component="li" />
//                           <ListItem alignItems="flex-start">
//                             <ListItemAvatar>
//                               <Avatar
//                                 alt="Competition"
//                                 src="competition2.jpg"
//                               />
//                             </ListItemAvatar>
//                             <ListItemText
//                               primary="Февраль 21, 14:00, Москва, Россия"
//                               secondary="Соревнования по греко-римской борьбе"
//                             />
//                             <Button variant="contained">Принять участие</Button>
//                             <Button variant="outlined" sx={{ ml: 2 }}>
//                               Купить билет
//                             </Button>
//                           </ListItem>
//                         </List>
//                       </CardContent>
//                     </Card>
//                   </Box>
//                   {/* Broadcasts Section */}
//                   <Box mb={2}>
//                     <Card>
//                       <CardContent>
//                         <Typography variant="h6" component="div">
//                           Трансляции
//                         </Typography>
//                         <Divider />
//                         <Grid container spacing={2}>
//                           <Grid item xs={6}>
//                             <Card>
//                               <CardMedia
//                                 component="img"
//                                 height="140"
//                                 image="broadcast1.jpg"
//                                 alt="Broadcast"
//                               />
//                               <CardContent>
//                                 <Typography variant="body2">
//                                   День 6, Коурс С | Перенество Европы по
//                                   спортивной борьбе
//                                 </Typography>
//                               </CardContent>
//                             </Card>
//                           </Grid>
//                           <Grid item xs={6}>
//                             <Card>
//                               <CardMedia
//                                 component="img"
//                                 height="140"
//                                 image="broadcast2.jpg"
//                                 alt="Broadcast"
//                               />
//                               <CardContent>
//                                 <Typography variant="body2">
//                                   День 7, Коурс С | Перенество Европы по
//                                   спортивной борьбе
//                                 </Typography>
//                               </CardContent>
//                             </Card>
//                           </Grid>
//                         </Grid>
//                       </CardContent>
//                     </Card>
//                   </Box>
//                 </Grid>
//                 {/* Right Column */}
//                 <Grid item xs={12} md={4}>
//                   {/* Organization Rating */}
//                   <Box mb={2}>
//                     <Card>
//                       <CardContent>
//                         <Typography variant="h6" component="div">
//                           Рейтинг организации
//                         </Typography>
//                         <Divider />
//                         {/* Insert chart or graph here */}
//                         <Box mt={2}>
//                           <Typography variant="body2">
//                             Here would be a chart or graph.
//                           </Typography>
//                         </Box>
//                       </CardContent>
//                     </Card>
//                   </Box>
//                   {/* Leadership */}
//                   <Box mb={2}>
//                     <Card>
//                       <CardContent>
//                         <Typography variant="h6" component="div">
//                           Руководство
//                         </Typography>
//                         <Divider />
//                         <List>
//                           <ListItem>
//                             <ListItemAvatar>
//                               <Avatar alt="Leader 1" src="leader1.jpg" />
//                             </ListItemAvatar>
//                             <ListItemText
//                               primary="Дмитрий Иванов"
//                               secondary="Президент ФГТР"
//                             />
//                           </ListItem>
//                           <ListItem>
//                             <ListItemAvatar>
//                               <Avatar alt="Leader 2" src="leader2.jpg" />
//                             </ListItemAvatar>
//                             <ListItemText
//                               primary="Константин Ковалев"
//                               secondary="Генеральный секретарь ФГТР"
//                             />
//                           </ListItem>
//                         </List>
//                       </CardContent>
//                     </Card>
//                   </Box>
//                   {/* Athletes */}
//                   <Box mb={2}>
//                     <Card>
//                       <CardContent>
//                         <Typography variant="h6" component="div">
//                           Спортсмены
//                         </Typography>
//                         <Divider />
//                         <List>
//                           <ListItem>
//                             <ListItemText
//                               primary="Константин Ковалевский"
//                               secondary="12,031 очков"
//                             />
//                           </ListItem>
//                           <ListItem>
//                             <ListItemText
//                               primary="Владимир Давидов"
//                               secondary="10,031 очков"
//                             />
//                           </ListItem>
//                         </List>
//                       </CardContent>
//                     </Card>
//                   </Box>
//                   {/* Coaches */}
//                   <Box mb={2}>
//                     <Card>
//                       <CardContent>
//                         <Typography variant="h6" component="div">
//                           Тренеры
//                         </Typography>
//                         <Divider />
//                         <List>
//                           <ListItem>
//                             <ListItemText
//                               primary="Константин Ковалевский"
//                               secondary="12,031 очков"
//                             />
//                           </ListItem>
//                           <ListItem>
//                             <ListItemText
//                               primary="Александр Иванов"
//                               secondary="7,934 очков"
//                             />
//                           </ListItem>
//                         </List>
//                       </CardContent>
//                     </Card>
//                   </Box>
//                 </Grid>
//               </Grid>
//             </Box>
//           </MainContainer>
//         </Content>
//       </Box>
//     </ThemeProvider>
//   )
// }

// export default App
