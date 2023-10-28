import { configureStore } from '@reduxjs/toolkit'


export const store = configureStore({

  reducer: {
//seccion de reducers

  }

})

export type RootState = ReturnType<typeof store.getState> // estado de la store
export type AppDispatch = typeof store.dispatch // dispathc del store tipado para las acciones
