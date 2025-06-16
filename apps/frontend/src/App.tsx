"use client"

import { useState, useEffect } from "react"
import "./App.css"

function App() {
  const [message, setMessage] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>("")

  useEffect(() => {
    fetchMessage()
  }, [])

  const fetchMessage = async () => {
    try {
      setLoading(true)
      const response = await fetch("/api/hello")

      if (!response.ok) {
        throw new Error("Failed to fetch message")
      }

      const data = await response.json()
      setMessage(data.message)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="app">
      <div className="container">
        <h1>Vercel Monorepo</h1>
        <div className="card">
          <h2>Message from Backend:</h2>
          {loading && <p className="loading">Loading...</p>}
          {error && <p className="error">Error: {error}</p>}
          {message && !loading && !error && <p className="message">{message}</p>}
          <button onClick={fetchMessage} disabled={loading}>
            {loading ? "Loading..." : "Refresh Message"}
          </button>
        </div>
        <div className="info">
          <p>Frontend: Vite + React</p>
          <p>Backend: Node.js + Vercel Functions</p>
          <p>Architecture: Monorepo with Yarn Workspaces</p>
        </div>
      </div>
    </div>
  )
}

export default App
