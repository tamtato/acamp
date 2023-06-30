import Image from 'next/image';

const Button = ({ label, onClick, icon }) => {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center justify-between px-4 h-12 border-one-half rounded-sm font-medium tracking-base text-primary-black border-primary-black hover:opacity-80 hover:bg-primary-black hover:bg-opacity-5"
    >
      {label}
      <span>
        <Image src={icon} width="18" height="20" alt="Button Icon" />
      </span>
    </button>
  );
};

export default Button;
