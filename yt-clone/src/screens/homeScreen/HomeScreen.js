import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import CategoriesBar from '../../components/categoriesBar/CategoriesBar'
import Video from '../../components/video/Video'
import { useDispatch, useSelector } from 'react-redux'
import { getPopularVideos, getVideosByCategory } from '../../redux/actions/video.action'

import InfiniteScroll from 'react-infinite-scroll-component'
import SkeletonVideo from '../../components/skeleton/SkeletonVideo'

function HomeScreen() {


  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getPopularVideos())
  }, [dispatch])


  const {videos, activeCategory, loading} = useSelector(state=>state.homeVideos)

  const fetchData = ()=>{
    if(activeCategory === 'All'){
      dispatch(getPopularVideos())
    }else{
      dispatch(getVideosByCategory(activeCategory))
    }
  }


  return (
    <Container>
        <CategoriesBar />
        <div className='row'>
          <InfiniteScroll
          className='row'
          dataLength={videos.length}
          next={fetchData}
          hasMore={true}
          loader={
            <div className='spinner-border text-danger d-block mx-auto'></div>
          }>
          {!loading ? (
              videos.map((video) => (
            <div className='col-lg-3 col-md-4' key={video.id}> 
                <Video video={video} />
            </div>
            ))
          ) : (


            [...Array(20)].map(()=> (
              <div className='col-lg-3 col-md-4'>
                {' '}
                <SkeletonVideo/>
              </div>
            ))
          )
          }
          </InfiniteScroll>
        </div>
    </Container>
  )
}

export default HomeScreen
