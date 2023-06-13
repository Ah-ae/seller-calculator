import { Button } from "./Button";

function ButtonGroup({ reset }) {
  return (
    <div className="my-8 flex justify-end">
      <Button type="submit" style="mr-3">
        계산하기
      </Button>
      <Button
        type="button"
        theme="bg-gray-100 hover:bg-gray-200 text-gray-400"
        onClick={reset}
      >
        초기화하기
      </Button>
    </div>
  );
}

export default ButtonGroup;
