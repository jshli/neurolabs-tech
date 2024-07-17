"use client";
import { useGetIRTaskByIdResults } from "@/hooks/useGetIRTaskByIDResults";
import {
  Chip,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useRouter } from "next/navigation";

type Props = {
  taskId: string;
};
export const ResultsList = ({ taskId }: Props) => {
  const { isPending, isError, data } = useGetIRTaskByIdResults(taskId);
  const { push } = useRouter();

  if (isPending) {
    return <p>Loading results...</p>;
  }
  if (isError) {
    <p>Something wrong has happened</p>;
  }

  if (data && data.items) {
    return (
      <List>
        {data.items.map((item) => (
          <ListItem
            secondaryAction={
              <Chip
                label={item.status}
                color={item.status === "FAILED" ? "error" : "info"}
              />
            }
          >
            <ListItemButton
              onClick={() => push(`/ir-tasks/${taskId}/${item.uuid}`)}
            >
              <ListItemText primary={item.uuid} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    );
  }
};
