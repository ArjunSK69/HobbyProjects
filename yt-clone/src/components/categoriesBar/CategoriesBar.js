import React, { useState } from 'react'
import './_categoriesBar.scss'
import { useDispatch } from 'react-redux'
import { getPopularVideos, getVideosByCategory } from '../../redux/actions/video.action'

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


  const dispatch = useDispatch()

  const handleClick = (value) => {
    setActiveElement(value)
    if(value === "All"){
      dispatch(getPopularVideos())
    }else{
      dispatch(getVideosByCategory(value))
    }
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
