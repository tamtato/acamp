import Image from 'next/image';

const ContentCard = ({ text, icon }) => {
  return (
    <div className="h-info-card w-info-card shrink-0 bg-red text-white rounded-lg p-4/5 flex flex-col">
      <Image src={icon} alt={icon} width="30" height="30" className="mt-2" />
      <p className="text-lg font-semibold pt-4/5 tracking-normal">{text}</p>
    </div>
  );
};

export default ContentCard;
