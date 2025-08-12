export default function Education() {
    return (
        <section>
            <h2>Education</h2>
            <div className="education-item">
                <div className="edu-header">
                    <h3>University of North Texas</h3>
                    <span className="edu-date">Expected May 2026</span>
                </div>
                <p>Bachelor of Science — Computer Science &nbsp;|&nbsp; GPA: 3.88</p>
            </div>

            <div className="education-item">
                <div className="edu-header">
                    <h3>North Central Texas College</h3>
                    <span className="edu-date">May 2020</span>
                </div>
                <p>Associate of Science &nbsp;|&nbsp; GPA: 3.20</p>
            </div>
        </section>
    );
}


export default function Experience(){
    return (

    )
}


export default function Projects() {
    return (
        <section>
            <h2>Projects</h2>

            <div className="project">
                <h3>Linear Regression</h3>
                <ul>
                    <li>Built a linear regression model to analyze the relationship between student test scores and hours studied</li>
                    <li>Utilized Python standard libraries to preprocess data, perform EDA, and implement the model</li>
                    <li>Overcame algorithm challenges by learning gradient descent implementation details</li>
                </ul>
            </div>

            <div className="project">
                <h3>Pong Project Game</h3>
                <ul>
                    <li>Developed a C++ Pong game to enhance programming skills and understanding of game mechanics</li>
                    <li>Utilized Raylib to implement visuals and gameplay mechanics</li>
                    <li>Implemented paddle controls, ball physics, and scoring systems for engaging gameplay</li>
                </ul>
            </div>

            <div className="project">
                <h3>Space Ship 1v1 Shooter Game</h3>
                <ul>
                    <li>Designed and implemented shooting mechanics, bullet physics, and collision detection in Python</li>
                    <li>Utilized pygame for visuals, sound effects, and gameplay elements</li>
                    <li>Programmed responsive player controls ensuring smooth gameplay</li>
                </ul>
            </div>
        </section>
    );
}


export default function Additional() {
    return (
        <section>
            <h2>Additional Information</h2>
            <div className="additional-container">
                <div>
                    <h3>Languages</h3>
                    <ul>
                        <li>Python</li>
                        <li>C++</li>
                        <li>HTML</li>
                        <li>JavaScript</li>
                        <li>CSS</li>
                    </ul>
                </div>

                <div>
                    <h3>Software</h3>
                    <ul>
                        <li>Visual Studio</li>
                        <li>PyCharm</li>
                        <li>VS Code</li>
                    </ul>
                </div>

                <div>
                    <h3>Activities</h3>
                    <ul>
                        <li>Computer Science Club</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
