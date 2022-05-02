import './stylesheets/App.scss';
import Button from './components/Button'
import Footer from './components/Footer'

function App() {
  return (
    <div className='App'>
      <div className='content-container'>
        <div className='kritika-portrait'></div>
        <h1 className='hi-im-kritika'>Hi I'm Kritika!</h1>
        <p className='about-me-text'>
          I'm a full-stack developer with robust range of skills. I'm looking for new opportunities that take advantage of my resourcefulness, curiosity, and passion while offering mentorship, community, and challenging opportunities.
        </p>
          <Button buttonText='Excellent'/>
      </div>
      < Footer />
    </div>
  );
}

export default App;
