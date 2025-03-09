import { ChakraProvider } from "@chakra-ui/react"
import theme from "./components/ui/theme"
import RouterController from "./router/RouterController"
import { Toaster } from "./components/ui/toaster"


function App() {

  return (
    <ChakraProvider value={theme}>
      <Toaster/>
      <RouterController/>
    </ChakraProvider>
  )
}

export default App
