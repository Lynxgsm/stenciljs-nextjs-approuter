import { newSpecPage } from '@stencil/core/testing';
import { GekoFlex } from '../geko-flex';

describe('geko-flex', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GekoFlex],
      html: `<geko-flex></geko-flex>`,
    });
    expect(page.root).toEqualHtml(`
      <geko-flex>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </geko-flex>
    `);
  });
});
