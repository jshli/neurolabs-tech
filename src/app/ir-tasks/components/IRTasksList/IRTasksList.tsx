import { useGetIRTasks } from "@/hooks/useGetIRTasks";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

export const IRTasksList = () => {
  const { isPending, isError, data, error } = useGetIRTasks();

  console.log("is error", isError, data, error);
  if (isPending) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>An error has occurred</p>;
  }

  if (data && data.items) {
    return (
      <Grid container spacing={2}>
        {data?.items.map((item) => <p key={item.uuid}>{item.name}</p>)}
      </Grid>
    );
  }
  return null;
};
