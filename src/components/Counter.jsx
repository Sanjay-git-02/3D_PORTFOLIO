import React from 'react'
import {counterItems} from "../constants/index.js";
import CountUp from "react-countup";

const Counter = () => {
    return (
        <div id="counter" className="padding-x-lg lg:mt-0 mt-32 ">
            <div className="mx-auto grid-4-cols">
                {counterItems.map((item, index) => (
                    <div key={index} className="bg-zinc-900 p-10 rounded-lg flex flex-col justify-center">
                        <div className="counter-number text-white font-bold text-5xl mb-2">
                            <CountUp duration={2} suffix={item.suffix} end={item.value} />
                        </div>
                        <div className="text-white-50 text-lg">{item.label}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Counter
