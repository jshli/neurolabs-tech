import { useGetCatalogueItems } from "@/hooks/useGetCatalogueItems";
import { CatalogueItem } from "../";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

export const CatalogueItemsList = () => {
  const { isPending, isError, error, data } = useGetCatalogueItems();

  if (isPending) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>{error?.name}</p>;
  }

  return (
    <Grid container spacing={2}>
      {data?.items.map((item) => (
        <Grid xs={4} display="flex" justifyContent="center">
          <CatalogueItem item={item} key={item.uuid} />{" "}
        </Grid>
      ))}
    </Grid>
  );
};
