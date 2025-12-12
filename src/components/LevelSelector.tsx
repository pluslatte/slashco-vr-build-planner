import { Field, NumberInput } from "@chakra-ui/react";
import { MAX_LEVEL, MIN_LEVEL } from "../lib/constants";

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
      min={MIN_LEVEL}
      max={MAX_LEVEL}
      onValueChange={(e) => {
        const num = parseInt(e.value);
        if (!isNaN(num)) {
          props.setLevel(num)
        } else {
          props.setLevel(MIN_LEVEL)
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