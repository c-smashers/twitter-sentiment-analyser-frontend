import React from 'react'
import ContentWrapper from '../contentWrapper/ContentWrapper'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
    const navigate = useNavigate()
    return (
        <ContentWrapper>
            <div className="container px-6 py-28 mx-auto text-center">
                <div className="max-w-2xl mx-auto">
                    <h1 className="text-3xl font-semibold text-indigo-600 lg:text-5xl">World-class sentiment analysis tool, especially for YouTube Video Comments</h1>
                    <p className="mt-6 text-gray-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero similique
                        obcaecati illum mollitia.</p>
                    <button onClick={() => { navigate("/youtube-comment-sentiment-analyser") }} className="px-10 py-4 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none">
                        Start Using for Free
                    </button>
                    <p className="mt-3 text-sm text-gray-400 ">No credit card required</p>
                </div>

                <div className="flex justify-center mt-10" onClick={() => { navigate("/youtube-comment-sentiment-analyser") }}>
                    <img className="object-cover w-full  rounded-xl lg:w-4/5" src="/images/hero.jpeg" />
                </div>
            </div>
        </ContentWrapper>
    )
}

export default Hero