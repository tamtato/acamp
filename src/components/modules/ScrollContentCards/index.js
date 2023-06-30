import ContentCard from '@/components/common/ContentCard';

const ScrollContent = () => {
  const contentList = [
    {
      text: 'Beautiful tent campsites, creative food artisans, boutique campsites and pristine private land.',
      icon: '/icons/one-finger.svg',
    },
    {
      text: 'Our community of Hosts keeps on growing, unlocking new destinations by the week.',
      icon: '/icons/two-finger.svg',
    },
    {
      text: 'A personal touch, both by your Host and by us. Our team is always there for you.',
      icon: '/icons/three-finger.svg',
    },
  ];
  return (
    <div className="py-18 w-full flex flex-col items-center">
      <div className="w-full flex justify-center">
        <h1 className="text-center font-semibold text-title text-primary-black tracking-tight px-4 pb-8 sm:w-40 2xl:w-20 ">
          What can you expect from an Acamp host?
        </h1>
      </div>

      <div className="w-full h-info-card flex overflow-x-auto lg:justify-center">
        {contentList.map((content) => {
          return (
            <div key={content.text} className="ml-4">
              <ContentCard text={content.text} icon={content.icon} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ScrollContent;
