function Button({
  label,
  iconURL,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
}) {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 font-montserrat border text-lg leading-none rounded-full ${
        fullWidth && `w-full`
      }  ${
        backgroundColor
          ? `${backgroundColor} ${borderColor} ${textColor}`
          : "bg-coral-red border-coral-red text-white"
      }`}>
      {label}
      {iconURL && (
        <img src={iconURL} alt="Right Arrow" className="w-5 h-5 rounded-full" />
      )}
    </button>
  );
}
export default Button;
