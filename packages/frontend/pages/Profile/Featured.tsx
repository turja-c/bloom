import React from 'react'
import {
    Box,
    HStack,
    Text,
    VStack,
    Image,
    Flex, 
    Heading, 
    Spacer,
    Link,
    Divider
  } from '@chakra-ui/react';
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import InfiniteScroll from 'react-infinite-scroll-component';
import { ArrowRightIcon } from '@chakra-ui/icons';

function Projects() {

const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  return (
    <>
        <Flex>
            <Heading as="h2" marginTop="5">
                Recent Contributions
            </Heading>
            <Spacer />
            <Link href='https://turja.substack.com'>
            <Text marginTop='2rem' fontWeight={'bold'}>Learn more  
                &nbsp;
                <ArrowRightIcon w={3} h={3} /> 
            </Text>
            </Link>
            </Flex> 
            <Divider marginTop="5" marginBottom='2rem'/>
         <HStack style={{marginTop: '2rem' }}>

            <HStack style={{ overflow: 'scroll'}}> 

            <Box
                position={'relative'}
                rounded={'2xl'}
                borderWidth='0.2rem'
                borderColor='gray.200'
                overflow={''}
                _hover={{boxShadow: 'lg'}}
            >
                <Image
                borderRadius="lg"
                src='/static/8.png'
                alt="some good alt text"
                objectFit="contain"
                width={'30rem'}
                height={'20rem'}
                overflow="hidden"
                style={{borderRadius: '0.8rem'}}
              /> 
                    <Box w="100%">
                    <Box  borderRadius="lg" 
                    overflow="hidden"
                    rounded='90px'
                    width="15rem"
                    >
                        
                    </Box>
                    </Box>
            </Box>

            <Box
                position={'relative'}
                rounded={'2xl'}
                borderWidth='0.2rem'
                borderColor='gray.200'
                overflow={''}
                _hover={{boxShadow: 'lg'}}
            >
                <Image
                borderRadius="lg"
                src='/static/7.png'
                alt="some good alt text"
                objectFit="contain"
                width={'30rem'}
                height={'20rem'}
                overflow="hidden"
                style={{borderRadius: '0.8rem'}}
              /> 
                    <Box w="100%">
                    <Box  borderRadius="lg" 
                    overflow="hidden"
                    rounded='90px'
                    width="15rem"
                    >
                        
                    </Box>
                    </Box>
            </Box>

            <Box
                position={'relative'}
                rounded={'2xl'}
                borderWidth='0.2rem'
                borderColor='gray.200'
                overflow={''}
                _hover={{boxShadow: 'lg'}}
            >
                <Image
                borderRadius="lg"
                src='/static/5.png'
                alt="some good alt text"
                objectFit="contain"
                width={'30rem'}
                height={'20rem'}
                overflow="hidden"
                style={{borderRadius: '0.8rem'}}
              /> 
                    <Box w="100%">
                    <Box  borderRadius="lg" 
                    overflow="hidden"
                    rounded='90px'
                    width="15rem"
                    >
                        
                    </Box>
                    </Box>
            </Box>

            <Box
                position={'relative'}
                rounded={'2xl'}
                borderWidth='0.2rem'
                borderColor='gray.200'
                overflow={''}
                _hover={{boxShadow: 'lg'}}
            >
                <Image
                borderRadius="lg"
                src='/static/4.png'
                alt="some good alt text"
                objectFit="contain"
                width={'30rem'}
                height={'20rem'}
                overflow="hidden"
                style={{borderRadius: '0.8rem'}}
              /> 
                    <Box w="100%">
                    <Box  borderRadius="lg" 
                    overflow="hidden"
                    rounded='90px'
                    width="15rem"
                    >
                        
                    </Box>
                    </Box>
            </Box>

            

            <Box
                position={'relative'}
                rounded={'2xl'}
                borderWidth='0.2rem'
                borderColor='gray.200'
                overflow={''}
                _hover={{boxShadow: 'lg'}}
            >
                <Image
                borderRadius="lg"
                src='/static/3.png'
                alt="some good alt text"
                objectFit="contain"
                width={'30rem'}
                height={'20rem'}
                overflow="hidden"
                style={{borderRadius: '0.8rem'}}
              /> 
                    <Box w="100%">
                    <Box  borderRadius="lg" 
                    overflow="hidden"
                    rounded='90px'
                    width="15rem"
                    >
                        
                    </Box>
                    </Box>
            </Box>
            </HStack>
            

            
        
      </HStack>
    </>
  )
}

export default Projects