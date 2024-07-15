import { useGetCatalogueItems } from "@/hooks/useGetCatalogueItems"

export const CatalogueItemsList = () => {
  const { isPending, isError, error, data } = useGetCatalogueItems()
  console.log('data', data)

  if (isPending) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>{error}</p>
  }

  return <p></p>

}
