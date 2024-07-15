import { Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import { paths } from "../../../../schema";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { StatusChip } from "..";

type Props = {
  item: paths["/catalog-items/{item_uuid}"]["get"]["responses"]["200"]["content"]["application/json"];
};
export const CatalogueItem = ({ item }: Props) => {
  return (
    <Grid xs={4} display="flex" justifyContent="center">
      <Card sx={{ width: 345 }}>
        <CardMedia
          sx={{ height: 200 }}
          image={item.thumbnail_url}
          title={`image of ${item.name}`}
        />
        <CardContent>
          <Stack direction="row" justifyContent="space-between" spacing={2}>
            <Typography gutterBottom variant="h6">
              {item.name}
            </Typography>
            <StatusChip status={item.status} />
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
};
