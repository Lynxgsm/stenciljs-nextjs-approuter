import { newE2EPage } from '@stencil/core/testing';

describe('geko-flex', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<geko-flex></geko-flex>');

    const element = await page.find('geko-flex');
    expect(element).toHaveClass('hydrated');
  });
});
