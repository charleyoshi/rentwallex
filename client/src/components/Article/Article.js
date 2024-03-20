import React from 'react'
import ArticleContent from './ArticleContent'
import UseCaseContent from './UseCaseContent'

export default function Article(props) {
    return (
        <div className='article'>

            <div className='articleContentWrapper'>
                {/* <ArticleSocialMediaContainer /> */}
                {props.forUseCase ?
                    <UseCaseContent /> :
                    <ArticleContent />
                }
            </div>

        </div>
    )
}
