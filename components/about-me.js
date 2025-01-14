import { Heading, VStack, Text, Flex, Box, Link, Wrap } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

export default function AboutMe() {
  return (
      <Wrap spacing={['100px', '200px']} justify={'center'} align="center" pt ={10}>
        <VStack spacing={4} justifyContent="center" alignItems="flex-start">
          <Heading color={'displayColor'}>About Me</Heading>
          <Text fontSize="lg" color="textSecondary">
            Hi! I'm{' '}
            <Link fontSize="display3" color="#77B4D4">
              Amos
            </Link>{' '}
            . I was born and raised in Singapore, and am currently studying in
            London, United Kingdom. Before university, I completed my A Levels in
            Raffles Institution, Singapore, and served in the Singapore Armed
            Forces as a Reconnaissance commander in 16C4I Battalion. 
            <br />
            <br /> As a Bioengineering student, I have picked up skills in
            various engineering disciplines, including but not limited to
            mechanics, electronics, software, design engineering and medical
            science. <br />
            <br /> I proactively develop my software skills and aspire to
            augment my engineering projects with smart software.<br />
            <br />
          </Text>
        </VStack>
      </Wrap>
  )
}
