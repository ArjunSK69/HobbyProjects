import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import CategoriesBar from '../../components/categoriesBar/CategoriesBar'
import Video from '../../components/video/Video'
import { useDispatch } from 'react-redux'
import { getPopularVideos } from '../../redux/actions/video.action'

function HomeScreen() {


  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getPopularVideos())
  }, [dispatch])
  return (
    <Container>
        <CategoriesBar />
        <div className='row'>
        {
            [...new Array(20)].map(() => (
            <div className='col-lg-3 col-md-4'>
                <Video />
            </div>
            ))
        }
        </div>
    </Container>
  )
}

export default HomeScreen
