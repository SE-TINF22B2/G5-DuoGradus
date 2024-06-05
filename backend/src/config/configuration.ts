export default () => ({
  providers: {
    fitbit: {
      client_id: process.env.FITBIT_CLIENT_ID,
      client_secret: process.env.FITBIT_CLIENT_SECRET,
    },
  },
});
