import { renderHook, act } from '@testing-library/react'
import { useCounter } from './useCounter'

// renderHook is a function that react testing library offers to test custom hooks in test file
describe('useCounter', () => {
  test('should render the initial count', () => {
    const { result } = renderHook(useCounter)
    expect(result.current.count).toBe(0)
  })

  test('should accept and render the same initial count', () => {

    // we can also send props using a key intialProps
    const { result } = renderHook(useCounter, {
      initialProps: { initialCount: 10 },
    })
    expect(result.current.count).toBe(10)
  })


  // whenever we are testing anything that intend to update state we need to use act() function
  // need to wrap the function that tend to update the state

  test('should increment the count', () => {
    const { result } = renderHook(useCounter)
    act(() => result.current.increment())
    expect(result.current.count).toBe(1)
  })

  test('should decrement the count', () => {
    const { result } = renderHook(useCounter)
    act(() => result.current.decrement())
    expect(result.current.count).toBe(-1)
  })

});