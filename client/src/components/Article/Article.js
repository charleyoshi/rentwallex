import React from 'react'

import ArticleTitle from './ArticleTitle'
import ArticleContent from './ArticleContent'
import UseCaseContent from './UseCaseContent'
import ArticleSocialMediaContainer from './ArticleSocialMediaContainer'


export default function Article(props) {
    return (
        <div className='article'>

            <ArticleTitle title={props.title} />

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
