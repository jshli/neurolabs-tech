"use client";
import { useQuery } from "@tanstack/react-query";
import { paths } from "../../schema";

type IRTaskResults =
  paths["/image-recognition/tasks/{task_uuid}/results"]["get"]["responses"]["200"]["content"]["application/json"];

const fetchIRTaskByIdResults = async (
  taskUUID: string,
): Promise<IRTaskResults> => {
  const url = `/api/image-recognition/tasks/${taskUUID}/results`;
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    return response.json();
  });
};
export const useGetIRTaskByIdResults = (taskUUID: string) => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["ir-task-results", taskUUID],
    queryFn: () => fetchIRTaskByIdResults(taskUUID),
  });

  return {
    isPending,
    isError,
    data,
    error,
  };
};
