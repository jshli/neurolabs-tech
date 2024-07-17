"use client";
import { useQuery } from "@tanstack/react-query";
import { paths } from "../../schema";

type IRResult =
  paths["/image-recognition/tasks/{task_uuid}/results/{result_uuid}"]["get"]["responses"]["200"]["content"]["application/json"];

const fetchIRTaskById = async ({
  taskId,
  resultId,
}: {
  taskId: string;
  resultId: IRResult["uuid"];
}): Promise<IRResult> => {
  const url = `/api/image-recognition/tasks/${taskId}/results/${resultId}`;

  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    return response.json();
  });
};

export const useGetIRResultById = ({
  taskId,
  resultId,
}: {
  taskId: string;
  resultId: IRResult["uuid"];
}) => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["ir-results", resultId],
    queryFn: () => fetchIRTaskById({ taskId, resultId }),
  });

  return {
    isPending,
    isError,
    data,
    error,
  };
};
