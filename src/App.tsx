import * as React from "react"
import {
  ChakraProvider,
  Spacer,
  theme,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react"
import { Recipes } from "./Recipes"


export class App extends React.Component {
  public render() {
    return (
      <ChakraProvider theme={theme}>
        <Spacer />
        <Tabs>
          <TabList>
            <Tab>Recipes</Tab>
            <Tab>Reviews</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Recipes></Recipes>
            </TabPanel>
            <TabPanel>
              <p>Here's the reviews</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </ChakraProvider>
    )
  }
}
