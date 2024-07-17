"use client";
import { useGetIRResultById } from "@/hooks/useGetIRResultByID";
import { Container, Typography } from "@mui/material";

const Page = ({ params }: { params: { taskId: string; resultId: string } }) => {
  const { isPending, data, isError } = useGetIRResultById({
    taskId: params.taskId,
    resultId: params.resultId,
  });

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
          {params.resultId}
        </Typography>

        <img src={data?.image_url} />
        <Typography>{`Status: ${data?.status}`}</Typography>
        <Typography>{`Duration: ${data?.duration}`}</Typography>
      </Container>
    </main>
  );
};
export default Page;
