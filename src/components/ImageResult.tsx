/** @format */

import Image from 'next/image';
import { useState } from 'react';
import { Blurhash } from 'react-blurhash';
import ImageResultModal from './ImageResultModal';

export interface ImageResultProps {
  id: string;
  author: string;
  width: number;
  height: number;
  altDescription: string | null;
  blurHash: string;
  urls: {
    full: string;
    raw: string;
    regular: string;
    small: string;
    thumb: string;
  };
  downloadUrl: string;
}

const ImageResult: React.FC<ImageResultProps> = ({
  urls,
  downloadUrl,
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
      <ImageResultModal
        altDescription={altDescription}
        sourceUrl={urls.raw}
        downloadUrl={downloadUrl}
        author={author}
        width={width}
        height={height}
        blurHash={blurHash}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
      />
    </>
  );
};

export default ImageResult;
