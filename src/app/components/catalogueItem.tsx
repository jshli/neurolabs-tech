import { Paper, Typography } from "@mui/material"
import { paths } from "../../../schema"

type Props = {
  item: paths['/catalog-items/{item_uuid}']['get']['responses']['200']['content']['application/json']
}
export const CatalogueItem = ({ item }: Props) => {
  return <Paper><Typography>{item.name}</Typography></Paper>
}
