"use client";
import { useQuery } from "@tanstack/react-query";
import { paths } from "../../schema";

const fetchIRTasks = async (): Promise<
  paths["/image-recognition/tasks"]["get"]["responses"]["200"]["content"]["application/json"]
> => {
  const url = "/api/image-recognition/tasks";
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    return response.json();
  });
};
export const useGetIRTasks = () => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["catalogueItems"],
    queryFn: fetchIRTasks,
  });

  return {
    isPending,
    isError,
    data,
    error,
  };
};
