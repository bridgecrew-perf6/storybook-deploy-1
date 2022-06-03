import { render } from '@testing-library/react';

import Cxc from './cxc';

describe('Cxc', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Cxc />);
    expect(baseElement).toBeTruthy();
  });
});
