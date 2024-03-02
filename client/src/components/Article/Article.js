import React from 'react'
import ArticleTitle from './ArticleTitle'
import ArticleContent from './ArticleContent'
import ArticleSocialMediaContainer from './ArticleSocialMediaContainer'

export default function Article() {
    return (
        <div className='article'>

            <ArticleTitle title="Who we are" />
            <div className='articleContentWrapper'>
                {/* <ArticleSocialMediaContainer /> */}

                <ArticleContent />
            </div>

        </div>
    )
}
