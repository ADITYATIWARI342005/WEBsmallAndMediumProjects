

const initialState = {
  loading: false,
};

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
   
  },
});

export const { setLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
