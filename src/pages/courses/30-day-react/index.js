import React from 'react'
import Layout from '../../../components/layout'
import CourseSignUp from '../../../components/CourseSignUp'
import ReactLogo from './assets/logo.svg';
import {
  HeroContainer,
  TextContainer,
  Title,
  ImageContainer,
  Img,
  Heading,
  MainSection,
  Section,
  Text,
  FrameContainer,
  CourseSection,
  SectionContent,
  LessonTitle,
  LessonDescription,
  Remark,
} from './_styled';

const CoursePage = () => (
  <Layout includeNewsletterSignUp={false}>
    <HeroContainer>
      <ImageContainer />
      <TextContainer>
        <Title>{`<30-day-React />`}</Title>
        <Img src={ReactLogo} alt="30-day-react course" />
      </TextContainer>
    </HeroContainer>
    <MainSection>
      <Section>
        <FrameContainer>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/JKOwJUM4_RM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </FrameContainer>

        <Text>
          Insipired by "30-day-JavaScript" course by Wes Bos, I decided to create "30-day-React" course.
          You will get <strong>30 practical exercises</strong>, more than <strong>20+ different real-world projects.</strong>
          I will touch the newest features of React as <em>Hooks</em>, <em>Lazy</em>,<em>Suspense</em>, as well as <em>important </em>
          parts, like <em>Testing</em>, <em>Routing</em> and etc.
        </Text>
      </Section>
      <Section>
       <CourseSignUp />
      </Section>
      <Section>
        <Heading>Table of Contents*</Heading>
        <CourseSection>Building blocks</CourseSection>
        <SectionContent>
          <li>
            <LessonTitle>Components and Styling(CSS in JS)</LessonTitle>
            <LessonDescription>
              We will go through main building blocks of React App: Components. Also we will setup our CSS in JS and
              try `styled-components`
            </LessonDescription>
          </li>
          <li>
            <LessonTitle>Using hooks and creating your own</LessonTitle>
            <LessonDescription>
              We will explore basic hooks with the simplest implementation, then implement
              data fetching hook step-by-step(doing naive implementation then refactoring,
              showing along the way how to use useEffect/useState/useReducer)
            </LessonDescription>
          </li>
        </SectionContent>
        <CourseSection>Projects</CourseSection>
        <SectionContent>
          <li>
            <LessonTitle>Weather App</LessonTitle>
            <LessonDescription>
              I find this project suitable to practice using hooks and styling. We will build something
              similar to weather widget in Google search.
            </LessonDescription>
          </li>
          <li>
            <LessonTitle>Keyboard App</LessonTitle>
            <LessonDescription>
              Even if this lesson is not really "real-world" project, it has many interactions, so we have
              more opportunities to practice hooks.
            </LessonDescription>
          </li>
          <li>
            <LessonTitle>Playing with Audio. Taking notes from speech</LessonTitle>
            <LessonDescription>
              Here we will explore how to interact with interesting asynchronous API of browser -
              <em>SpeechRecognition</em>. We will dive into usage of `useEffect` hook.
            </LessonDescription>
          </li>
          <li>
            <LessonTitle>Debounce hook</LessonTitle>
            <LessonDescription>
              We will implement Debounce hook - `useDebounce`. Using debounce hook we will try to
              reduce number of re-renders, and I will show how to profile components in ReactDevTools.
            </LessonDescription>
          </li>
          <li>
            <LessonTitle>Simple animation with `useSpring`</LessonTitle>
            <LessonDescription>
              I will show how powerful is `react-spring` library. With the release of Hooks it became even
              easier to create different animation with `useSpring` hooks.
            </LessonDescription>
          </li>
          <li>
            <LessonTitle>CaTinder</LessonTitle>
            <LessonDescription>
              Tinder App for cats :). We will be implementing complex animation with `react-spring`, `react-use-gesture`.
              Everything is hooks.
            </LessonDescription>
          </li>
          <li>
            <LessonTitle>And more coming...</LessonTitle>
          </li>
        </SectionContent>
        <Remark><span>*</span> - course content might change. I will add and modify some lesson titles</Remark>
      </Section>
      <Section>
        <CourseSignUp />
      </Section>
    </MainSection>
  </Layout>
)

export default CoursePage
