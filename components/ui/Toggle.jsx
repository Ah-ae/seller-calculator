function Toggle({ handleToggle }) {
  return (
    <label
      htmlFor="toggle"
      className="flex items-center cursor-pointer select-none"
    >
      <div className="relative">
        <input type="checkbox" id="toggle" className="sr-only" />
        <div
          className="h-7 w-14 
          bg-gray-200 
          dark:bg-gradient-to-r from-toggle-dark-left to-toggle-dark-right rounded-full transition duration-500"
          onClick={handleToggle}
        ></div>
        <div
          className="absolute h-5 w-5 
            left-8 top-1 flex items-center justify-center rounded-full 
            dark:-translate-x-7
            bg-white dark:bg-dark-blue-200 transition duration-500"
          onClick={handleToggle}
        ></div>
      </div>
    </label>
  );
}

export default Toggle;
