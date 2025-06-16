export default function handler(req, res) {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
  res.setHeader("Access-Control-Allow-Headers", "Content-Type")

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    res.status(200).end()
    return
  }

  // Only allow GET requests
  if (req.method !== "GET") {
    res.status(405).json({ error: "Method not allowed" })
    return
  }

  // Return Hello World message
  res.status(200).json({
    message: "Hello World from Vercel Backend! 🚀",
    timestamp: new Date().toISOString(),
    environment: process.env.VERCEL_ENV || "development",
  })
}
