"use client";

import { AppBar, Box, Toolbar, Button } from "@mui/material";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
    {title : "Home", route : "/"},
    {title : "Store", route : "/store"},
    {title : "Support", route : "/support"},
    {title : "About", route : "/about"},
]



export default function Header() {
const path = usePathname()

  return (
    <Box sx={{display : "flex", position: "sticky"}}>
        <AppBar component="nav" sx={{ position: "sticky" }}>
           <Toolbar>
               <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => {
              const activeStyle = { color: path === item.route ? "red" : "#fff" };
              return (
                <Button key={item.title} sx={{ color: "#fff" }}>
                  <Link href={item.route} style={{ ...activeStyle, textDecoration: "none" }}>
                    {item.title}
                  </Link>
                </Button>
              );
            })}
               </Box>
           </Toolbar>
        </AppBar>
    </Box>
  )
}
