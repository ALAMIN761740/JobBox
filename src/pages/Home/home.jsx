import { useEffect, useState } from "react";
import HeroSection from "./HeroSection";
import BrowseCategories from "./BrowseCategories";
import TrendingServices from "./TrendingServices";
import HowItWorks from "./HowItWorks";
import TopFreelancers from "./TopFreelancers";
import Testimonials from "./Testimonials";
import LatestBlog from "./LatestBlog";
import StatsCounters from "./StatsCounters";
import CTABanner from "./CTABanner";

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/jobs")
      .then(res => res.json())
      .then(data => {
        setJobs(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <HeroSection />
      <BrowseCategories jobs={jobs} loading={loading} />
      <TrendingServices jobs={jobs} />
      <HowItWorks />
      <TopFreelancers />
      <Testimonials />
      <LatestBlog />
      <StatsCounters />
      <CTABanner />
    </div>
  );
};

export default Home;
