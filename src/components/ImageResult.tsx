import Image from "next/image";
import { useState } from "react";
import Modal from "react-modal";
import { Blurhash } from 'react-blurhash';
import { JsxElement } from "typescript";

Modal.setAppElement("#root");

export interface ImageResultProps {
  id: string;
  author: string;
  width: number;
  height: number;
  altDescription: string | null;
  blurHash: string;
  urls: {
    raw: string;
    regular: string;
    small: string;
    thumb: string;
  };
}

const ImageResult: React.FC<ImageResultProps> = ({
  urls,
  author,
  width,
  height,
  blurHash,
  altDescription,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className="h-40 w-60 bg-white rounded-lg relative overflow-hidden shadow-md cursor-pointer"
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        {blurHash && (
          <div className="relative">
            <Blurhash
              hash={blurHash}
              width="240px"
              height="160px"
              className="absolute top-0 left-0"
            />
          </div>
        )}
        <Image
          src={urls.thumb}
          onLoadStart={() => {
            console.log('load is starting');
          }}
          alt={altDescription ?? 'Missing description'}
          fill
          sizes="(min-width: 0) 240px"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <Modal
        isOpen={isModalOpen}
        className="Modal "
        onRequestClose={() => {
          setIsModalOpen(false);
        }}
      >
        <div className="flex flex-col h-full">
          <div className="shrink-0 relative flex h-10"></div>
          <div className="flex-grow relative justify-center items-center bg-neutral-100 overflow-auto">
            <div>
              {blurHash && (
                
                  <Blurhash
                    hash={blurHash}
                    width="100%"
                  height="100%"
                  style={{
                    "position" : "absolute"}}
                  />
                
              )}
              <Image
                src={urls.raw}
                fill
                alt={altDescription ?? 'Missing description'}
                style={{ objectFit: 'contain' }}
                className="p-3"
              />
            </div>
          </div>
          <div className="shrink-0 relative justify-center items-center flex h-10 text-sm font-medium">
            {author}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ImageResult;
