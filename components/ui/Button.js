export function Button({
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

export function SmallButton({ children, onClick, style }) {
  return (
    <button
      className={`w-auto h-7 px-2 border-solid border-[1px] border-gray200 rounded-md text-gray300 text-sm ${style}`}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
