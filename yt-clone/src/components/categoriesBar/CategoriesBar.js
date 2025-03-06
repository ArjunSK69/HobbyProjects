import React, { useState } from 'react'
import './_categoriesBar.scss'

const keywords = [
  'All',
  'React js',
  'Angular js',
  'React Native',
  'use of API',
  'Redux',
  'Music',
  'Algorithm Art',
  'Guitar',
  'Bemgali Songs',
  'Coding',
  'Cricket',
  'Football',
  'Real Madrid',
  'Gatsby',
  'Poor Coder',
  'Shwetabh',
]

function CategoriesBar() {

  const [activeElement, setActiveElement] = useState('All')

  const handleClick = (value) => {
    setActiveElement(value)
  }

  return (
    <div className='categoriesbar'>
      {keywords.map((value, i)=>(
        <span
          onClick={()=>handleClick(value)}
          key={i}
          className={activeElement === value ? 'active' : ''}
        >
          {value}
        </span>
      ))}
    </div>
  )
}

export default CategoriesBar
