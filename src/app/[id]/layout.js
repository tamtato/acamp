import Image from 'next/image';
import Link from 'next/link';

const ListingLayout = ({ children }) => {
  return (
    <div className="relative">
      <div className="pb-5">
        <Link href="/">
          <Image
            src="/icons/arrow-left.svg"
            alt="Back to home"
            width="20"
            height="22"
            className=""
          />
        </Link>
      </div>

      {children}
    </div>
  );
};

export default ListingLayout;
