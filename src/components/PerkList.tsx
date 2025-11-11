import { PERK_KEY, type Locale, type PerkKey } from "@/lib/perks";
import { Grid } from "@chakra-ui/react";
import PerkEntry from "./PerkEntry/PerkEntry";

interface Props {
  selectedKeys: Array<PerkKey>;
  onTogglePerk: (key: PerkKey) => void;
  lang: Locale;
};
const PerkList = (props: Props) => (
  <Grid templateColumns="repeat(6, 0fr)" gap="6" justifyContent="center">
    {
      Object.entries(PERK_KEY).map(([key, perkKey]) => (
        <PerkEntry
          key={key}
          perkKey={perkKey}
          isSelected={props.selectedKeys.includes(perkKey)}
          onToggle={props.onTogglePerk}
          lang={props.lang}
        />
      ))
    }
  </Grid>
);

export default PerkList;