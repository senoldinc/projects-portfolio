import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbRapiApi from '../public/images/works/api-scraper.png'
import thumbCorona from '../public/images/works/corona-tracker.png'
import thumbCrpyto from '../public/images/works/crpyto-news.png'
import thumbChat from '../public/images/works/react-chat.png'
import thumbExpense from '../public/images/works/expense-tracker.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="https://rapidapi.com/user/snldnc@gmail.com" title="Rapid Api" thumbnail={thumbRapiApi}>
            I am included the rapid api team. I am created freemium web api differents category.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="https://snldnc-corona-tracker-app.netlify.app/"
            title="Covid-19 Tracker"
            thumbnail={thumbCorona}
          >
            Covid 19 tracker app
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="https://snldnc-react-chat.netlify.app/"
            title="Chat Application"
            thumbnail={thumbChat} >
            Real Time Chat Application
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="https://snl-crypto-news.netlify.app/" thumbnail={thumbCrpyto} title="Crypto News">
            Crypto News and Price Market App
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="https://snl-expensive-tracker.netlify.app/" thumbnail={thumbExpense} title="Expensive Tracker">
            Expensive Tracker App
          </WorkGridItem>
        </Section>

        <Divider />

      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
