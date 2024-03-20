import React from 'react'
import Navbar from '../components/Navbar'
import Article from '../components/Article/Article'

export default function UseCase() {
    return (
        <div className='usecase'>
            {/* todo: change Navbar content if needed */}
            <Navbar />
            <Article forUseCase={true} title="Rentwallex use case"/>




        </div>
    )
}
