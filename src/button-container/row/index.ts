import './style.scss';

export default function Row(...elements: HTMLElement[]) {
  const div = document.createElement('div');
  div.classList.add('row');

  for (const element of elements) {
    div.appendChild(element);
  }

  return div;
}
