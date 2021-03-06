import React from 'react'
import Helmet from 'react-helmet'
import {
  LayoutContainer,
  HeaderContainer,
  Section,
  TitleHeading,
  LinksList,
  Anchor,
  Content,
  SectionHeading,
  SubHead,
  MetaInfo,
  CoursesList,
  BulletedList,
  List
} from './_styled'
import 'typeface-source-sans-pro'

const CvPage = () => (
    <LayoutContainer>
        <Helmet
          title='Aibol Kussain | CV'
          meta={[
            { name: 'description', content: 'Aibol Kussain. Software Engineer, FrontEnd developer. Resume' },
            { name: 'keywords', content: 'cv, resume, frontend, software engineer' },
          ]}
        />
        <HeaderContainer>
          <TitleHeading>Aibol Kussain</TitleHeading>
          <LinksList>
            <li>
              <Anchor href='mailto:kairkanuly@gmail.com'>kairkanuly@gmail.com</Anchor>
            </li>
            <li>
              <Anchor href='https://aibolik.github.io'>aibolik.github.io</Anchor>
            </li>
          </LinksList>
        </HeaderContainer>
        <Content>
          <main>
            <Section>
              <SectionHeading>Summary</SectionHeading>
              <p>Software Engineer with strong knowledge in FrontEnd technologies backed by JavaScript frameworks as ReactJS and with a solid knowledge in NodeJS. </p>
            </Section>
            <Section>
              <SectionHeading>Work Experience</SectionHeading>
              <SubHead><Anchor href='https://epam.com'>EPAM Systems</Anchor> | September, 2017 - Present</SubHead>
              <MetaInfo>Senior Software Engineer</MetaInfo>
              <List>
                <li>
                  <strong>Internal project of EPAM Systems:</strong>
                  <br />
                  <MetaInfo>One of many internal projects of company that aims to provide better tool for researchers to organize and navigate in new findings they dicsover.</MetaInfo>
                  <br />
                  <br />
                  <List withDisc>
                    <li>Worked on delivering new product using React-Redux + NodeJS application</li>
                    <li>Led the development team of 2 key developers and provided mentoring sessions for them</li>
                    <li><em>Technologies used: ReactJS, Redux, Webpack, ESLint, Jest, Enzyme, NodeJS, PostgreSQL, Sequelize ORM, Microsoft Azure</em></li>
                  </List>
                </li>
                <li>
                  <br />
                  <strong><Anchor href='https://cbsnews.com'>CBS News division</Anchor> of CBS Interactive:</strong>
                  <br />
                  <MetaInfo><Anchor href='https://cbsnews.com'>CBS News</Anchor> is news divison of CBS Corporation with more than 1m visitors/month, aimed to provide insustry-leading content across a variety of platforms to audience around the world.</MetaInfo>
                  <br />
                  <br />
                  <List withDisc>
                    <li>Optimized build configuration of assets on cbsnews.com that decreased build time of web application and led to better DX</li>
                    <li>Delivered key features on the website those increased engagement of visitors on video assets</li>
                    <li>Actively worked on redesign and rearchitecture of front door and article pages of cbsnews.com</li>
                    <li>Took active part and was responsible for delivering new product of <Anchor href='https://store.google.com/us/product/chromecast_apps?hl=en-US'>CBS News on Chromecast</Anchor> platform</li>
                    <li>Participated on development of Tizen application of CBS News for Samsung TV</li>
                    <li><em>Technologies used: RiotJS, Gulp, Webpack, PHP Symfony, Twig, Tizen, Chromecast CAF</em></li>
                  </List>
                </li>
              </List>

              <SubHead><Anchor href='https://knowedges.org'>Knowedges</Anchor> | April, 2017 - August, 2017</SubHead>
              <MetaInfo>Frontend Developer</MetaInfo>
              <br />
              <MetaInfo><Anchor href='https://knowedges.org'>Knowedges</Anchor> is a social network that includes MOOC that gives opportunity to enhance your skills in different areas and share your experience. </MetaInfo>
              <List withDisc>
                <li>Took part in designing and implementing architecture of web application</li>
                <li>Implemented complex modules of application</li>
                <li>Automated deployment of web application to the cloud</li>
                <li><em>Technologies used: ReactJS, Redux, Webpack, ESLint, i18next, and more...</em></li>
              </List>

              <SubHead><Anchor href='https://mars.studio/'>Mars Studio</Anchor> | April, 2016 - December, 2016</SubHead>
              <MetaInfo>Android Developer</MetaInfo>
              <List withDisc>
                <li>Successfully finished 2 projects: Android application for <Anchor href='https://play.google.com/store/apps/details?id=kz.mtender.mtender'>MTender(more than 10k installs)</Anchor> and <Anchor href='http://onebutton.kz/'>OneButton</Anchor></li>
                <li>Lead team of Android developers(making reports of done work, providing estimations and status updates)</li>
                <li><em>Technologies used: Java, Android Studio, Gradle, Twilio, Realm.io, OneSignal</em></li>
              </List>
            </Section>

            <Section>
              <SectionHeading>Side projects and other activities</SectionHeading>
              <SubHead>My personal website - <Anchor href='https://aibolik.github.io'>aibolik.github.io</Anchor></SubHead>
              <List withDisc>
                <li>Implemented mockups and designs for whole website</li>
                <li>Implemented application using GatsbyJS</li>
                <li>Created content infrastructure in Contentful and integrated with the application</li>
                <li>Setup CI/CD and automated deployment to GitHub Pages</li>
                <li><em>Technologies used: GatsbyJS, ReactJS, GraphQL, Contentful SDK, Styled Components</em></li>
              </List>

              <SubHead>Widget for CRM System - <Anchor href='https://amocrm.com'>amocrm.com</Anchor></SubHead>
              <List withDisc>
                <li>Implemenented backend API using NodeJS and ExpressJS framework</li>
                <li>Integrated with Telegram API to send notifications about new deals created in CRM</li>
                <li>Designed and implemenented NoSQL database on MongoDB</li>
                <li><em>Technologies used: NodeJS, ExpressJS, MongoDB, Telegram API, amoCRM SDK</em></li>
              </List>
            </Section>
          </main>
          <aside>
            <Section>
              <SectionHeading>Education</SectionHeading>
              <SubHead>Suleyman Demirel University</SubHead>
              <MetaInfo>2013-2017 | Kazakhstan, Almaty</MetaInfo>
              <p>Bachelors in Computer Science</p>
              Selected courseworks:
              <CoursesList>
                <li>Algorithms & Programming</li>
                <li>Programming Technologies</li>
                <li>Advanced Programming in C++</li>
                <li>Mobile Technologies</li>
                <li>Database Management Systems</li>
                <li>Machine Learning</li>
              </CoursesList>
              <SubHead>ULSAN</SubHead>
              <MetaInfo>2014, 2nd fall by exchange | South Korea, Ulsan</MetaInfo>
              <p>Computer Science</p>
              Selected courseworks:
              <CoursesList>
                <li>Object-Oriented Programming</li>
                <li>Computer Organization</li>
              </CoursesList>
            </Section>
            <Section>
              <SectionHeading>Technologies used</SectionHeading>
              <MetaInfo>Technologies and tools I am familiar and comfortable with</MetaInfo>
              <BulletedList>
                <li>HTML</li>
                <li>CSS/SCSS/LESS</li>
                <li>JavaScript</li>
                <li>ReactJS</li>
                <li>Redux</li>
                <li>TDD</li>
                <li>Jest/Enzyme</li>
                <li>NodeJS</li>
                <li>ExpressJS/KoaJS</li>
                <li>GraphQL</li>
                <li>Docker</li>
                <li>Git</li>
                <li>JIRA</li>
                <li>Tizen</li>
                <li>Webpack</li>
                <li>Chromecast</li>
              </BulletedList>
            </Section>

            <Section>
              <SectionHeading>Areas of interest</SectionHeading>
              <MetaInfo>Areas those are interesting to me in IT sphere</MetaInfo>
              <List>
                <li>Web Technologies</li>
                <li>Open Source Software</li>
                <li>Mobile Technologies</li>
                <li>Mentoring in IT</li>
              </List>
            </Section>

            <Section>
              <SectionHeading>Links</SectionHeading>
              <MetaInfo>Some useful links where you can see my activity</MetaInfo>
              <List>
                <li>GitHub: <Anchor href='https://github.com/aibolik'>github.com/aibolik</Anchor></li>
                <li>LinkedIn: <Anchor href='https://www.linkedin.com/in/aibolkussain/'>linkedin.com/in/aibolkussain</Anchor></li>
                <li>Twitter: <Anchor href='https://twitter.com/aiboik_'>twitter.com/aibolik_</Anchor></li>
                <li>Website/Blog: <Anchor href='https://aibolik.github.io/'>aibolik.github.io</Anchor></li>
              </List>
            </Section>
          </aside>
        </Content>
    </LayoutContainer>
)

export default CvPage
