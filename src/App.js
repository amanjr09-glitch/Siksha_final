import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Navbar from './components/Navbar'
import TopUniveristy from './components/TopUniversity'
import ExploreScholarship from './components/ExploreScholarship'
import SliderWebinar from './components/SliderWebinar'
// import SliderPop from './components/Popular Courses/SliderPop'
import Slider from './components/Slider/Slider'
import Slider2 from './components/Slider2/Slider2'
import SliderTop from './components/Top colleges/SliderTop'
import RateBanner from './components/RateBanner'
import TopExams from './components/Top Exams/TopExams'
import PopularCourses from './components/PopularCourses'
import TopStudyPlaces from './components/TopStudyPlaces'
import CollegeRanking from './components/CollegeRanking'
import Video from './components/Video/Video'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        {/* <Navbar /> */}
        <TopUniveristy />
        {/* <SliderTop /> */}

        <SliderWebinar />
        {/* <SliderPop/> */}
        {/* <Video /> */}
        <CollegeRanking />
        <ExploreScholarship />
        <PopularCourses />
        <TopStudyPlaces />
        <RateBanner />
        {/* <Slider2 /> */}
        <TopExams />
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
