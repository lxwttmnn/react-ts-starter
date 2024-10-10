import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { vi } from 'vitest';
import App from './App';

const ResizeObserverMock = vi.fn(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn()
}));

vi.stubGlobal('ResizeObserver', ResizeObserverMock);

describe('render', () => {
  it('renders the main page', () => {
    render(<App />);
    expect(true).toBeTruthy();
  });
});
