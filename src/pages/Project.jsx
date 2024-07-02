import { useParams } from "react-router-dom";
import BtnGitHub from "../Components/btnGitHub/BtnGitHub";
import { projects } from "./../helpers/projectsList";
import BtnBack from "../Components/btnBack/BtnBack";
import { Link } from "react-router-dom";


const Project = () => {
    const {id} = useParams();
    const project = projects[id];

    return (
        <main className="section">
            <Link to='/projects'>
                <BtnBack />
            </Link>
            
            <div className="container">
                <div className="project-details">

                    <h1 className="title-1">{project.title}</h1>

                    <img src={project.imgBig} alt={project.title} className="project-details__cover" />

                    <div className="project-details__desc">
                        <p>{project.skills}</p>
                    </div>

                   <BtnGitHub link="https://github.com" />

                </div>
            </div>
        </main>
    );
}
 
export default Project;