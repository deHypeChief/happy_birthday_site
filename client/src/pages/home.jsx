import { useState } from "react"

export default function Home() {
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

function Navbar() {
    return (
        <nav>
            <div className="navWrap">
                <div className="logo">
                    <h3>LOGO</h3>
                </div>
                <div className="other">
                    <button>
                        Post A Message
                    </button>
                </div>
            </div>
        </nav>
    )
}

function HomeContent() {
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
                            <h1>My MAin Text</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto ea, nostrum cumque culpa, dolorem doloremque nobis officia id assumenda laudantium ut iste eum aliquid libero iusto est et odio dicta.</p>

                        </div>
                        <div className="controlsSec">
                            <p>1 of 23</p>
                            <div className="conBttn">
                                <div className="conBox"></div>
                                <div className="conBox"></div>
                            </div>
                        </div>
                    </div>
                    <div className="Image">
                        <div className="imageTall"></div>
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