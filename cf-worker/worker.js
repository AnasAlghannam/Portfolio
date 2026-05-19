const ALLOWED_ORIGIN = "https://anasalghannam.github.io";

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") {
      return cors(new Response(null, { status: 204 }));
    }

    if (request.method !== "POST") {
      return cors(new Response("Method not allowed", { status: 405 }));
    }

    const origin = request.headers.get("Origin") || "";
    if (!origin.startsWith(ALLOWED_ORIGIN) && !origin.startsWith("http://localhost")) {
      return new Response("Forbidden", { status: 403 });
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return cors(new Response("Bad request", { status: 400 }));
    }

    const { messages } = body;
    if (!Array.isArray(messages) || messages.length === 0) {
      return cors(new Response("Missing messages", { status: 400 }));
    }

    const userMessage = messages[messages.length - 1].content;

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        messages: [{ role: "user", content: userMessage }],
        max_tokens: 512,
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      return cors(new Response(`Groq error: ${err}`, { status: 502 }));
    }

    const data = await response.json();
    const text = data?.choices?.[0]?.message?.content ?? "";
    return cors(new Response(JSON.stringify({ text }), {
      headers: { "Content-Type": "application/json" },
    }));
  },
};

function cors(response) {
  const r = new Response(response.body, response);
  r.headers.set("Access-Control-Allow-Origin", "*");
  r.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  r.headers.set("Access-Control-Allow-Headers", "Content-Type");
  return r;
}
