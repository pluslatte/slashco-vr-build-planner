import { Avatar, AvatarGroup } from "@chakra-ui/react";

interface Props {
  imgUrl: string;
  active: boolean;
};
const PerkIcon = (props: Props) => {
  return (
    <AvatarGroup>
      <Avatar.Root shape="square" size="xl">
        <Avatar.Fallback color={props.active ? "green.500" : ""}>X</Avatar.Fallback>
        <Avatar.Image color={props.active ? "green.500" : ""} src={props.imgUrl} />
      </Avatar.Root>
    </AvatarGroup>
  );
};

export default PerkIcon;