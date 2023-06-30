import Image from 'next/image';
import Button from '../Button';

const Amenities = ({ listing }) => {
  return (
    <div className="font-medium text-md flex flex-col">
      <div className="flex h-5 tracking-base items-center pb-3">
        <div className="mb-[3px]">
          <Image
            src="/icons/star-rating.svg"
            width="16"
            height="16"
            alt="Star Rating"
          />
        </div>
        <span className="pl-2 text-primary-black">{listing.rating}</span>
      </div>
      <div className="flex items-center pb-3">
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
        {listing.hasElectricity && (
          <Image
            src={`/icons/electricity.svg`}
            width="22"
            height="22"
            alt="electricity"
          />
        )}
      </div>
      <div className="tracking-base pb-3 text-primary-black">
        {listing.fromPrice} {listing.currency} / night
      </div>
      <Button
        label="Book now"
        icon="/icons/flash.svg"
        onClick={() => window.open(listing.deepLink)}
      />
    </div>
  );
};

export default Amenities;
