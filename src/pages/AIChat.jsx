// AIChat.jsx
import { useState, useRef, useEffect } from "react";

export default function AIChat({ jobId }) {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: jobId
        ? "Hi! I've loaded your sales analysis. Ask me anything about your business performance 📊"
        : "Hi! Upload a sales file to get started, or ask me a general business question.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const updatedMessages = [...messages, { role: "user", content: text }];
    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("https://velox-python-code.vercel.app/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          job_id: jobId || null,           // pass jobId from parent
          messages: updatedMessages,        // full history every time
        }),
      });

      const data = await res.json();
      setMessages([...updatedMessages, { role: "assistant", content: data.reply }]);
    } catch (err) {
      setMessages([
        ...updatedMessages,
        { role: "assistant", content: "⚠️ Could not reach the server. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-full p-8">
    <div style={styles.container}>
      <div style={styles.header}>💬 Business Assistant</div>

      <div style={styles.messages}>
        {messages.map((m, i) => (
          <div
            key={i}
            style={{
              ...styles.bubble,
              alignSelf: m.role === "user" ? "flex-end" : "flex-start",
              background: m.role === "user" ? "#4f46e5" : "#f3f4f6",
              color: m.role === "user" ? "#fff" : "#111",
            }}
          >
            {m.content}
          </div>
        ))}
        {loading && (
          <div style={{ ...styles.bubble, alignSelf: "flex-start", background: "#f3f4f6", color: "#888" }}>
            Thinking...
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      <div style={styles.inputRow}>
        <input
          style={styles.input}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Ask about your sales data..."
          disabled={loading}
        />
        <button style={styles.button} onClick={sendMessage} disabled={loading}>
          Send
        </button>
      </div>
    </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex", flexDirection: "column",
    width: "100%", height: 500, border: "1px solid #e5e7eb",
    borderRadius: 12, overflow: "hidden", fontFamily: "sans-serif",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
  },
  header: {
    background: "#4f46e5", color: "#fff",
    padding: "12px 16px", fontWeight: 600, fontSize: 15,
  },
  messages: {
    flex: 1, overflowY: "auto", padding: 12,
    display: "flex", flexDirection: "column", gap: 8,
  },
  bubble: {
    maxWidth: "80%", padding: "8px 12px",
    borderRadius: 10, fontSize: 14, lineHeight: 1.5,
  },
  inputRow: {
    display: "flex", borderTop: "1px solid #e5e7eb", padding: 8, gap: 6,
  },
  input: {
    flex: 1, border: "1px solid #d1d5db", borderRadius: 8,
    padding: "8px 12px", fontSize: 14, outline: "none",
  },
  button: {
    background: "#4f46e5", color: "#fff", border: "none",
    borderRadius: 8, padding: "8px 16px", cursor: "pointer", fontSize: 14,
  },
};