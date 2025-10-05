import { Box, Container, Grid, GridItem, Text } from "@chakra-ui/react"
import PerkList from "./components/PerkList"

function App() {
  return (
    <Container maxW="4xl">
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <GridItem colSpan={1}>
          <Box p={4}>
            <PerkList />
          </Box>
        </GridItem>
        <GridItem colSpan={1}>
          <Text>Item Section</Text>
        </GridItem>
        <GridItem colSpan={2}>
          <Text>Details</Text>
        </GridItem>
      </Grid>
    </Container>
  )
}

export default App
