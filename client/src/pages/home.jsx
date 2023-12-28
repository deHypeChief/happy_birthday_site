import axios from "axios"
import { useEffect, useState } from "react"

const ApiUrl = 'https://hbs-api.vercel.app/api'

export function Home() {


    return (
        <>
            <HomeContent />
        </>
    )
}


import { Link } from 'react-router-dom'
import data_a from './hbs_posts.posts.json'

function HomeContent() {
    return (
        <>
            <section className="hero">
                <div className="InfoSection">
                    <h3>
                        Happy <br /> Birthday
                    </h3>

                    <div className="heroOther">
                        <div className="imgSection"></div>

                        <div className="bottomText">
                            <h1>
                                Pst(Mrs) <br /> Mary Abiodum
                                <br /> Abioye
                            </h1>

                            <div className="bttnWrap">
                                <Link to='https://drive.google.com/file/d/1f4E1U-OuWmUocFg9OuaoMpw1p_c_kwIX/view?usp=sharing'>
                                    <button>Download Event</button>
                                </Link>
                                <Link to='https://happy-birthday-site.vercel.app/'>
                                    <button>See Messages</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="underText">
                <div className="underTextWrap">
                    <div className="varText">
                        <p>Celebration Of </p>
                        <h3 className="biggerText">
                            God's</h3>
                        <p>Lovingkindnesses</p>
                    </div>
                    <p className="varSub">-Isaiah 63:7</p>
                </div>
                <div className="imgText"></div>
            </section>



            {/* Message Section */}
            <section className="boxWrap">
                <div className="textT">
                    <h1>Goodwill Messages</h1>

                </div>
                <div className="boxPosts">
                            
                </div>
            </section>
            <div className="footer">
                <p>By FirstClassPilot</p>
            </div>
        </>
    )
}

