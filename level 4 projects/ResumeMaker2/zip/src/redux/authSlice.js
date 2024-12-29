

const initialState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
  
  },
});

export const { authenticate } = authSlice.actions;
export default authSlice.reducer;
