import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
    referingProviderData: [],
    loading: false,
    error:''
}

const referingProviderSlice = createSlice({
    name: 'referingProvider',
    initialState,
    reducers: {
        isLoading (state) {
            state.loading = true
        },

        referingProviderData (state, action) {
            state.referingProviderData = action.payload
            state.error = ''
            state.loading = false
        }
    }
})

export const { isLoading, referingProviderData } = referingProviderSlice.actions

export default referingProviderSlice.reducer