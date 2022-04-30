import './App.scss';
import {ReactComponent as GithubLogo} from './assets/GitHub-Mark.svg'
import {ReactComponent as LinkedinLogo} from './assets/LinkedIn_Logo.svg'
import {ReactComponent as Email} from './assets/Envelope.svg'

function App() {
  return (
    <div className='App'>
      <div className='content-container'>
        <div className='kritika-portrait'></div>
        <h1 className='hi-im-kritika'>Hi I'm Kritika!</h1>
        <p className='about-me-text'>
          I'm a full-stack developer with robust range of skills. I'm looking for new opportunities that take advantage of my resourcefulness, curiosity, and passion while offering mentorship, community, and challenging opportunities.
        </p>
      </div>
      <footer>
        <nav className='contact-icons-container'>
          <a href="https://github.com/tikagan">
            <GithubLogo />
          </a>
          <a href="https://www.linkedin.com/in/kritika-ganapathy-61893014b/">
            <LinkedinLogo />
          </a>
          <a href="mailto:ganapathy.kritika@gmail.com">
            <Email />
          </a>
        </nav>
      </footer>
    </div>
  );
}

export default App;
