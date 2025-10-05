import { Avatar, AvatarGroup } from "@chakra-ui/react";

interface Props {
  imgUrl: string;
  active: boolean;
  size?: "sm" | "md" | "lg" | "xl";
};
const PerkIcon = (props: Props) => {
  return (
    <AvatarGroup>
      <Avatar.Root
        shape="square"
        size={props.size ?? "xl"}
        style={{
          filter: props.active
            ? "brightness(0.5) sepia(1) hue-rotate(80deg) saturate(2)"
            : "grayscale(1)",
        }}
      >
        <Avatar.Fallback color={props.active ? "green.500" : ""}>X</Avatar.Fallback>
        <Avatar.Image src={props.imgUrl} />
      </Avatar.Root>
    </AvatarGroup>
  );
};

export default PerkIcon;