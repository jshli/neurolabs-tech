import { useGetIRTasks } from "@/hooks/useGetIRTasks";
import { List, ListItemButton, ListItemText } from "@mui/material";
import Link from "next/link";

export const IRTasksList = () => {
  const { isPending, isError, data } = useGetIRTasks();

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
          <Link href={`/ir-tasks/${item.uuid}`} key={item.uuid} passHref>
            <ListItemButton>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </Link>
        ))}
      </List>
    );
  }
  return null;
};
