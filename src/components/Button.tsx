import { ReactElement } from 'react';

export function Button(): ReactElement {
  return (
    <button type="button" onClick={() => console.log('clicked')}>
      Take a step
    </button>
  );
}
