import Buffer from './buffer';
import Memory from './memory';
import './header.scss';

export default function Header() {
  const div = document.createElement('div');
  div.className = 'header';

  div.appendChild(Memory());
  div.appendChild(Buffer());

  return div;
}
