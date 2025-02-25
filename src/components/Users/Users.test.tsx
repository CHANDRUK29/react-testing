import { render, screen, waitFor } from '@testing-library/react';
import { Users } from './Users';

// Mocking global fetch function
beforeAll(() => {
  global.fetch = jest.fn();
});

afterAll(() => {
  jest.restoreAllMocks(); // Restore the original fetch after tests
});

test('renders users list when fetch is successful', async () => {
  // Arrange: Mock a successful fetch response
  const mockUsers = [
    { name: 'Bruce Wayne' },
    { name: 'Clark Kent' },
    { name: 'Princess Diana' },
  ];

  fetch.mockResolvedValueOnce({
    json: jest.fn().mockResolvedValueOnce(mockUsers),
  });

  // Act: Render the Users component
  render(<Users />);

  // Assert: Check that the component renders the list of users
  await waitFor(() => {
    expect(screen.getByText('Users')).toBeInTheDocument(); // Check if heading exists
    expect(screen.getByText('Bruce Wayne')).toBeInTheDocument();
    expect(screen.getByText('Clark Kent')).toBeInTheDocument();
    expect(screen.getByText('Princess Diana')).toBeInTheDocument();
  });
});

test('displays an error message when fetch fails', async () => {
  // Arrange: Mock a failed fetch response
  fetch.mockRejectedValueOnce(new Error('Error fetching users'));

  // Act: Render the Users component
  render(<Users />);

  // Assert: Check that the error message is displayed
  await waitFor(() => {
    expect(screen.getByText('Error fetching users')).toBeInTheDocument();
  });
});
