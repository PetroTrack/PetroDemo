// import { Outlet } from "react-router-dom";
// import {
//   AppBar,
//   Avatar,
//   Badge,
//   Box,
//   CssBaseline,
//   Drawer,
//   IconButton,
//   List,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
//   Toolbar,
//   Typography,
//   Divider,
// } from "@mui/material";

// import {
//   Bell,
//   Truck,
//   Users,
//   ShieldCheck,
//   FileText,
//   BarChart3,
//   Settings,
//   Menu,
// } from "lucide-react";

// import { useState } from "react";

// const drawerWidth = 260;

// export default function DashboardLayout() {
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const menus = [
//     { title: "Fleet", icon: <Truck size={20} /> },
//     { title: "Drivers", icon: <Users size={20} /> },
//     { title: "Compliance", icon: <ShieldCheck size={20} /> },
//     { title: "Documents", icon: <FileText size={20} /> },
//     { title: "Reports", icon: <BarChart3 size={20} /> },
//     { title: "Settings", icon: <Settings size={20} /> },
//   ];

//   const drawer = (
//     <>
//       <Toolbar>
//         <Typography variant="h6" fontWeight={700}>
//           PetroTrack
//         </Typography>
//       </Toolbar>

//       <Divider />

//       <List>
//         {menus.map((item) => (
//           <ListItemButton key={item.title}>
//             <ListItemIcon>{item.icon}</ListItemIcon>

//             <ListItemText primary={item.title} />
//           </ListItemButton>
//         ))}
//       </List>
//     </>
//   );

//   return (
//     <Box sx={{ display: "flex" }}>
//       <CssBaseline />

//       {/* Top Bar */}

//       <AppBar
//         position="fixed"
//         sx={{
//           width: { sm: `calc(100% - ${drawerWidth}px)` },
//           ml: { sm: `${drawerWidth}px` },
//         }}
//       >
//         <Toolbar>

//           <IconButton
//             color="inherit"
//             edge="start"
//             onClick={() => setMobileOpen(!mobileOpen)}
//             sx={{ mr: 2, display: { sm: "none" } }}
//           >
//             <Menu size={22} />
//           </IconButton>

//           <Typography
//             variant="h6"
//             sx={{ flexGrow: 1 }}
//           >
//             Dashboard
//           </Typography>

//           <IconButton color="inherit">

//             <Badge badgeContent={5} color="error">
//               <Bell size={20} />
//             </Badge>

//           </IconButton>

//           <Avatar sx={{ ml: 2 }}>
//             D
//           </Avatar>

//         </Toolbar>
//       </AppBar>

//       {/* Sidebar */}

//       <Box
//         component="nav"
//         sx={{
//           width: { sm: drawerWidth },
//           flexShrink: { sm: 0 },
//         }}
//       >
//         <Drawer
//           variant="temporary"
//           open={mobileOpen}
//           onClose={() => setMobileOpen(false)}
//           ModalProps={{ keepMounted: true }}
//           sx={{
//             display: { xs: "block", sm: "none" },
//             "& .MuiDrawer-paper": {
//               width: drawerWidth,
//             },
//           }}
//         >
//           {drawer}
//         </Drawer>

//         <Drawer
//           variant="permanent"
//           open
//           sx={{
//             display: { xs: "none", sm: "block" },

//             "& .MuiDrawer-paper": {
//               width: drawerWidth,
//               boxSizing: "border-box",
//             },
//           }}
//         >
//           {drawer}
//         </Drawer>

//       </Box>

//       {/* Page */}

//       <Box
//         component="main"
//         sx={{
//           flexGrow: 1,
//           p: 3,
//         }}
//       >
//         <Toolbar />

//         <Outlet />

//       </Box>
//     </Box>
//   );
// }