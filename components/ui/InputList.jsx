import InputBox from "./InputBox";

function InputList({ list }) {
  return (
    <>
      {list &&
        list.map((el) => (
          <InputBox
            key={el.id}
            label={el.label}
            desc={el.desc}
            unit={el.unit}
            id={el.id}
            value={el.value}
            onChange={el.onChange}
          />
        ))}
    </>
  );
}

export default InputList;
