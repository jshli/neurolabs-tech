"use client";
import { useQuery } from "@tanstack/react-query";
import { paths } from "../../schema";

type IRTask =
  paths["/image-recognition/tasks/{task_uuid}"]["get"]["responses"]["200"]["content"]["application/json"];

const fetchIRTaskById = async (id: IRTask["uuid"]): Promise<IRTask> => {
  const url = `/api/image-recognition/tasks/${id}`;
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    return response.json();
  });
};
export const useGetIRTaskById = (id: IRTask["uuid"]) => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["ir-task", id],
    queryFn: () => fetchIRTaskById(id),
    enabled: !!id,
  });

  return {
    isPending,
    isError,
    data,
    error,
  };
};
