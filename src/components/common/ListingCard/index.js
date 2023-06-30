import CoverImage from './CoverImage';
import Amenities from './Amenities';
import PropertyText from './PropertyText';

const ListingCard = ({ listing }) => {
  return (
    <div
      className={`rounded-lg overflow-hidden w-full ${
        listing ? 'bg-white' : 'loadingCardBackground h-listing-card'
      } sm:bg-opacity-0`}
    >
      {listing && (
        <>
          <CoverImage listing={listing} />
          <div className={`flex-1 p-5 sm:bg-white sm:rounded-lg sm:mt-5`}>
            <p className="font-semibold text-primary-black opacity-40 text-sm pb-5">
              Featured Acamp
            </p>
            <PropertyText listing={listing} />
            <Amenities listing={listing} />
          </div>
        </>
      )}
    </div>
  );
};

export default ListingCard;
