import Seo from "../Seo";
import { SmallButton } from "../ui/Button";
import ButtonGroup from "../ui/ButtonGroup";
import Container from "../ui/Container";
import InputList from "../ui/InputList";
import OutputList from "../ui/OutputList";

function PageTemplate({
  title,
  onSubmit,
  reset,
  isHidden,
  handleHidden,
  inputList,
  outputList,
}) {
  return (
    <Container>
      <Seo title={title} />
      <form className="px-4 flex flex-col" onSubmit={onSubmit}>
        <SmallButton style="mb-4 self-end max-md:hidden" onClick={handleHidden}>
          {`엑셀 수식 ${isHidden ? "보기" : "가리기"}`}
        </SmallButton>
        <InputList list={inputList} />
        <OutputList list={outputList} />
        <ButtonGroup onClick={reset} />
      </form>
    </Container>
  );
}

export default PageTemplate;
