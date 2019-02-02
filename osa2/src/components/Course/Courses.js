import React from 'react'
import Course from './Course'

const Courses = ({courses}) => {
  const elems = () => courses.map(course => <Course key={course.id} course={course} />)

  return (
    <div>
      {elems()}
    </div>
  )
}

export default Courses;