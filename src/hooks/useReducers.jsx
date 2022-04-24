import { useSelector } from 'react-redux'

export default function useReducers(reducer) {
  return useSelector(state => state[reducer] ?? state)
}