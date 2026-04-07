import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { code } = await req.json();

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        messages: [
          {
            role: "system",
            content: "You are a strict senior software engineer and code reviewer.",
          },
          {
            role: "user",
            content: `
Analyze the following code and return ONLY valid JSON.

Format:
{
  "bugs": [
    {
      "issue": "string",
      "severity": "low | medium | high",
      "fix": "string"
    }
  ],
  "improvements": [
    {
      "suggestion": "string",
      "benefit": "string"
    }
  ],
  "fixedCode": "string"
}

Rules:
- Always return valid JSON
- No extra text
- Always include all fields
- NEVER return completely empty arrays
- If code is correct, still give at least 1 improvement suggestion
- Be strict and critical like a senior engineer

Code:
${code}
            `,
          },
        ],
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: data.error?.message || "Groq API error" },
        { status: 500 }
      );
    }

    const content = data.choices?.[0]?.message?.content;

    // 🔥 CLEAN AI RESPONSE (fix markdown issue)
    let cleaned = content
      ?.replace(/```json/g, "")
      ?.replace(/```/g, "")
      ?.trim();

    let parsed;

    try {
      parsed = JSON.parse(cleaned);
    } catch (err) {
      console.error("JSON Parse Error:", cleaned);

      parsed = {
        bugs: [],
        improvements: [],
        fixedCode: "// Failed to parse AI response",
      };
    }

    // 🔥 SAFETY FALLBACK (avoid empty UI)
    parsed = {
      bugs: parsed.bugs || [],
      improvements: parsed.improvements || [],
      fixedCode: parsed.fixedCode || "// No improvements generated",
    };

    return NextResponse.json(parsed);

  } catch (error) {
    console.error("API ERROR:", error);

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}