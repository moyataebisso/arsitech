"use client";
import { useState } from "react";

export default function ArsiAdminPage() {
  const [secret, setSecret] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  const [type, setType] = useState("general");
  const [priority, setPriority] = useState("normal");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const checkSecret = () => {
    // Simple client-side check for UX
    // Real check happens in API
    if (secret.length > 5) setIsAuth(true);
  };

  const handleSubmit = async () => {
    if (description.length < 10) {
      setError("Please describe your request in more detail");
      return;
    }
    setLoading(true);
    setError("");

    const res = await fetch("/api/change-requests/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        description,
        requestType: type,
        priority,
        secret,
      }),
    });

    const data = await res.json();
    setLoading(false);

    if (data.success) {
      setSuccess(true);
      setDescription("");
    } else {
      setError(data.error || "Failed to submit");
    }
  };

  if (!isAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded-xl shadow w-full max-w-sm">
          <h1 className="text-xl font-bold mb-4">Arsi Tech Admin</h1>
          <input
            type="password"
            placeholder="Enter access code"
            value={secret}
            onChange={(e) => setSecret(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && checkSecret()}
            className="w-full border rounded-lg px-3 py-2 mb-3 text-sm"
          />
          <button
            onClick={checkSecret}
            className="w-full bg-blue-600 text-white rounded-lg py-2 text-sm font-medium"
          >
            Access
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-2xl font-bold mb-2">Arsi Tech Group</h1>
        <p className="text-gray-500 mb-6">
          Submit a change request for arsitechgroup.com
        </p>

        {success && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4 text-green-800">
            Request submitted! You will receive an email confirmation.
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4 text-red-800">
            {error}
          </div>
        )}

        <div className="bg-white rounded-xl shadow p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Request Type
            </label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 text-sm"
            >
              <option value="general">General Change</option>
              <option value="content">Content Update</option>
              <option value="design">Design Change</option>
              <option value="bug">Bug Report</option>
              <option value="new_feature">New Feature</option>
              <option value="urgent">Urgent Fix</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Priority</label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="radio"
                  value="normal"
                  checked={priority === "normal"}
                  onChange={() => setPriority("normal")}
                />
                Normal
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="radio"
                  value="urgent"
                  checked={priority === "urgent"}
                  onChange={() => setPriority("urgent")}
                />
                Urgent
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Describe the change *
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Be as specific as possible..."
              rows={5}
              className="w-full border rounded-lg px-3 py-2 text-sm resize-none"
            />
            <p className="text-xs text-gray-400 mt-1">
              {description.length} chars (minimum 10)
            </p>
          </div>

          <button
            onClick={handleSubmit}
            disabled={loading || description.length < 10}
            className="w-full bg-blue-600 text-white rounded-lg py-3 font-medium hover:bg-blue-700 disabled:opacity-50 transition-colors"
          >
            {loading ? "Submitting..." : "Submit Request →"}
          </button>
        </div>

        <p className="text-xs text-gray-400 mt-4 text-center">
          Requests are managed at cimaasites admin
        </p>
      </div>
    </div>
  );
}
