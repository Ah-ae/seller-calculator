import Toggle from "./Toggle";

function ToggleBox() {
  const toggleDarkMode = () => {
    if (localStorage.getItem("theme") === "dark") {
      localStorage.removeItem("theme");
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <div className="mt-4 flex justify-end items-center">
      <span className="mr-2 text-gray-500">다크 모드</span>
      <Toggle handleToggle={toggleDarkMode} />
    </div>
  );
}

export default ToggleBox;
