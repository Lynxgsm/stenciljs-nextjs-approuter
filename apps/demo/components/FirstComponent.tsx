'use client';

import { GekoWrapper } from 'geko-react/client';
import { GekoButton, GekoFlex } from 'geko-react';
export default function FirstComponent() {
  return (
    <GekoWrapper>
      <GekoFlex direction='column'>
        <GekoButton>Hello World</GekoButton>
        <GekoButton>Hello World</GekoButton>
        <GekoButton>Hello World</GekoButton>
        <GekoButton>Hello World</GekoButton>
        <GekoButton>Hello World</GekoButton>
      </GekoFlex>
    </GekoWrapper>
  );
}
