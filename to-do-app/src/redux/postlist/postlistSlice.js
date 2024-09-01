import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"


const initialState = {
    loading: false,
    posts: [],
    error: ''
}

export const fetchPosts = createAsyncThunk("postlist/fetchPosts", async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    return response.json();
})

const postlistSlice = createSlice({
    name: 'posts',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchPosts.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.loading = false
            state.posts = action.payload
            state.error=""
        })
        builder.addCase(fetchPosts.rejected, (state, action) => {
            state.loading = false
            state.posts = []
            state.error = action.payload
        })
    }
})

export default postlistSlice.reducer