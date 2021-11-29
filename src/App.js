import "./App.css"
import { ChakraProvider } from "@chakra-ui/react"
import RoutesComponent from "./routes"

function App() {
  return (
    <ChakraProvider>
      <RoutesComponent></RoutesComponent>
    </ChakraProvider>
  )
}

export default App
