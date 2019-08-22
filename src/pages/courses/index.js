import React from 'react'
import Hero from '../../components/Hero'
import HeroImage from '../../assets/hero.png'
import Layout from '../../components/layout'
import { Link, Content, CourseTitle } from './_styled';

const Courses = () => (
  <Layout>
    <section>
      <Hero
        heroImage={HeroImage}
        title={'Courses'}
        excerpt={'I am working on my first online course, so decided it would be good to have this catalogue for other courses in future'}
      />
      <Content>
        <Link to="courses/30-day-react">
          <article>
            <CourseTitle>30-day-React</CourseTitle>
            <p>
              Inspired by "30-day-JavaScript" made by Wes Bos, I decided to create a course "30-day-React", that consists of 30 practical React
              exercises and more than 20 projects. Starting from building blocks and ending with brand-new features in newest react versions, you
              will be able practice them building real-world-alike components of real apps
            </p>
          </article>
        </Link>
      </Content>
    </section>
  </Layout>
)

export default Courses
