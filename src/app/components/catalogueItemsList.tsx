import { useGetCatalogueItems } from "@/hooks/useGetCatalogueItems"

export const CatalogueItemsList = () => {
  const data = useGetCatalogueItems()
  console.log('data', data)
  return <p>hello</p>

}
