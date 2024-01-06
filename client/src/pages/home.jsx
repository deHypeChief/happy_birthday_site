export function Home() {
    return (
        <>
            <HomeContent />
        </>
    )
}


import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
function HomeContent() {
    const [data, setData] = useState([])
    const [loading, setload] = useState(true)
    useEffect(()=>{
        axios.get('https://hbs-api.vercel.app/api/').
            then((res)=>{
                setData(res.data.data)
                setload(false)
            }).
            catch(()=>{
                console.log('Error getting data');
            })
    }, [])
    console.log(data);

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
                                <Link to='/newPost'>
                                    <button>Write A Message</button>
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
                    <div className="bttnWrap">
                                <Link to='https://happy-birthday-site.vercel.app/'>
                                    <button>View Old Messages</button>
                                </Link>
                            </div>
                </div>
                <div className="imgText"></div>
            </section>



            {/* Message Section */}
            <section className="boxWrap">
                <div className="textT">
                    <h1>Goodwill Messages</h1>

                </div>
                <div className="boxPosts"> 
                    <div className="boxWrap">
                        
                        {loading ? <p>Loading Messages...</p> : <></>}
                        {
                            data.map((elememt, index) => {
                                return(
                                    <div className="boxesPosts" key={'card '+ index}>
                                        <div className="imgBox">
                                            <img src={elememt.img} alt="" />
                                        </div>
                                        <h3>{elememt.name}</h3>
                                        <p>{elememt.message}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                            
                </div>
            </section>
            <div className="footer">
                <p>By FirstClassPilot</p>
            </div>
        </>
    )
}

