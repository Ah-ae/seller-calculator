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
          type="number"
          step="0.01"
          pattern="\d*"
          id={id}
          className={`px-2 py-1 ${disabled ? "text-gray400" : "text-black"}`}
          disabled={disabled ? true : false}
          placeholder="0"
          value={value}
          onChange={onChange}
        />
        <span className="ml-2">{unit}</span>
      </div>
    </div>
  );
}
