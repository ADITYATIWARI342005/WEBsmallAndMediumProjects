

const store = configureStore({
  reducer: {
    auth: authReducer,
    loading: loadingReducer,
  },
});

export default store;


// Expose the store to window for debugging in development mode
// Dont mess with this code below as it will be used for testing purpose
if (process.env.NODE_ENV === 'development') {
  window.store = store;
}
