import Image from "next/image";
import { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

export interface ImageResultProps {
  id: string;
  author: string;
  width: string;
  height: string;
  altDescription: string;
  urls: {
    raw: string;
    regular: string;
    small: string;
    thumb: string;
  };
}

const ImageResult: React.FC<ImageResultProps> = ({ urls, altDescription }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div
        className="h-40 w-60 bg-white rounded-lg relative overflow-hidden shadow-md cursor-pointer"
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        <Image
          blurDataURL="/image/loading-placeholder.gif"
          placeholder="blur"
          src={urls.thumb}
          alt={altDescription}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <Modal
        className="p-0 inset-0 md:inset-10"
        isOpen={isModalOpen}
        onRequestClose={() => {
          setIsModalOpen(false);
        }}
      >
        <div className="flex flex-col">
          <div className="shrink-0 h-10 bg-gray-300"></div>
          <div className="grow p-4"></div>
        </div>
      </Modal>
    </>
  );
};

export default ImageResult;
