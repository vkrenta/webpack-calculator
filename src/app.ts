import './app.scss';
import ButtonContainer from './button-container/index';
import Displayer from './displayer/displayer';

function App() {
  const app = document.createElement('div');
  app.classList.add('app');

  app.appendChild(Displayer());
  app.appendChild(ButtonContainer());

  return app;
}

export default App;
