import Gallery from "@/components/Gallery";
import { NextPage } from "next";
import { useRouter } from "next/router";

const Topic: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <Gallery topicSlug={slug as string} />
    </div>
  );
};

export default Topic;
