import { useGetCatalogueItems } from "@/hooks/useGetCatalogueItems";
import Container from "@mui/material/Container";
import { CatalogueItem } from "./catalogueItem";

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
      <div>
        {data?.items.map((item) => (
          <CatalogueItem item={item} key={item.uuid} />
        ))}
      </div>
    </Container>
  );
};
