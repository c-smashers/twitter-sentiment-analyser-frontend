import React, { useState } from 'react'
import ContentWrapper from '../../components/contentWrapper/ContentWrapper'
import axios from 'axios'

const TextSentimentAnalyser = () => {
    const [value, setvalue] = useState('')
    const [isresultAvailable, setisresultAvailable] = useState('no')
    const [sentiments, setsentiments] = useState([])


    const handleChange = (event) => {
        setvalue(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        setisresultAvailable('loading')
        axios.get(import.meta.env.VITE_API_URL + `/api/get_text_sentiments/${value}`).then((res) => {
            setsentiments(res.data.result)
            setisresultAvailable('yes')
        }).catch((e) => {
            setisresultAvailable('failed')
        })
    }


    return (
        <ContentWrapper>
            <h3 className="mb-4 my-8 text-4xl font-extrabold leading-none tracking-tight text-violet-900 md:text-4xl lg:text-5xl ">Enter Your Text Here..</h3>
            <div className="min-h-[400px] min-w-full my-10">
                <div className="flex flex-col md:block ">
                    <textarea rows="5" cols="60" name="text" placeholder="Enter text" id="text-input" onChange={handleChange} value={value} className="md:w-6/12 w-[350px] border-2 rounded border-solid border-violet-500 mx-5 my-5 py-5 px-5" ></textarea>
                    <button className="bg-violet-500 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded w-[150px] m-5" onClick={handleSubmit}>Submit</button>
                </div>
                <p>Your Result will appear here!</p>
                {isresultAvailable === 'loading' && <div className="min-h-[400px] min-w-full flex flex-col justify-center items-center"><div className="loader"></div><span className="text-violet-600 py-10">loading...</span></div>}
                {isresultAvailable === 'yes' && <div className="p-10 m-5 text-6xl text-violet-600">{`${sentiments}`}</div>}
            </div>
        </ContentWrapper>
    )
}

export default TextSentimentAnalyser