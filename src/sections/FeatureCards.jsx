import React from 'react'
import {abilities} from "../constants/index.js";

const FeatureCards = () => {
    return (
        <div className="padding-x-lg w-full">
            <div className="mx-auto grid-3-cols">
                {abilities.map(({imgPath,title,desc},index)=>(
                    <div key={index} className="card-border p-8 rounded-xl flex flex-col gap-4">
                        <div className="size-14 flex justify-center items-center rounded-full">
                            <img src={imgPath} alt={title}/>
                        </div>
                            <h2 className="text-white font-semibold mt-2 text-2xl">{title}</h2>
                            <p className="text-white-50 text-lg">{desc}</p>

                    </div>
                ))}
            </div>
        </div>
    )
}
export default FeatureCards
