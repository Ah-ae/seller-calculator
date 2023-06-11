import { useState, useCallback } from "react";
import { addComma } from "@/util/decimalHelpers";
import { isValid } from "@/util/validation";

function useInputs(initialForm) {
  const [form, setForm] = useState(initialForm);

  const onChange = useCallback(
    (e) => {
      const { id, value } = e.target;

      if (!isValid(value)) {
        alert("숫자를 입력해 주세요.");
        return;
      }

      const valueWithComma = addComma(value);
      setForm({ ...form, [id]: valueWithComma });
    },
    [form]
  );

  const reset = useCallback(() => setForm(initialForm), [initialForm]);

  return [form, onChange, reset];
}

export default useInputs;
