import React, { useState } from 'react'
import axios from 'axios'
import ContentWrapper from '../../components/contentwrapper/ContentWrapper'
import './style.scss'
import BarChart from '../../components/charts/BarChart'
import PieChart from '../../components/charts/PieChart'

const YoutubeCommentAnalyser = () => {
    const [isresultAvailable, setisresultAvailable] = useState('no')
    const [value, setvalue] = useState('')
    const [sentiments, setsentiments] = useState([])

    const handleChange = (event) => {
        setvalue(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        setisresultAvailable('loading')
        axios.post(import.meta.env.VITE_API_URL + '/api/get_youtube_sentiments/', { value: value }).then((res) => {
            console.log(res.data.result)
            setsentiments(res.data.result)
            setisresultAvailable('yes')
        })
    }

    return (
        <ContentWrapper>
            <h3 className="mb-4 my-8 text-4xl font-extrabold leading-none tracking-tight text-violet-900 md:text-4xl lg:text-5xl ">You<span className="text-red-500">Tube</span> Comment <span className="text-violet-500">Sentiment</span> Analyser</h3>
            <div className="min-h-[600px] min-w-full">
                <div>
                    <input type="text" id="youtube-input" name="youtube-input" onChange={handleChange} value={value} className="w-6/12 h-8 border-2 rounded border-solid border-violet-500 mx-5 my-5 py-5 px-5" />
                    <button className="bg-violet-500 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded" onClick={handleSubmit}>Submit</button>
                </div>
                <p>Your Result will appear here!</p>
                {isresultAvailable === 'loading' && <div className="min-h-[400px] min-w-full flex flex-col justify-center items-center"><div className="loader"></div><span className="text-violet-600 py-10">loading...</span></div>}
                {isresultAvailable === 'yes' && <div className="lg:w-[800px] md:w-[600px] min-h-[400px] flex flex-col justify-center m-auto items-center"><BarChart data={sentiments} /><span className="w-[500px] h-[500px] flex my-5"><PieChart data={sentiments} /></span></div>}
            </div>

        </ContentWrapper>
    )
}

export default YoutubeCommentAnalyser