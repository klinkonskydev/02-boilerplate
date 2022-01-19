import { screen, render } from '@testing-library/react';
import Main from '.';

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = render(<Main />);

    expect(screen.getByRole('heading', { name: /i am a test/i }));
    expect(container.firstChild).toMatchSnapshot();
  });
});
