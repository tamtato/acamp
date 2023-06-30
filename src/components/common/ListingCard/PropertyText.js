const PropertyText = ({ listing }) => {
  return (
    <div className="pb-5">
      <h2 className="font-semibold text-xl pb-3 tracking-tight text-primary-black">
        {listing.title}
      </h2>
      <a
        href={
          'http://maps.google.com/?q=' +
          listing.location.lat +
          '+' +
          listing.location.lng
        }
        target="_blank"
      >
        <p className="text-xs font-medium text-primary-black opacity-40 underline pb-3 truncate">
          {listing.formattedAddress}
        </p>
      </a>
      <p className="font-medium text-primary-black text-md w-full line-clamp-6 tracking-base">
        {listing.description}
      </p>
    </div>
  );
};

export default PropertyText;
