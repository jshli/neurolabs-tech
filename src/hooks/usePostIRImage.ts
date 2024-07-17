import { useMutation } from "@tanstack/react-query";
import { paths } from "../../schema";

const postIRImage = async ({
  taskId,
  images,
}: {
  taskId: string;
  images: File[];
}): Promise<
  paths["/image-recognition/tasks/{task_uuid}/images"]["post"]["responses"]["200"]["content"]["application/json"]
> => {
  const url = `/api/image-recognition/tasks/${taskId}/images`;
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

export const usePostIRImage = (taskId: string) => {
  const { mutateAsync, isSuccess, isPending } = useMutation({
    mutationFn: (images: File[]) => postIRImage({ taskId, images }),
  });
  return { mutateAsync, isPending, isSuccess };
};
