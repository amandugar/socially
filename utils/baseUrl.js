const baseUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000"
    : "https://socially-alpha.vercel.app"

export default baseUrl
