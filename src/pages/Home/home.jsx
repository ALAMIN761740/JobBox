import React from 'react';
import HeroSection from './HeroSection';
import BrowseCategories from './BrowseCategories';
import TrendingServices from './TrendingServices';
import HowItWorks from './HowItWorks';
import TopFreelancers from './TopFreelancers';
import Testimonials from './Testimonials';
import LatestBlog from './LatestBlog';
import StatsCounters from './StatsCounters';
import CTABanner from './CTABanner';


const home = () => {
    return (
        <div>
            <HeroSection />
            <BrowseCategories />
            <TrendingServices />
            
            
        </div>
    );
};

export default home;