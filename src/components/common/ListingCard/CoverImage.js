import Image from 'next/image';
import { useState } from 'react';

const CoverImage = ({ listing }) => {
  const [showImage, setShowImage] = useState(true);

  return (
    <div
      className={`h-listing-card-image relative bg-center bg-cover sm:rounded-lg w-full ${
        showImage ? '' : 'loadingBackground'
      }`}
      style={
        showImage && {
          backgroundImage: `url(${listing.coverImage})`,
        }
      }
    >
      {showImage && (
        <Image
          src={listing.coverImage}
          alt="Listing Image"
          width={0}
          height={0}
          onError={() => {
            setShowImage(false);
          }}
        />
      )}
    </div>
  );
};

export default CoverImage;
