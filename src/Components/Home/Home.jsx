import React from 'react'
import './Home.css'
import MatrixBackground from '../MatrixBackground/MatrixBackground'
import Navbar from '../Navbar/Navbar'

export default function Home() {
    return (
        <div className='background'>
            <Navbar />
            <MatrixBackground />
        </div>
    )
}
