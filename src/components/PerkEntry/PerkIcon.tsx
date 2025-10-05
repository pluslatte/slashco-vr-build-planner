import { Avatar, AvatarGroup } from "@chakra-ui/react";

interface Props {
  imgUrl: string
};
const PerkIcon = (props: Props) => {
  return (
    <AvatarGroup>
      <Avatar.Root shape="square" size="xl">
        <Avatar.Fallback>X</Avatar.Fallback>
        <Avatar.Image src={props.imgUrl} />
      </Avatar.Root>
    </AvatarGroup>
  );
};

export default PerkIcon;