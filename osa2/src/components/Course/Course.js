import React from 'react'
import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = ({course}) => (
  <div>
    <Header course_name={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </div>
)

export default Course;