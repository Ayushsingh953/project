
import Blogs from './Blogs';
import Dashbody from './Dashbody';
import Footer from './Footer';
import HeroSection from './HeroSection';
import Services from './Services';
import Share from './Share';



export default function LandingPage() {
  return (
      <div>
        <Dashbody/>
        <Share/>
        <HeroSection/>
        <Services/>
        <Blogs/>
        <Footer/>
      </div>
  );
}

