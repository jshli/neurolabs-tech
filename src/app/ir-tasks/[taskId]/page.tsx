"use client";
import { useGetIRTaskById } from "@/hooks/useGetIRTaskByID";
import { Container, Typography } from "@mui/material";
import { SubmitImageForm } from "./components/SubmitImageForm/SubmitImageForm";
import { ResultsList } from "./components/ResultsList/ResultsList";

const Page = ({ params }: { params: { taskId: string } }) => {
  const { isPending, isError, data } = useGetIRTaskById(params.taskId);

  if (isPending) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>An error has occurred</p>;
  }

  return (
    <main>
      <Container>
        <Typography variant="h5" component="h2" mb={2} mt={4}>
          {data?.name}
        </Typography>
        <SubmitImageForm taskUUID={params.taskId} />

        <Typography variant="h6" mb={2}>
          Results
        </Typography>
        <ResultsList taskId={params.taskId} />
      </Container>
    </main>
  );
};
export default Page;
