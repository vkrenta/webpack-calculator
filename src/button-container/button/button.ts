import './button.scss';

export default function Button(props?: {
  text?: string;
  onClick?: () => void;
}) {
  const button = document.createElement('div');

  button.classList.add('button');

  if (props) {
    button.innerText = props.text;

    if (props.onClick) button.addEventListener('click', props.onClick);
  }

  return button;
}
