export default function InputBox({
  id,
  label,
  unit,
  disabled,
  value,
  onChange,
}) {
  return (
    <div className="my-4 flex justify-between items-center">
      <label htmlFor={id}>{label}</label>
      <div>
        <input
          type="text"
          step="0.01"
          inputMode="decimal"
          id={id}
          className={`px-2 py-1 ${
            disabled ? "text-gray400" : "text-black"
          } text-right focus:outline-gray600`}
          disabled={disabled ? true : false}
          value={value}
          placeholder="0"
          onChange={onChange}
          autoComplete="off"
        />
        <span className="ml-2">{unit}</span>
      </div>
    </div>
  );
}
