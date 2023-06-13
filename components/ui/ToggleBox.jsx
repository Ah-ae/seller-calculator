import Toggle from "./Toggle";

function ToggleBox() {
  const toggleDarkMode = () => {
    if (localStorage.getItem("theme") === "dark") {
      localStorage.removeItem("theme");
      document.documentElement.classList.remove("dark");
    } else {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <div className="mt-4 flex justify-end items-center">
      <span className="mr-2 text-gray-500 dark:text-dark-blue-100">
        다크 모드
      </span>
      <Toggle handleToggle={toggleDarkMode} />
    </div>
  );
}

export default ToggleBox;
