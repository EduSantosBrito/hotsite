import React from 'react';
import Footer from '../../Components/Footer';
import Hero from '../../Components/Hero';
import Navbar from '../../Components/Navbar';
import { BackgroundContainer, ContentContainer } from '../../Shared/styled';

function Homepage() {
    return (
        <BackgroundContainer width='100%' height='100%'>
            <ContentContainer width='100%' columns='1fr' rows='64px auto 80px' height='100%'>
                <Navbar />
                <Hero />
                <Footer />
            </ContentContainer>
        </BackgroundContainer>
    );
}

export default Homepage;
