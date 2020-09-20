import { context, MEMORY_CHANGED } from '../../context/index';

export default function Memory() {
  const div = document.createElement('div');
  div.className = 'memory';

  div.innerText = `M: ${context.memory}`;
  addEventListener(MEMORY_CHANGED, () => {
    div.innerText = `M: ${context.memory}`;
  });

  return div;
}
