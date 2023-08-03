import { HStack, Image, Text } from "@chakra-ui/react"
import logo from "../assets/gamelogo.svg"
import ColorModeSwitch from "./ColorModeSwitch"
import SearchInput from "./SearchInput"


const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} pr='10px'>
        <Image src={logo} boxSize='60px'></Image>
        <SearchInput/>
        <ColorModeSwitch/>
    </HStack>
  )
}

export default NavBar