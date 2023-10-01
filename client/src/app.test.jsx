import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import App from './App';

test ('Header renders', () => {
    const { getByText } = render(<App />);
    expect(getByText('Questions Game')).toBeDefined();
});