import Header from './header/header';
import Input from './main/input';
import './displayer.scss';

export default function Displayer() {
  const div = document.createElement('div');
  div.className = 'displayer';

  div.appendChild(Header());
  div.appendChild(Input());

  return div;
}
