import { Chip } from "@mui/material";
import { paths } from "../../../../schema";

type Props = {
  status: paths["/catalog-items/{item_uuid}"]["get"]["responses"]["200"]["content"]["application/json"]["status"];
};

const generateStatusLabel = (status: Props["status"]) => {
  switch (status) {
    case "READY":
      return "Ready";
    case "PROCESSING":
      return "Processing";
    case "NEEDS_CAPTURE":
      return "Needs Capture";
    case "CAPTURE_FAILED":
      return "Capture Failed";
  }
};

const generateStatusColors = (status: Props["status"]) => {
  switch (status) {
    case "CAPTURE_FAILED":
      return "error";
    case "PROCESSING":
      return "warning";
    case "READY":
      return "success";
    case "NEEDS_CAPTURE":
      return "info";
  }
};

export const StatusChip = ({ status }: Props) => {
  return (
    <Chip
      variant={status === "NEEDS_CAPTURE" ? "filled" : "outlined"}
      color={generateStatusColors(status)}
      label={generateStatusLabel(status)}
    />
  );
};
