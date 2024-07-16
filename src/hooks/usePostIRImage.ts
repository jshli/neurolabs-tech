import { useMutation } from "@tanstack/react-query";
import { paths } from "../../schema";

const postIRImage = async ({
  taskUUID,
  images,
}: {
  taskUUID: string;
  images: File[];
}): Promise<
  paths["/image-recognition/tasks/{task_uuid}/images"]["post"]["responses"]["200"]["content"]["application/json"]
> => {
  const url = `/api/image-recognition/tasks/${taskUUID}/images`;
  const formData = new FormData();

  for (let i = 0; i < images.length; i++) {
    formData.append(`images`, images[i]);
  }

  const response = await fetch(url, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }

  return response.json();
};

export const usePostIRImage = (taskUUID: string) => {
  const { mutate, mutateAsync, isPending } = useMutation({
    mutationFn: (images: File[]) => postIRImage({ taskUUID, images }),
  });
  return { mutate, mutateAsync, isPending };
};
