import {Box,Button,Menu,MenuButton,MenuItem,MenuList,Text} from "@chakra-ui/react";
import { LANGUAGE_VERSIONS } from '../constants';

const languages=Object.entries(LANGUAGE_VERSIONS);

const LanguageSelector = ({language,onSelect}) => {
  return (
    <Box ml={2} mb={4}>
        <Text mb={2} fontSize='lg'>Language: </Text>
        <Menu isLazy>
            <MenuButton as={Button}>{language}</MenuButton>
            <MenuList>
                {
                    languages.map(([lang,version])=>(
                        <MenuItem key={lang} 
                        color={
                            lang==language?"blue.400" :""
                        }
                        bg={
                            lang===language?"gray.900":"transparent"
                        }
                        _hover={{
                            color:"blue.400",
                            bg:"gray.900"
                        }}
                        onClick={()=>onSelect(lang)}>
                            {lang}
                            &nbsp;
                            <Text as="span" color="gray" fontSize="sm">
                                {version}
                            </Text>
                        </MenuItem>
                    ))
                }
            </MenuList>
        </Menu>
    </Box>
  )
}

export default LanguageSelector