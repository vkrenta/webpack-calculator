import Header from './header/header';
import Input from './main/input';
import './displayer.scss';
import Output from './footer/output';

export default function Displayer() {
  const div = document.createElement('div');
  div.className = 'displayer';

  div.appendChild(Header());
  div.appendChild(Input());
  div.appendChild(Output());

  return div;
}
