import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'geko-flex',
  styleUrl: 'geko-flex.css',
  shadow: true,
})
export class GekoFlex {
  @Prop() direction: 'column' | 'row' = 'row';
  render() {
    return (
      <Host>
        <div class={`flex flex-${this.direction}`}>
          <slot></slot>
        </div>
      </Host>
    );
  }
}
