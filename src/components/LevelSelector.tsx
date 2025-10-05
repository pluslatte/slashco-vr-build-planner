import { Field, NumberInput } from "@chakra-ui/react";

interface Props {
  level: number;
  setLevel: (level: number) => void;
  maxPp: number;
};
const LevelSelector = (props: Props) => (
  <Field.Root>
    <Field.Label>Level</Field.Label>
    <NumberInput.Root
      value={props.level.toString()}
      width="100px"
      min={0}
      max={100}
      onValueChange={(e) => {
        const num = parseInt(e.value);
        if (!isNaN(num)) {
          props.setLevel(num)
        } else {
          props.setLevel(0)
        }
      }}
    >
      <NumberInput.Label />
      <NumberInput.Control />
      <NumberInput.Input />
    </NumberInput.Root>
    <Field.HelperText>Max PP: {props.maxPp}</Field.HelperText>
  </Field.Root>
);

export default LevelSelector;