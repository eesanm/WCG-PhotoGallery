import { useMemo } from "react";
import { useQuery } from "react-query";
import ImageResult, { ImageResultProps } from "./ImageResult";

export interface ResponseImages {
  id: string;
  width: number;
  height: number;
  alt_description: string | null;
  blur_hash: string;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  user: {
    id: string;
    name: string;
  };
}

const Gallery: React.FC<{ topicSlug: string }> = ({ topicSlug }) => {
  //-- fetch data for side links
  const { isLoading, error, data } = useQuery<ResponseImages[]>(
    `topic-${topicSlug}`,
    () =>
      fetch(
        `https://api.unsplash.com/topics/${topicSlug}/photos?client_id=k-BF5wOTwKPZ1m1UM1H0PzU-2OT5ngKJh1uAGy3s67I`
      ).then((res) => res.json())
  );

  const imagesResultsProps: ImageResultProps[] = useMemo(() => {
    if (data) {
      return data.map((result) => ({
        id: result.id,
        author: result.user.name,
        width: result.width,
        height: result.height,
        altDescription: result.alt_description,
        blurHash: result.blur_hash,
        urls: {
          raw: result.urls.raw,
          regular: result.urls.regular,
          small: result.urls.small,
          thumb: result.urls.thumb,
        },
      }));
    }
    return [];
  }, [data]);

  if (isLoading) {
    return <>{"Loading..."}</>;
  }

  if (data?.length === 0) {
    return <>{"No results"}</>;
  }

  if (error) {
    return <>{"There is an error returning the data."}</>;
  }

  return (
    <div className="flex flex-wrap  gap-6 p-6 justify-center lg:justify-start">
      {imagesResultsProps.map((resultProps, index) => {
        return <ImageResult key={index} {...resultProps} />;
      })}
    </div>
  );
};

export default Gallery;
