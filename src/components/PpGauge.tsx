import { Progress } from "@chakra-ui/react";

interface Props {
  ppUsed: number;
  maxPp: number;
};
const PpGauge = (props: Props) => (
  <Progress.Root
    value={props.ppUsed}
    max={props.maxPp}
    colorPalette={props.ppUsed === props.maxPp ? "green" : props.ppUsed > props.maxPp ? "red" : "white"}
  >
    <Progress.Label>PP</Progress.Label>
    <Progress.Track flex="1">
      <Progress.Range />
    </Progress.Track>
    <Progress.ValueText
      color={props.ppUsed === props.maxPp ? "green" : props.ppUsed > props.maxPp ? "red" : "white"}
    >
      {`${props.ppUsed} / ${props.maxPp}`}
    </Progress.ValueText>
  </Progress.Root>
);

export default PpGauge;