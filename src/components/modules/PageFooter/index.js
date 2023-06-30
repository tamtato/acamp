import Image from 'next/image';
const PageFooter = () => {
  return (
    <div className="w-full h-footer [@media(max-width:320px)]:h-[520px] flex relative sm:w-55 lg:w-30 2xl:w-15 sm:mb-10">
      <Image
        src="/footer-img-sm.png"
        alt="Footer Background"
        fill
        className="z-0 sm:rounded-lg"
      />
      <div className="z-10 text-white font-semibold tracking-tighter text-header text-center self-end m-0 px-10 pb-18">
        Go camping with us
      </div>
    </div>
  );
};

export default PageFooter;
