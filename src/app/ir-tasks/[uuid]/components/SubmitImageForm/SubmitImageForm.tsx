"use client";
import { usePostIRImage } from "@/hooks/usePostIRImage";
import { Box, Button, Grid, SvgIcon, Typography } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

type Props = {
  taskUUID: string;
};
export const SubmitImageForm = ({ taskUUID }: Props) => {
  const { control, handleSubmit, watch, reset } = useForm<{ images: File[] }>();
  const { isPending, mutateAsync } = usePostIRImage(taskUUID);

  const watchImages = watch("images");

  const onSubmit: SubmitHandler<{ images: File[] }> = async (data, event) => {
    event?.preventDefault();
    await mutateAsync(data.images).then(() => {
      reset();
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {watchImages && watchImages.length > 0 && (
        <Box mt={2}>
          <Typography variant="h6">Selected Images:</Typography>
          <Grid container spacing={2}>
            {Array.from(watchImages).map((file, i) => (
              <Grid item key={i} xs={4} sm={3} md={2}>
                <img
                  src={URL.createObjectURL(file)}
                  alt={`Preview ${i + 1}`}
                  style={{ width: "100%", height: "auto" }}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}

      <Controller
        name="images"
        control={control}
        render={({ field }) => (
          <>
            <input
              accept="image/*"
              style={{ display: "none" }}
              id="ir-images-input"
              multiple
              type="file"
              onChange={(e) => {
                field.onChange(e.target.files);
              }}
            />
            <label htmlFor="ir-images-input">
              <Button
                component="span"
                startIcon={
                  <SvgIcon>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                      />
                    </svg>
                  </SvgIcon>
                }
              >
                Upload a new image to process
              </Button>
            </label>
          </>
        )}
      />
      <div className="mb-8">
        <Button variant="contained" type="submit">
          {isPending ? "Submitting..." : "Submit"}
        </Button>
      </div>
    </form>
  );
};
