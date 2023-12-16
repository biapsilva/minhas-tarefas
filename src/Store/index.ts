import { configureStore } from '@reduxjs/toolkit'

import tarefasReducers from './Reducers/tarefas'
import filtroReducer from './Reducers/filtro'

const store = configureStore({
  reducer: {
    tarefas: tarefasReducers,
    filtro: filtroReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
