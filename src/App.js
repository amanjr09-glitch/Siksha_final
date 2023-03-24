import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Explorescholarship from './components/Explore Scholarship/Explorescholarship'
import Header from './components/Header/Header'
import SliderPop from './components/Popular Courses/SliderPop'
import SliderWeb from './components/Slider Webinar/SliderWeb'
import Slider from './components/Slider/Slider'
import Slider2 from './components/Slider2/Slider2'
import SliderTop from './components/Top colleges/SliderTop'
import TopExams from './components/Top Exams/TopExams'
import Video from './components/Video/Video'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Slider />
        <SliderTop />
        <SliderWeb />
        <SliderPop/>
        <Video />
        <Explorescholarship />
        <Slider2 />
        <TopExams />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
