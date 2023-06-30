import Image from 'next/image';

const PageHeader = () => {
  return (
    <div className="pt-19 [@media(max-width:320px)]:pt-10 pb-5 px-4 flex relative overflow-x-hidden overflow-y-visible sm:overflow-visible sm:w-70 lg:w-40 2xl:w-20">
      <Image
        src="/badge.svg"
        alt="Header Badge"
        width="132"
        height="132"
        className="z-0 absolute -mt-5 -right-10 sm:right-0"
      />
      <h1 className="flex text-primary-black font-semibold tracking-tighter text-header [@media(max-width:320px)]:h-[150px] h-header w-header z-10 relative">
        Book a place to camp
      </h1>
    </div>
  );
};

export default PageHeader;
