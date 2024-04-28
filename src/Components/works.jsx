
import GitHubIcon from '@mui/icons-material/GitHub';
import PreviewIcon from '@mui/icons-material/Preview';
import './works.css'
const workData = [
    {
        id:4,
        title:'Cross N Knot Game',
        description:'Personal Portfolio Website',
        imgUrl: "./images/work4.png",
        publicLink: "https://crossnknot.vercel.app/",
        githubLink: "https://github.com/anishkharii/tictactoe_Reactjs"
    },
    {
        id:1,
        title:'Electricity Units Calculator',
        description:'Simple calculator to calculate the units of electricity',
        imgUrl: "./images/work1.png",
        publicLink: "https://electricitycalculator.vercel.app",
        githubLink: "https://github.com/anishkharii/electricitycalculator"
    },
    {
        id:2,
        title:'Sign In and Registration ',
        description:'Featureful SignIn, SignUp and Forgot Password Page with jwt authentication',
        imgUrl: "./images/work2.png",
        publicLink: "https://echosync.vercel.app",
        githubLink: "https://github.com/anishkharii/EchoSync"
    },
    {
        id:3,
        title:'Youtube Video Downloader',
        description:'Simple Youtube Video Downloader',
        imgUrl: "./images/work3.png",
        publicLink: "https://getyoutubevideo.vercel.app/",
        githubLink: "https://github.com/anishkharii/youtube-video-downloader-backend"
    },
    {
        id:5,
        title:'QR Code Generator',
        description:'QR Code Generator',
        imgUrl: "./images/work5.png",
        publicLink: "https://anishkharii.github.io/QR-Code-Generator/",
        githubLink: "https://github.com/anishkharii/QR-Code-Generator"
    },
    {
        id:6,
        title:'To-Do List',
        description:'To-Do List',
        imgUrl: "./images/work6.png",
        publicLink: "https://anishkharii.github.io/To-Do-List/",
        githubLink: "https://github.com/anishkharii/To-Do-List"
    }
]

const WorkContainer = ()=>{
    return (
        workData.map((item)=>(
            <li key={item.id} className="work-container">
                <img src={item.imgUrl} alt="" onError={(e)=>{e.target.src='./images/empty_img.webp'}} />
                <div className="work-details">

                <h3 className="work-title">{item.title}</h3>
                <p className="work-description">{item.description}</p>
                </div>
                <div className="work-links">
                <a target="_blank" href={item.githubLink} className="work-link">
                    <GitHubIcon />
                    <span>Github</span>
                </a>
                <a target="_blank" href={item.publicLink} className="work-link">
                    <PreviewIcon />
                    <span>Preview</span>
                </a>
                </div>
            </li>
        ))
    )
}

const WorkPage = ()=>{
    return(
        <div className="work-page">
            <h2>List of Works</h2>
            <ul className="work-list">
                <WorkContainer/>
            </ul>
        </div>
    )
}
export default WorkPage