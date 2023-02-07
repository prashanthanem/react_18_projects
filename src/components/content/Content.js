import './content.css';
import logo from '../../images/main.jpg';
import { faTwitter, faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Content() {
    return (
        <main className="content">
            <img src={logo} alt="" className='profile-img' />
            <article className='profile-intro'>
                <h1 className='title'>Prashanth Anem</h1>
                <p className='sub-title'>Front End Developer</p>
                <p className='website-link'>prashanthanem.com</p>
                <div className='buttons'>
                    <button className='button'>Email</button>
                    <button className='linked-btn button'>Linked-In</button>
                </div>
                <section>
                    <h3 className='section-title'>About</h3>
                    <p className='section-text'>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                    <h3 className='section-title'>Interests</h3>
                    <p className='section-text'>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
                </section>
            </article>
            <footer className='profile-footer'>
                <FontAwesomeIcon icon={faTwitter} className="icon" />
                <FontAwesomeIcon icon={faFacebook} className="icon" />
                <FontAwesomeIcon icon={faInstagram} className="icon" />
                <FontAwesomeIcon icon={faGithub} className="icon" />
            </footer>
        </main>
    );
}