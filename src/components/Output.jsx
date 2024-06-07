import { Box, Button ,Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { execute } from './API';
import { BeatLoader } from 'react-spinners';

const Output = ({editorRef,language}) => {

const [output,setOutput]=useState(null)
const [isLoading,setisLoading]=useState(false)

  const runCode = async()=>{
      const sourceCode = editorRef.current.getValue();
      if(! sourceCode)
        return;
      try{
        setisLoading(true);
        const {run:result} = await execute(language,sourceCode)
        setOutput(result.output)
      }catch(error){}
      finally{
        setisLoading(false)
      }
  };
  return (
    <Box w="50%">
        <Text mb={2} fontSize='lg'>Output</Text>
        <Button variant='outline' colorScheme='green' mb={4} isLoading={isLoading} onClick={runCode}>
            Run Code
        </Button>
        <Box
            height='75vh'
            p={2}
            border='1px solid'
            borderRadius={4}
            borderColor='#333'
        >
          {output?output:'Click "Run Code" to see the output here'}
        </Box>
    </Box>
  )
}

export default Output