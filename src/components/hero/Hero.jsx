import React from 'react'
import ContentWrapper from '../contentWrapper/ContentWrapper'

const Hero = () => {
    return (
        <ContentWrapper>
            <div className="container px-6 py-28 mx-auto text-center">
                <div className="max-w-2xl mx-auto">
                    <h1 className="text-3xl font-semibold text-indigo-600 lg:text-5xl">World-class sentiment analysis tool, especially for YouTube Video Comments</h1>
                    <p className="mt-6 text-gray-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero similique
                        obcaecati illum mollitia.</p>
                    <button className="px-10 py-4 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none">
                        Start Using for Free
                    </button>
                    <p className="mt-3 text-sm text-gray-400 ">No credit card required</p>
                </div>

                <div className="flex justify-center mt-10">
                    <img className="object-cover w-full h-96 rounded-xl lg:w-4/5" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" />
                </div>
            </div>
        </ContentWrapper>
    )
}

export default Hero