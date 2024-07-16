const Page = ({ params }: { params: { uuid: string } }) => {
  return <p>{params.uuid}</p>;
};
export default Page;
