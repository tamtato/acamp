import Button from '../Button';
import Link from 'next/link';
import CardHeader from './CardHeader.js';
import Amenities from './Amenities';

const SmallListingCard = ({ listing }) => {
  return (
    <div
      className={`rounded-lg h-small-listing-card w-full p-4/5 ${
        listing ? 'bg-white' : 'loadingCardBackground'
      }`}
    >
      {listing && (
        <>
          <div className="flex-1 text-primary-black flex flex-col w-full">
            <CardHeader listing={listing} />
            <p className="font-medium text-md w-full tracking-base truncate">
              {listing.title}
            </p>
            <div className="pb-3">
              {listing.fromPrice} {listing.currency} / night
            </div>
            <Amenities listing={listing} />
            <Link key={listing.id} href={{ pathname: `/${listing.id}` }}>
              <Button
                label="View Property"
                icon="/icons/arrow-right.svg"
                onClick={() => {}}
              />
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default SmallListingCard;
