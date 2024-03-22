import './Button.css';

const getVariant = (variant) => {
  switch (variant) {
    case 'primary':
      return 'bg-[#9747FF] hover:bg-black text-black hover:text-white shadow shadow-black-600/25 hover:shadow-black-600/75';
    case 'secondary':
      return 'bg-[#232426] text-white';

    case 'outline-primary':
      return 'anime2 ';

    case 'anime':
      return 'anime';

    default:
      return 'bg-[#B44201] border border-[#E7651D] hover:bg-[#E7651D] text-white ';
  }
};
export const Button = ({
  className,
  children,
  variant,
  square,
  paddingLess,
  type = 'button',
  onClick,
  imgSrc,
  imgAlt,
  iconPresent,
  ...props
}) => {
  return (
    <button
      {...props}
      type={type}
      onClick={onClick}
      className={`
          ${getVariant(variant)}  transition duration-75   ${
        !paddingLess && 'sm:px-6 px-5 sm:py-3 py-2'
      }  ${!square && 'rounded-md '} active:scale-95 ${className}  ${
        !iconPresent && 'flex justify-center items-center'
      } gap-[10px]   sm:text-xl text-base font-bold`}
    >
      {imgSrc && (
        <div className='relative sm:w-[20px] w-[10px] sm:h-[20px] h-[10px]'>
          <img src={imgSrc} alt={imgAlt} />
        </div>
      )}
      {children}
    </button>
  );
};
