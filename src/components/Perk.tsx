import { Avatar, AvatarGroup } from "@chakra-ui/react";

interface PerkProps {
  imageSrcUrl: string;
};

const Perk = (props: PerkProps) => {
  return (
    <AvatarGroup>
      <Avatar.Root shape="square" size="xl">
        <Avatar.Fallback>X</Avatar.Fallback>
        <Avatar.Image src={props.imageSrcUrl} />
      </Avatar.Root>
    </AvatarGroup>
  );
};

export default Perk;