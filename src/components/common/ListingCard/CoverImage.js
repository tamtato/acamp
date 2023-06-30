import Image from 'next/image';
import { useEffect, useState } from 'react';

const CoverImage = ({ listing }) => {
  const [coverImg, setCoverImg] = useState(listing.coverImage);
  const [fallbackImgIndex, setFallbackImgIndex] = useState(0);

  const handleSetFallbackImg = () => {
    if (fallbackImgIndex <= listing.images.length - 1) {
      return setCoverImg(listing.images[fallbackImgIndex].imageUrl);
    }
    return setCoverImg('');
  };

  useEffect(() => {
    if (coverImg !== listing.coverImage) {
      setFallbackImgIndex(fallbackImgIndex + 1);
    }
  }, [coverImg]);

  return (
    <div
      className={`h-listing-card-image relative bg-center bg-cover sm:rounded-lg w-full ${
        coverImg ? '' : 'loadingBackground'
      }`}
      style={
        coverImg && {
          backgroundImage: `url(${coverImg})`,
        }
      }
    >
      <Image
        src={coverImg}
        alt="Listing Image"
        width={0}
        height={0}
        onError={() => {
          handleSetFallbackImg();
        }}
      />
    </div>
  );
};

export default CoverImage;
