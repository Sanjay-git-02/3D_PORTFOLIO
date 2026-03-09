import React from 'react'
import TitleHeader from "../components/TitileHeader.jsx";
import {testimonials} from "../constants/index.js";
import GlowCard from "../components/GlowCard.jsx";

const Testimonials = () => {
    return (
        <section id="testimonials" className="section-padding flex-center">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader
                    title="What People Say About Me"
                    sub="⭐ Customer Feedback Highlights"
                />
                <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
                    {testimonials.map((testimonial, index) => (
                        <GlowCard card={testimonial} key={index}>
                            <div>
                                <img src={testimonial.imgPath} alt={testimonial.name} />
                            </div>
                            <div>
                                <p className="font-bold">{testimonial.name}</p>
                                <p className="text-white-50">{testimonial.mentions}</p>
                            </div>
                        </GlowCard>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Testimonials
