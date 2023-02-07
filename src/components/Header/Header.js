import reactLogo from '../../images/react.png';
import './header.css';

export default function Header() {
    return (
        <header>
            <nav className='nav-items'>
                <img className="nav-image" src={reactLogo} alt="" />
                <h4 class="nav-item">React Facts </h4>
                <h5>React Course</h5>
            </nav>
        </header>
    );
}