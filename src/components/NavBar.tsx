import { HStack, Image, Text } from "@chakra-ui/react"
import logo from "../assets/gamelogo.svg"
import ColorModeSwitch from "./ColorModeSwitch"
import SearchInput from "./SearchInput"

interface props{
  onSearch:(searchText:string)=>void
}

const NavBar = ({onSearch}:props) => {
  return ( 
    <HStack  padding='10px'>
        <Image src={logo} boxSize='60px'></Image>
        <SearchInput onSearch={onSearch}/>
        <ColorModeSwitch/>
    </HStack>
  )
}

export default NavBar