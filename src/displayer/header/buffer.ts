import { BUFFER_CHANGED, context, SIGN_CHANGED } from '../../context/index';

export default function Buffer() {
  const div = document.createElement('div');
  div.className = 'buffer';

  const handler = () =>
    (div.innerText = `${context.buffer ?? ''} ${context.sign ?? ''}`);
  handler();
  addEventListener(BUFFER_CHANGED, handler);
  addEventListener(SIGN_CHANGED, handler);

  return div;
}
