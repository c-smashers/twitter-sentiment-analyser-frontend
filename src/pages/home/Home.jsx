import React from 'react'
import Hero from '../../components/hero/Hero'
import Team from '../../components/team/Team'
import TextSentimentAnalyser from '../textSentiment/TextSentimentAnalyser'

const Home = () => {
    return (
        <main>
            <Hero />
            <TextSentimentAnalyser />
            <Team />
        </main>
    )
}

export default Home