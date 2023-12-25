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
const URI = 'http://localhost:8000/api'

function HomeContent() {
    const [apiData, setApiData] = useState([]);

    // Effect to fetch data from the API
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch(URI);
    //             const data = await response.json();
    //             setApiData(data);
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };

    //     fetchData();
    // }, []);




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
                                    <button>Write Goodwill</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="underText">
                <div className="underTextWrap">
                    <p className="varText">
                        <p>Celebration Of </p>
                        <h3 className="biggerText">
                        God's</h3> 
                        <p>Lovingkindnesses</p>
                    </p>
                    <p className="varSub">-Isaiah 63:7</p>
                </div>
                <div className="imgText"></div>
            </section>



            {/* Message Section */}
            {/* <section className="boxWrap">
                <div className="boxPosts">
                    {apiData.posts?.map(item => (
                        <div key={item.name} className="boxesPosts">
                            <div className="imgBox">
                                <img src={`data:${item.img.contentType}; base64, 
                                ${item.img.data.toString('base64')}`} alt="hello" />
                            </div>
                            <h1>{item.name}</h1>
                            <p>{item.message}</p>
                        </div>
                    ))}
                </div>
            </section> */}
            <div className="footer">
                <p>By FirstClassPilot</p>
            </div>
        </>
    )
}

