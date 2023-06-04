export default function Button({
  children,
  type,
  onClick,
  bgColor,
  hoverBgColor,
  color,
  style,
}) {
  return (
    <button
      className={`w-40 h-12 ${bgColor ? bgColor : "bg-blue300"} ${
        hoverBgColor ? hoverBgColor : " hover:bg-blue200"
      } ${color ? color : "text-white"}  rounded-md ${style}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
