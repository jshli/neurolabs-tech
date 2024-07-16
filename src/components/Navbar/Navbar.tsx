"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import Link from "next/link";

const pages = [
  { label: "Catalogue", route: "/" },
  { label: "IR Tasks", route: "/ir-tasks" },
];

export const Navbar = () => {
  return (
    <AppBar position="static" color="transparent">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              alignItems: "center",
            }}
          >
            <img
              src="https://static.wixstatic.com/media/6242d5_b1a47ee53dd34b1480362af0ba2e57d7~mv2.png/v1/fill/w_150,h_35,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logo.png"
              alt="logo.png"
              className="w-36 h-9 object-cover mr-4"
              width="150"
              height="35"
              srcSet="https://static.wixstatic.com/media/6242d5_b1a47ee53dd34b1480362af0ba2e57d7~mv2.png/v1/fill/w_150,h_35,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logo.png 1x, https://static.wixstatic.com/media/6242d5_b1a47ee53dd34b1480362af0ba2e57d7~mv2.png/v1/fill/w_300,h_70,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logo.png 2x"
              fetchPriority="high"
            />
            {pages.map((page) => (
              <Link href={page.route} passHref key={page.label}>
                <Button sx={{ my: 2, color: "black", display: "block" }}>
                  {page.label}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
