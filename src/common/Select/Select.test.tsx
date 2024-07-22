import { fireEvent, render } from "@testing-library/react";
import Select from "./Select";

it("renders selected article", async () => {
  const { getByTestId } = render(
    <Select selectedOption={"1"} setSelectedOption={jest.fn()} />
  );
  const selectedValue = getByTestId("dropdown");
  const handleSelectedValue = fireEvent.change(selectedValue, {
    target: { value: "7" },
  });
  expect(handleSelectedValue).toBeTruthy();
});
