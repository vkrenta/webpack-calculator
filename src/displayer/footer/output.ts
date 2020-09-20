import { context, OUTPUT_CHANGED } from '../../context/index';
import './output.scss';

export default function Output() {
  const div = document.createElement('div');
  div.className = 'output';

  const handler = () => (div.innerText = context.output);
  handler();
  addEventListener(OUTPUT_CHANGED, handler);

  return div;
}
