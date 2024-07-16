import { useGetIRTaskByIdResults } from "@/hooks/useGetIRTaskByIDResults";
import {
  Chip,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";

type Props = {
  taskId: string;
};
export const ResultsList = ({ taskId }: Props) => {
  const { isPending, isError, data } = useGetIRTaskByIdResults(taskId);

  if (isPending) {
    return <p>Loading results...</p>;
  }
  if (isError) {
    <p>Something wrong has happened</p>;
  }

  if (data && data.items) {
    return (
      <>
        <ImageList variant="masonry" cols={3} gap={8}>
          {data.items.map((item) => (
            <ImageListItem key={item.uuid}>
              <img
                srcSet={`${item.image_url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.uuid}
                loading="lazy"
              />
              <ImageListItemBar
                title={
                  <Chip
                    label={item.status}
                    color={item.status === "FAILED" ? "error" : "info"}
                  />
                }
                position="below"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </>
    );
  }
};
