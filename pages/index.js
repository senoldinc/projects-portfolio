import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I am a .net / full-stack developer based in Turkey! (Merhaba Dünya)
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Senol Dinc
          </Heading>
          <p>Senior Software Developer </p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            maxHeight="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/senol.jpeg"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
        My name is Şenol DİNÇ and i am a software developer since 2010 based on Turkey.
        I am allways passionate about the learning new things and currius how to work.
        </Paragraph>
        <Paragraph>
        I believe that this mindset, in combination with a strong fascination of computers and technology in general, 
        has put me on a path towards software development. 
        I thoroughly enjoy solving problems with code and I feel entitled to be able to work with what 
        I consider to be my biggest interest.
        I am driven by a will to learn and to challenge myself with the idea that there is always a better solution out there.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          PROJECTS
        </Heading>
        <BioSection>AYEN SOFTWARE Marketing Mobile and Web Application</BioSection>
        <BioSection>AYEN SOFTWARE domestic and international market place integrations.</BioSection>
        <BioSection>WİNSOFT WEB. In the software development processes of all the health processes and administrative processes of the hospital information management system project</BioSection>
        <BioSection>WİNSOFT WEB. Abroad private hospitals project</BioSection>
        <BioSection>WİNSOFT Public hospitals association project</BioSection>
        <BioSection>WİNSOFT Laboratory Information System</BioSection>
        <BioSection>MEDİPORTAL Quality management system project</BioSection>
        <BioSection>Start-up attempt projects and online Crm software</BioSection>
        <BioSection>Order, Stock, Service, Warehouse, Production Tracking Software</BioSection>
        <BioSection>Service and performance tracking software for vehicle companies</BioSection>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Work Experience
        </Heading>
        <BioSection>
          <BioYear>2010-2013</BioYear>
          Software Developer, C Shark Software
          <Paragraph>
          I was involved in all the configuring, editing and software processes of the projects taken within the company.
          </Paragraph>
        </BioSection>
        <BioSection>
          <BioYear>2013-2014</BioYear>
          Software Developer, ZDN Group IT
          <Paragraph>
          I was responsible for the management, editing and development
processes of business, smart intelligence, social media projects.
          </Paragraph>
        </BioSection>
        <BioSection>
          <BioYear>2014-2018</BioYear>
          Software Developer, Prestij Software
          <Paragraph>
            Transferring the hospital management system to the web environment.
          </Paragraph>
          <Paragraph>
            Research and development
          </Paragraph>
        </BioSection>
        <BioSection>
          <BioYear>2018 to present</BioYear>
          Software Engineer, Ayen Software
          <Paragraph>
          Providing with local and foreign market places customers price, stock,
order and delivery integration
          </Paragraph>
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
         Traveling, researching, football, basketball, discovering, swimming.
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/senoldinc" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @senoldinc
              </Button>
            </Link>
          </ListItem>
         
          <ListItem>
            <Link href="https://www.linkedin.com/in/snldnc" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoLinkedin} />}
              >
                @snldnc
              </Button>
            </Link>
          </ListItem>
        </List>

      

        <Box align="center" my={4}>
          <NextLink href="/posts">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
