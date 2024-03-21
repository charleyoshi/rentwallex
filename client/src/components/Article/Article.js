import React from 'react'
import UseCaseContent from './UseCaseContent'
import WhoWeAreContent from './WhoWeAreContent'

export default function Article(props) {
    return (
        <div className='article'>

            <div className='articleContentWrapper'>
                {/* <ArticleSocialMediaContainer /> */}
                {props.forUseCase && <UseCaseContent />}
                {props.forWhoWeAre && <WhoWeAreContent />}
            </div>

        </div>
    )
}
