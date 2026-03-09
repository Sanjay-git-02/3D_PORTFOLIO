import React from 'react'

const TitleHeader = ({title,sub}) => {
    return (
        <div className="flex flex-col items-center justify-center gap-5 ">
            <div className="hero-badge">
                {sub}
            </div>
            <div className="font-semibold md:text-5xl text-3xl">
                {title}
            </div>
        </div>
    )
}
export default TitleHeader
