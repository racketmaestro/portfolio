import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const WorkGridItem = ({ children, id, title, readingTime }) => (
  <Box w="100%" textAlign='left' p={5} borderWidth={1} borderRadius="md" borderColor="gray.200">
    <NextLink href={`/works/${id}`} passHref scroll={false}>
      <LinkBox cursor="pointer">
        <LinkOverlay href={`/works/${id}`}>
          <Text fontSize={20} fontWeight="bold">
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
        <Text fontSize={12} color="gray.500" mt={2}>{readingTime} min</Text>
      </LinkBox>
    </NextLink>
  </Box>
)




export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
)
