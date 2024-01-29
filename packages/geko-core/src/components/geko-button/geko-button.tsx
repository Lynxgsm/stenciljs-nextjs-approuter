import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'geko-button',
  styleUrl: 'geko-button.css',
  shadow: true,
})
export class GekoButton {
  render() {
    return (
      <Host>
        <button>
          <slot></slot>
        </button>
      </Host>
    );
  }
}
