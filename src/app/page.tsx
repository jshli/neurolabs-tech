"use client";
import { CatalogueItemsList } from "./components";
import { Container, Typography } from "@mui/material";

export default function Home() {
  return (
    <main className="">
      <Container>
        <Typography variant="h5" component="h2" mb={2} mt={4}>
          Catalogue
        </Typography>
        <CatalogueItemsList />
      </Container>
    </main>
  );
}
