import React from 'react'
import memesData from '../memesData'


export default function Meme() {

function getMemeImage() {
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url
    console.log(url)
}
    return (
        <main>
            <div className='meme'>
                <input type="text" className='form--input' placeholder="Top Text" ></input>
                <input type="text" className='form--input' placeholder="Bottom Text" ></input>
                <button className='form--button' onClick={getMemeImage}>Get a new meme image 🖼</button>
                <img src=""></img>
            </div>    
        </main>
    )
}