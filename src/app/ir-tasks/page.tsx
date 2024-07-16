"use client";
import { IRTasksList } from "./components/IRTasksList/IRTasksList";
import { Container, Typography } from "@mui/material";

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
