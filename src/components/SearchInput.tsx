import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useRef } from 'react'
import { BsSearch } from 'react-icons/bs'

const SearchInput = () => {

  const ref = useRef<HTMLInputElement>(null)

  return (
    <form onSubmit={(event)=>{ 
    event.preventDefault()
    if (ref.current) console.log(ref.current.value);
    }}>
    <InputGroup>
    <InputLeftElement children={<BsSearch/>}/>
    <Input borderRadius={20} placeholder='Search for game...'></Input>
    </InputGroup>
    </form>
  )
}

export default SearchInput