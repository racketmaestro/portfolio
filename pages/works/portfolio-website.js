import {
  Container,
  Badge,
  Link,
  Spacer,
  Flex,
  List,
  ListItem,
  ListIcon,
  Image
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraphs'
import Layout from '../../components/layouts/article'
export { getServerSideProps } from '../../components/chakra'
import { Stack } from '@chakra-ui/react'
import {SiAccenture} from "react-icons/si"
import { SlideFade } from '@chakra-ui/react'

const Project = () => (
  <Layout>
    <Container>
      <Title>
        Portfolio Website <Badge>2022</Badge>
      </Title>
      <WorkImage src="/images/works/portfolio-website.jpg" alt="lego" />
      <P>
        <br />
        <br />
        Building my personal portfolio website was a project that I am proud of undertaking.
        I wanted to showcase my experience, education, and projects in a way that would be interactive and visually appealing. 
        The process allowed me to develop my Frontend skills, as I worked with technologies such as React, ThreeJS, and JavaScript.
         <br />
        <br />
        I faced challenges along the way, but I embraced them as opportunities for learning and growth. 
        The result is a functional and user-friendly website that I am proud of and that demonstrates my abilities as a developer.
        <br />
        <br />
        
        This website was built with: 
        <br /><br />
        <List spacing={2}>
          <ListItem>
            <ListIcon as = {SiAccenture} color="green.500" />
            NextJS
          </ListItem>
          <ListItem>
            <ListIcon as = {SiAccenture} color="green.500" />
            Chakra UI
          </ListItem>
          <ListItem>
            <ListIcon as = {SiAccenture} color="green.500" />
            Material UI
          </ListItem>
          <ListItem>
            <ListIcon as = {SiAccenture} color="green.500" />
            ThreeJS
          </ListItem>          
        </List>
      </P>
      <br />
      <Flex>
        <Meta>Source Code</Meta>
        <Spacer />
        <Link target="_blank" href="https://github.com/racketmaestro/Portfolio">
          Github Repository
        </Link>
        <ExternalLinkIcon></ExternalLinkIcon>
      </Flex>
      <Flex pt={5}>
        <Meta>Deployment Platform</Meta>
        <Spacer />
        <Image src="/icons/vercel-icon.png" title="Vercel" boxSize="48px" borderRadius="full" />
      </Flex>
      <Flex pt={5}>
        <Meta>Stack</Meta>
        <Spacer />
        <Stack direction="row" spacing={2}>
          <Image src="/icons/threejs-icon.png" title="Threejs" boxSize="48px" borderRadius="full" />
          <Image src="/icons/react-icon-2.png" title="React" boxSize="48px" borderRadius="full"/>
          <Image src="/icons/linux-icon.png" title="Linux" boxSize="48px" borderRadius="full"/>
          <Image src="/icons/javascript-icon.png" title="JavaScript" boxSize="48px" borderRadius="full"/>
        </Stack>
      </Flex>
      <br />
    </Container>
  </Layout>
)

export default Project
