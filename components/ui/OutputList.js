import { addComma } from "@/util/decimalHelpers";
import InputBox from "./InputBox";

function OutputList({ list }) {
  return (
    <>
      {list &&
        list.map((el) => (
          <InputBox
            key={el.label}
            label={el.label}
            desc={el.desc}
            unit={el.unit}
            disabled
            value={addComma(el.value)}
            formula={el.formula}
            hidden={el.hidden}
          />
        ))}
    </>
  );
}

export default OutputList;
