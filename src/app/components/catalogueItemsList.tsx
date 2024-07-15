import { useGetCatalogueItems } from "@/hooks/useGetCatalogueItems";
import Container from "@mui/material/Container";
import { CatalogueItem } from "./catalogueItem";
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
    <Container>
      <Grid container spacing={2}>
        {data?.items.map((item) => (
          <CatalogueItem item={item} key={item.uuid} />
        ))}
      </Grid>
    </Container>
  );
};
