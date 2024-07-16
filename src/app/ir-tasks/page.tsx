"use client";
import { Container, Typography } from "@mui/material";
import { IRTasksList } from "./components/IRTasksList/IRTasksList";

export const Page = () => {
  return (
    <main>
      <Container>
        <Typography variant="h5" component="h2" mb={2} mt={4}>
          Image Recognition Tasks
        </Typography>
        <IRTasksList />
      </Container>
    </main>
  );
};
export default Page;
