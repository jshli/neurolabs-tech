"use client";
import { useGetIRTasks } from "@/hooks/useGetIRTasks";

export const Page = () => {
  const { isPending } = useGetIRTasks();
  return <p>hello</p>;
};
export default Page;
