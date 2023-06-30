import Image from 'next/image';
const CardHeader = ({ listing }) => {
  return (
    <div className="font-semibold text-sm flex justify-between">
      <p className="opacity-40">Featured Acamp</p>
      <div className="flex h-5 tracking-base items-center ">
        <div className="mb-[3px]">
          <Image
            src="/icons/star-rating.svg"
            width="16"
            height="16"
            alt="Star Rating"
          />
        </div>
        <span className="pl-2">{listing.rating}</span>
      </div>
    </div>
  );
};

export default CardHeader;
