import * as React from 'react';

export interface Props {
  items: string[];
}

export function Presentation({items}: Props) {
  return (
    <section>
      {items.map((item) => (<p>{item}</p>))}
    </section>
  );
}