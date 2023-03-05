import { NextPage } from "next";
import { useRouter } from "next/router";

const Topic: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  return <div>{slug}</div>;
};

export default Topic;
