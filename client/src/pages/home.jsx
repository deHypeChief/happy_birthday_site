import { useEffect, useState } from "react"

const ApiUrl = 'https://hbs-api.vercel.app/api'

export function Home() {
    const [isDone, setDone] = useState(true)


    return (
        <>
            <main>
               
            <>

                <HomeContent />
                <Footer />

            </>
            </main>

        </>
    )
}


import { Link } from 'react-router-dom'
// export function Navbar() {
//     return (
//         <nav>
//             <div className="navWrap">
//                 <div className="logo">
//                     <Link to={'/'}>
//                         <h3>LOGO</h3>
//                     </Link>
//                 </div>
//                 <div className="other">
//                     <Link to={'/newPost'}>
//                         <button>
//                             Post A Message
//                         </button>
//                     </Link>
//                 </div>
//             </div>
//         </nav>
//     )
// }


const URI = 'http://localhost:8000/api'
function HomeContent() {
    const [apiData, setApiData] = useState([]);

    // Effect to fetch data from the API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(URI);
                const data = await response.json();
                setApiData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);




    return (
        <>
            <section className="hero">
                

                <div className="HeroTextWrap">
                    <h1>
                        Pst(Mrs) Mary Abiodun Abioye
                    </h1>
                    <div className="bttnWrap">
                        <Link to="https://drive.google.com/file/d/1f4E1U-OuWmUocFg9OuaoMpw1p_c_kwIX/view?usp=sharing">
                            <button>
                                Download Event
                            </button>
                        </Link>
                        <Link to={'/newPost'}>
                        <button>
                            Post A Message
                        </button>
                    </Link>
                    </div>
                </div>

            </section>
            

            <section className="popText">
            <div className="imgLady">
                <img src="../assets/abstract-triangle-violet-texture-background.jpg" alt="" />
            </div>
                <div className="popWrap">
                    <h2>
                        with warm regards from the our fammily
                        we thank you and your family for celebreting
                        the 60th Birthday of a great woman. Thanks for
                        coming
                    </h2>
                    <p>-The Celebrant</p>
                </div>
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
        </>
    )
}





function Footer() {
    return (
        <>
            <footer>
                <div className="footerbottom">
                    <div className="socials">
                        <div className="socialBox"></div>
                        <div className="socialBox"></div>
                        <div className="socialBox"></div>
                    </div>
                    <div className="contact">
                        <p>Contacts</p>
                        <p>+234 567 8903 2345</p>
                    </div>
                    <div className="footerDel">
                        <p>Developed by deHypeChief</p>
                        <p>Happy Birthday Ma</p>
                    </div>
                </div>
            </footer>
        </>
    )
}