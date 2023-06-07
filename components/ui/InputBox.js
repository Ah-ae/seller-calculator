export default function InputBox({
  id,
  label,
  desc,
  unit,
  disabled,
  value,
  onChange,
  formula,
  hidden,
}) {
  return (
    <div className="h-[60px] max-md:h-auto py-2 flex-col">
      <div className="flex justify-between items-center">
        <label htmlFor={id}>
          {label} <span className="text-sm max-md:hidden">{desc}</span>
        </label>
        <div>
          <input
            type="text"
            step="0.01"
            inputMode="decimal"
            id={id}
            className={`px-2 py-1 ${
              disabled
                ? "text-gray-400 max-md:text-gray-600 bg-gray-100"
                : "text-black"
            } text-right focus:outline-gray-600 max-md:w-36`}
            disabled={disabled ? true : false}
            value={value}
            placeholder="0"
            onChange={onChange}
            autoComplete="off"
          />
          <span className="ml-2">{unit}</span>
        </div>
      </div>
      <span
        className={`${
          hidden ? "text-xs text-gray-400 hidden" : "text-xs text-gray-400 "
        }`}
      >
        {formula}
      </span>
    </div>
  );
}
