import Button from './button/button';
import { context, Sign } from '../context/index';
import Row from './row/index';
import './style.scss';

export default function ButtonContainer() {
  const div = document.createElement('div');
  div.classList.add('button-container');

  div.appendChild(
    Row(
      Button({ text: 'M', onClick: () => context.toMemory() }),
      Button({ text: 'M+', onClick: () => context.plusMemory() }),
      Button({ text: 'M-', onClick: () => context.minusMemory() }),
      Button({ text: '/', onClick: () => context.putSign('/') })
    )
  );
  div.appendChild(
    Row(
      Button({ text: '7', onClick: () => context.putNumber(7) }),
      Button({ text: '8', onClick: () => context.putNumber(8) }),
      Button({ text: '9', onClick: () => context.putNumber(9) }),
      Button({ text: '*', onClick: () => context.putSign('*') })
    )
  );
  div.appendChild(
    Row(
      Button({ text: '5', onClick: () => context.putNumber(5) }),
      Button({ text: '6', onClick: () => context.putNumber(6) }),
      Button({ text: '4', onClick: () => context.putNumber(4) }),
      Button({ text: '-', onClick: () => context.putSign('-') })
    )
  );
  div.appendChild(
    Row(
      Button({ text: '1', onClick: () => context.putNumber(1) }),
      Button({ text: '2', onClick: () => context.putNumber(2) }),
      Button({ text: '3', onClick: () => context.putNumber(3) }),
      Button({ text: '+', onClick: () => context.putSign('+') })
    )
  );
  div.appendChild(
    Row(
      Button({ text: '•', onClick: () => context.dot() }),
      Button({ text: '0', onClick: () => context.putNumber(0) }),
      Button({ text: 'C', onClick: () => context.clear() }),
      Button({ text: '=', onClick: () => context.calculate() })
    )
  );

  return div;
}
