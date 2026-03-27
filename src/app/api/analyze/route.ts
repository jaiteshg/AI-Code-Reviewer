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
        model: "llama-3.1-8b-instant", // free + fast
        messages: [
          {
            role: "system",
            content: "You are a senior software engineer who reviews code.",
          },
          {
            role: "user",
            content: `Analyze the following code and respond ONLY in JSON format:

                        {
                        "bugs": ["list of bugs"],
                        "improvements": ["list of improvements"],
                        "fixedCode": "improved version of code"
                        }

                        Code:
                        ${code} `,
          },
        ],
      }),
    });

    const data = await response.json();



    console.log("Groq response:", data);

    if (!response.ok) {
      return NextResponse.json(
        { error: data.error?.message || "Groq API error" },
        { status: 500 }
      );
    }

    console.log("CONTENT:", data.choices?.[0]?.message?.content);

    return NextResponse.json({
      result: data.choices?.[0]?.message?.content || "No response",
    });
  } catch (error) {
    console.error("API ERROR:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}