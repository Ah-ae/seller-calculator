export function Button({ children, type, onClick, theme, style }) {
  return (
    <button
      className={`w-40 h-12 ${
        theme
          ? theme
          : "bg-blue-300 hover:bg-blue-200 max-md:hover:bg-blue-300 text-white"
      } rounded-md ${style}`}
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
      className={`w-auto h-7 px-2 border-solid border-[1px] border-gray-200 rounded-md text-gray-300 text-sm ${style}`}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
