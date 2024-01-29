import { newE2EPage } from '@stencil/core/testing';

describe('geko-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<geko-button></geko-button>');

    const element = await page.find('geko-button');
    expect(element).toHaveClass('hydrated');
  });
});
