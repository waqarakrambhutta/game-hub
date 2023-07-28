import { HStack, Image, Text } from "@chakra-ui/react"
import logo from "../assets/gamelogo.svg"
import ColorModeSwitch from "./ColorModeSwitch"


const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} pr='10px'>
        <Image src={logo} boxSize='60px'></Image>
        <ColorModeSwitch/>
    </HStack>
  )
}

export default NavBar