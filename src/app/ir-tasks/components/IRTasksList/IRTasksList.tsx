import { useGetIRTasks } from "@/hooks/useGetIRTasks";
import { List, ListItemButton, ListItemText } from "@mui/material";

export const IRTasksList = () => {
  const { isPending, isError, data, error } = useGetIRTasks();

  if (isPending) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>An error has occurred</p>;
  }

  if (data && data.items) {
    return (
      <List>
        {data?.items.map((item) => (
          <ListItemButton key={item.uuid}>
            <ListItemText primary={item.name} />
          </ListItemButton>
        ))}
      </List>
    );
  }
  return null;
};
