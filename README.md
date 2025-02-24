# React Testing using JEST and RTL

## Jest
    Jest is primarily used for testing JavaScript applications, particularly React applications, but can also be used to test other JavaScript frameworks.

## RTL Queries
    React Testing Library (RTL) is a set of utilities for testing React components. It is designed to help you test components from the user's perspective, emphasizing how your component behaves when interacted with.

### Types of Queries in RTL

#### `getBy queries (Single Element):`
     These queries return a single element, and if no element is found or if multiple elements are found, they throw an error.

* getByText: Find an element by its text content.
* getByRole: Find an element by its role, such as button, textbox, etc.
* getByLabelText: Find a form element by its label text (useful for accessibility testing).
* getByPlaceholderText: Find an input element by its placeholder text.
* getByTestId: Find an element by its data-testid attribute.

#### `queryBy queries (Single Element, Returns null):` 
    These are similar to getBy queries, but they will not throw an error if no element is found. Instead, they return null.

* queryByText: Find an element by its text content.

#### `findBy queries (Async, Single Element):` 
These queries are asynchronous and return a promise that resolves when the element is found. These are typically used when dealing with asynchronous content (e.g., loading states or fetching data).

* findByText: Find an element by text content asynchronously.

#### `getAllBy queries (Multiple Elements):`
 These queries return all matching elements as an array. If no elements are found, they throw an error.

* getAllByText: Find all elements by their text content.

#### `queryAllBy queries (Multiple Elements, Returns empty array):`
 These are similar to getAllBy, but if no elements are found, they return an empty array instead of throwing an error.

* queryAllByText: Find all elements by their text content.

#### `findAllBy queries (Async, Multiple Elements):`
 These are asynchronous versions of getAllBy, used when you expect multiple elements to be rendered dynamically (e.g., after an API call).

* findAllByText: Find multiple elements by their text content asynchronously.

## Priority Order for Queries

1) getByRole
2) getByLabelText
3) getByPlaceHolderText
4) getByText
5) getByDisplayValue
6) getByAltText
7) getByTitle
8) getByTestId