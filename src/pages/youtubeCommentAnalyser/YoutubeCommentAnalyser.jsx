import React, { useState } from 'react'
import axios from 'axios'
import ContentWrapper from '../../components/contentwrapper/ContentWrapper'
import './style.scss'
import BarChart from '../../components/charts/BarChart'
import PieChart from '../../components/charts/PieChart'
import LineChart from '../../components/charts/LineChart'

const YoutubeCommentAnalyser = () => {
    const [isresultAvailable, setisresultAvailable] = useState('no')
    const [value, setvalue] = useState('')
    const [sentiments, setsentiments] = useState([])
    const [sentiValues, setsentiValues] = useState([])
    const [vDetails, setvDetails] = useState({})

    const handleChange = (event) => {
        setvalue(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        setisresultAvailable('loading')
        axios.post(import.meta.env.VITE_API_URL + '/api/get_youtube_sentiments/', { value: value }).then((res) => {
            console.log(res.data.values)
            setsentiments(res.data.result)
            setsentiValues(res.data.values)
            setvDetails(res.data.vDetails)
            setisresultAvailable('yes')
        }).catch((e) => {
            setisresultAvailable('failed')
        })
    }

    function download(selector) {
        let canvas1 = document.querySelector(selector);
        let url = canvas1.toDataURL("image/png");
        let link = document.createElement('a');
        link.download = 'filename.png';
        link.href = url;
        link.click();
    }

    return (
        <ContentWrapper>
            <h3 className="mb-4 my-8 text-4xl font-extrabold leading-none tracking-tight text-violet-900 md:text-4xl lg:text-5xl ">You<span className="text-red-500">Tube</span> Comment <span className="text-violet-500">Sentiment</span> Analyser</h3>
            <div className="min-h-[600px] min-w-full my-10">
                <div className="flex flex-col md:block ">
                    <input type="text" id="youtube-input" name="youtube-input" onChange={handleChange} value={value} className="md:w-6/12 w-[350px] lg:h-8 border-2 rounded border-solid border-violet-500 mx-5 my-5 py-5 px-5" />
                    <button className="bg-violet-500 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded w-[150px] m-5" onClick={handleSubmit}>Submit</button>
                </div>
                <p>Your Result will appear here!</p>
                {isresultAvailable === 'loading' && <div className="min-h-[400px] min-w-full flex flex-col justify-center items-center"><div className="loader"></div><span className="text-violet-600 py-10">loading...</span></div>}
                {isresultAvailable === 'yes' && <>
                    <div className="lg:w-[800px] md:w-[300px] min-h-[400px] flex flex-col lg:flex-row justify-center m-auto items-center py-10">
                        <div className="h-[300px] w-[300px] md:w-[450px]">
                            <h5 className="text-3xl">{`${vDetails.title}`}</h5>
                            <p className="text-lg">{`By channel : ${vDetails.channel}`}</p>
                            <p className="text-base">{`Total Comments: ${vDetails.commentcount}`}</p>
                        </div>
                        <div className="h-[220px] p-5"><img src={vDetails.thumbnail} /></div>
                    </div>
                    <div id="barChart" className="lg:w-[800px] md:w-[600px] min-h-[400px] flex flex-col justify-center m-auto items-center">
                        <BarChart data={sentiments} />
                        <button className="w-[150px] h-[50px] m-5 p-2 rounded bg-green-400 text-slate-50 hover:bg-white hover:border-2 hover:text-green-400 hover:border-solid hover:border-solid hover:border-green-400" onClick={() => { download("#barChart > canvas:nth-child(1)") }}>Download</button>
                        <span className="lg:w-[500px] lg:h-[500px] sm:w-[300px] sm:h-[300px] flex my-5"><PieChart id="pieChart" data={sentiments} /></span>
                        <button className="w-[150px] h-[50px] m-5 p-2 rounded hover:bg-white hover:border-2 text-slate-50 bg-green-400 hover:text-green-400 hover:border-solid hover:border-solid hover:border-green-400" onClick={() => { download("#barChart > span > canvas") }}>Download</button>
                        <LineChart data={sentiValues} />
                        <button className="w-[150px] h-[50px] m-5 p-2 rounded bg-green-400 text-slate-50 hover:bg-white hover:border-2 hover:text-green-400 hover:border-solid hover:border-solid hover:border-green-400" onClick={() => { download("#barChart > canvas:nth-child(5)") }}>Download</button>
                    </div></>
                }
                {isresultAvailable === 'failed' && <div className="text-3xl text-red-400">Try again , There is some error in your URL!!!</div>}
            </div>

        </ContentWrapper>
    )
}

export default YoutubeCommentAnalyser