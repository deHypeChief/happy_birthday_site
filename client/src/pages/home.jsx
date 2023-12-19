import { AiOutlineArrowRight } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import { useEffect, useState } from "react"

export function Home() {
    const [isDone, setDone] = useState(true)


    return (
        <>
            <main>
                {
                    !isDone ? (
                        <section className="intro">
                            <div className="intoTextWrap">
                                <h2>Happy Birthday</h2>
                                <h1>PST MRS My Full Name</h1>
                            </div>
                        </section>
                    ) : (
                        <>
                            <Navbar />

                            <HomeContent />
                            <Footer />

                        </>
                    )
                }
            </main>

        </>
    )
}


import { Link } from 'react-router-dom'
export function Navbar() {
    return (
        <nav>
            <div className="navWrap">
                <div className="logo">
                    <Link to={'/'}>
                        <h3>LOGO</h3>
                    </Link>
                </div>
                <div className="other">
                    <Link to={'/newPost'}>
                        <button>
                            Post A Message
                        </button>
                    </Link>
                </div>
            </div>
        </nav>
    )
}


import axios from "axios";

function HomeContent() {
    const [posts, setPosts] = useState([{
        name: '...',
        message: 'loading messages...',
        img: ''
    }])
    const [count, setCount] = useState(0)
    const [postData, setPostData] = useState({
        name: '...',
        message: 'loading messages...',
        img: ''
    })

    useEffect(() => {
        axios.get('http://localhost:8000/api/')
            .then((res) => {
                setPosts(res.data.posts)
            })
            console.log(posts);
            setPostData(posts[count])
    }, [count, postData, posts])


    function handleBack() {
        if (count > 0) {
            setCount(count - 1)
            console.log(count);
            setPostData(posts[count - 1])
        }
    }

    function handleFwd() {
        if (count < posts.length - 1) {
            setCount(count + 1);
            console.log(count);
            setPostData(posts[count + 1]); 
        }
    }

    return (
        <>
            <section className="hero">

                <div className="HeroTextWrap">
                    <h1>
                        Prof Mary Doe
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid sint aut beatae porro ad optio atque dolorum totam placeat, magni nisi vitae ex quidem maiores corrupti, minus nemo illum eaque!</p>
                    <div className="bttnWrap">
                        <button>
                            Download Pictures
                        </button>
                        {/* <button>
                            Write a Message
                        </button> */}
                    </div>
                </div>

            </section>

            <section className="popText">
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

            <section className="posts">
                <div className="postWrap">
                    <div className="textSection">
                        <div className="textWrapSec">
                            <h1>{postData.name}</h1>
                            <p>{postData.message}</p>

                        </div>
                        <div className="controlsSec">
                            <p>{count } of {posts.length}</p>
                            <div className="conBttn">
                                <div className="conBox" onClick={handleBack}>
                                    <BiArrowBack color='white' />
                                </div>
                                <div className="conBox" onClick={handleFwd}>
                                    <AiOutlineArrowRight color='white' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Image">
                        <div className="imageTall">
                            <img src={postData.img.data} alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="images">
                <div className="imgWrap">
                    <div className="imgBoxs"></div>
                    <div className="imgBoxs"></div>
                    <div className="imgBoxs"></div>
                    <div className="imgBoxs"></div>
                    <div className="imgBoxs"></div>
                </div>
                <div className="textImg">
                    <div className="textImgWrap">
                        <h1>Photo <br /> Bust</h1>
                        <button>Download Images</button>
                    </div>

                </div>
            </section>
        </>
    )
}

function Footer() {
    return (
        <>
            <footer>
                <div className="footertop">

                </div>
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