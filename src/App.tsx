import { Container } from "@chakra-ui/react"
import Perk from "@/components/Perk"
import { PERKS } from "@/lib/perks"

function App() {
  return (
    <Container>
      {Object.entries(PERKS).map(([key, perk]) => (
        <Perk key={key} imageSrcUrl={perk.iconUrl} />
      ))}
    </Container>
  )
}

export default App
