"use client";
import { useQuery } from "@tanstack/react-query";
import { paths } from "../../schema";

const fetchCatalogueItems = async (): Promise<
  paths["/catalog-items"]["get"]["responses"]["200"]["content"]["application/json"]
> => {
  const url = "/api/catalog-items";
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    return response.json();
  });
};
export const useGetCatalogueItems = () => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["catalogueItems"],
    queryFn: fetchCatalogueItems,
  });

  return {
    isPending,
    isError,
    data,
    error,
  };
};