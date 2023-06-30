import Image from 'next/image';

const Amenities = ({ listing }) => {
  return (
    <div className="flex items-center py-3">
      {listing.accommodationTypes.map((accommodation) => {
        return (
          <div key={accommodation} className="mr-2">
            <Image
              src={`/icons/${accommodation.toLowerCase()}.svg`}
              width="22"
              height="22"
              alt={accommodation}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Amenities;
