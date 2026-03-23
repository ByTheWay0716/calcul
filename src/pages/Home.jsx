import React from 'react';
import HeroSection from '../components/HeroSection';
import CategoryQuickJump from '../components/CategoryQuickJump';
import TopPicks from '../components/TopPicks';
import SearchBar from '../components/SearchBar';
import GameGrid from '../components/GameGrid';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="home">
            <HeroSection />
            <CategoryQuickJump />
            <SearchBar />
            <TopPicks />
            <GameGrid />
            <Footer />
        </div>
    );
};

export default Home;
