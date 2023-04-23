import React, { useState } from 'react'
import ContentWrapper from '../../components/contentwrapper/ContentWrapper'

const YoutubeCommentAnalyser = () => {
    const [isresultAvailable, setisresultAvailable] = useState(false)
    return (
        <ContentWrapper>
            <h3>YouTube Comment Sentiment Analyser</h3>
            <div className="min-h-[600px]">
                <div>
                    <input type="text" className="w-6/12 h-8 border-2 border-solid border-violet-500 mx-5 my-5 py-5 px-5" />
                    <button onClick={() => { setisresultAvailable(true) }}>Submit</button>
                </div>
                <p>Your Result will appear here!</p>
                {isresultAvailable && <div>Sentiment</div>}
            </div>

        </ContentWrapper>
    )
}

export default YoutubeCommentAnalyser