/** @format */
import Image from 'next/image';
import Modal from 'react-modal';
import { Blurhash } from 'react-blurhash';
import { IoClose } from 'react-icons/io5';
import { FiDownload } from 'react-icons/fi';
import LoadingSpinner from './LoadingSpinner';
import { CSSProperties, useMemo, useState } from 'react';
import classNames from 'classnames';
import saveAs from 'file-saver';

export interface ImageResultModalProps {
  author: string;
  sourceUrl: string;
  downloadUrl: string;
  altDescription: string | null;
  blurHash: string;
  width: number;
  height: number;
  isOpen: boolean;
  onClose: () => void;
}

Modal.setAppElement('#root');

const ImageResultModal: React.FC<ImageResultModalProps> = ({
  author,
  blurHash,
  sourceUrl,
  downloadUrl,
  altDescription,
  width,
  height,
  isOpen,
  onClose,
}) => {
  const [isZoomedIn, setIsZoomedIn] = useState(false);

  const imageContainerStyle: CSSProperties = useMemo(() => {
    if (isZoomedIn) {
      return {
        aspectRatio: `${width}/${height}`,
        width: `${width}px`,
        height: `${height}px`,
      };
    }

    return {
      aspectRatio: `${width}/${height}`,
      lineHeight: '100%',
    };
  }, [height, isZoomedIn, width]);

  return (
    <Modal
      isOpen={isOpen}
      className="Modal"
      style={{ overlay: { backgroundColor: 'rgba(0, 0, 0, 0.7)' } }}
      onRequestClose={() => {
        onClose();
      }}
    >
      <div className="flex flex-col h-full">
        {/*--- Header ---*/}
        <div className="shrink-0 relative flex items-center px-2 h-10">
          <IoClose className="cursor-pointer" size={30} onClick={onClose} />
        </div>

        {/*--- Main Content ---*/}
        <div className="flex-grow items-center bg-neutral-100 overflow-auto">
          <div
            className={classNames(
              `relative m-auto`,
              { 'max-w-full max-h-full cursor-zoom-in': !isZoomedIn },
              { 'cursor-zoom-out': isZoomedIn }
            )}
            style={imageContainerStyle}
            onClick={() => {
              setIsZoomedIn(!isZoomedIn);
            }}
          >
            {blurHash && (
              <Blurhash
                hash={blurHash}
                width="100%"
                height="100%"
                style={{
                  display: 'flex',
                  position: 'absolute',
                }}
              />
            )}
            <LoadingSpinner />
            <Image
              src={sourceUrl}
              fill
              quality={100}
              alt={altDescription ?? 'Missing description'}
              className="absolute"
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="shrink-0 relative justify-center items-center flex h-10 text-sm font-medium">
          <div>{author}</div>
          <FiDownload
            className="absolute right-4 cursor-pointer"
            size={28}
            onClick={() => {
              const downloadImage = async () => {
                saveAs(downloadUrl + '&force=true', author);
              };
              downloadImage();
            }}
          />
        </div>
      </div>
    </Modal>
  );
};

export default ImageResultModal;
