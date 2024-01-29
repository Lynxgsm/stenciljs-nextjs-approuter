import { newSpecPage } from '@stencil/core/testing';
import { GekoButton } from '../geko-button';

describe('geko-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GekoButton],
      html: `<geko-button></geko-button>`,
    });
    expect(page.root).toEqualHtml(`
      <geko-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </geko-button>
    `);
  });
});
