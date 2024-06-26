import React from 'react'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Project from '../Project/Project'
import Resume from '../Resume/Resume'
import Skill from '../Skill/Skill'

function Dock() {
    return (
        <>
            {/* <!-- ======= Hero Section ======= --> */}
            <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
                <div className="hero-container ms-3">
                    <h1>Santhosh</h1>
                    <p> <img src={"https://readme-typing-svg.herokuapp.com/?size=20&font=Edu+VIC+WA+NT+Beginner&duration=6000&color=ffffff&size=32&center=true&vCenter=true&width=380&height=50&lines=I'm+a+Full-StackWeb+Developer"} alt="text" /></p>
                </div>
            </section>
            {/* <!-- End Hero --> */}

            <About></About>
            <Skill></Skill>
            <Project></Project>
            <Resume></Resume>
            <Contact></Contact>

            <a href="#hero" id='top' className='back-to-top d-flex align-items-center justify-content-center'><i className="fas fa-angle-double-up"></i></a>
        </>
    )
}

export default Dock