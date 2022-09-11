import { configureStore, createAction, createReducer, PayloadAction } from '@reduxjs/toolkit'
import {
  createSelectorHook,
  useDispatch as useReduxDispatch,
} from 'react-redux'

// TODO: slice作成の時に削除する
type Person = Record<'firstName' | 'lastName', string>
const initialState: Person = { firstName: 'hoge', lastName: 'tarou' }
const setName = createAction<Person, 'setName'>('setName')
const resetName = createAction<string, 'resetName'>('resetName')
const sampleReducer = createReducer(initialState, builder =>
  builder
    .addCase(setName, (state, { payload }: PayloadAction<Person>) => {
      state.firstName = payload.firstName
      state.lastName = payload.lastName
    })
    .addCase(resetName, () => initialState)
)

const store = configureStore({
  reducer: {
    sample: sampleReducer
  }
})
export type RootState = ReturnType<typeof store.getState>


// custom useDispatch
type AppDispatch = typeof store.dispatch
export const useDispatch = () => useReduxDispatch<AppDispatch>()

// custom useSelector
export const useSelector = createSelectorHook<RootState>();

export default store
