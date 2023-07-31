import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
  FaMaxcdn,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import {BsGlobe} from "react-icons/bs"
import { Platform } from "../hooks/useGames";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { color } from "framer-motion";

interface props {
  platforms: Platform[];
}

const PlatformIconsList = ({ platforms }: props) => {
    const IconMap: {[key:string]:IconType}={
        pc:FaWindows,
        playstation:FaPlaystation,
        xbox:FaXbox,
        nintendo:SiNintendo,
        mac:FaApple,
        android:FaAndroid,
        linux:FaLinux,
        ios:MdPhoneIphone,
        web:BsGlobe
    }

  return (
    <HStack marginY={'10px'}>
      {platforms.map((platform) => (
        <Icon key={platform.id} as={IconMap[platform.slug]} color='gray.500'/>
      ))} 
    </HStack>
  );
};

export default PlatformIconsList;
