import { context, INPUT_CHANGED } from '../../context/index';
import './input.scss';

export default function Input() {
  const div = document.createElement('div');
  div.className = 'input';

  const handler = () =>
    (div.innerHTML = `
  <div>
    ${context.input ?? ''}
  </div>
  `);
  handler();
  addEventListener(INPUT_CHANGED, handler);

  return div;
}
