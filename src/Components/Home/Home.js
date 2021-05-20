import React from "react";
import "./Home.css";
import logo from "../../Assets/ctf-images/logo.svg";
import enter from "../../Assets/ctf-images/enter.svg";
import Particles from "react-particles-js";

function Home() {
    return (
        <div id="particles-js">
            <div className="home">
                <div class="home_top-nav">
                    <img src={logo} />
                    <p>ABHEDYA CTF</p>
                </div>
                <span>
                    <img src={logo} class="home_image-ani" />
                    <h1>ABHEDYA CTF</h1>
                    <p>
                        Abhedya CTF (Capture The Flag) is a kind of information
                        security competition that challenges contestants to
                        solve a variety of task. Abhedya CTF will help you in
                        the journey of cyber security.
                    </p>
                    <a href="/category">
                        <img src={enter} class="home_span-img" alt="enter" />
                    </a>
                </span>
            </div>
            <Particles
                className="reactparticle"
                params={{
                    particles: {
                        number: {
                            value: 50,
                        },
                        size: {
                            value: 3,
                        },
                    },
                    interactivity: {
                        events: {
                            onhover: {
                                enable: true,
                                mode: "repulse",
                            },
                        },
                    },
                }}
            />
        </div>
    );
}

export default Home;
