import { useQuery } from '@tanstack/react-query'

async function fetchCatalogueItems() {
  const url = "https://staging.api.neurolabs.ai/v2/catalog-items?limit=50&offset=0";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error.message);
  }
}
export const { isPending, isError, data, error } = useQuery({
  queryKey: ['catalogueItems'],
  queryFn: fetchCatalogueItems,
})

