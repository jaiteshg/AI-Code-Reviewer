# ⚡ AI Code Reviewer

An AI-powered developer tool that analyzes your code, detects bugs, suggests improvements, and generates optimized code in real time — all inside a clean, modern interface.

---

## 🔥 Live Demo

👉 https://ai-code-reviewer-nine-ochre.vercel.app

---

## 🧠 Features

- 📝 **Interactive Code Editor** (Monaco Editor)
- 🤖 **AI-Powered Code Analysis** (Groq + LLaMA)
- 🐞 **Bug Detection** with severity & fixes
- ✨ **Smart Improvements** with explanations
- ⚡ **Code Diff Viewer** (Before vs After)
- ✅ **Auto Fixed Code Generation**
- 📋 **Copy to Clipboard** (1-click)
- 🕒 **History Tracking** (local storage)
- 🔐 **Authentication** (Google OAuth via NextAuth)
- 🎨 **Modern UI** (Dark Theme, responsive design)

---

## 🖥️ Tech Stack

- **Frontend:** Next.js 14 (App Router), React, Tailwind CSS  
- **Editor:** Monaco Editor  
- **Authentication:** NextAuth.js (Google OAuth)  
- **AI Integration:** Groq API (LLaMA 3.1)  
- **Diff Viewer:** react-diff-viewer-continued  
- **State:** React Hooks + LocalStorage  

---

## 📸 Screenshots

### 🔹 Editor + Analysis
![Editor](./screenshots/Editor.png)

### 🔹 Diff Viewer
![Diff](./screenshots/diff.png)

---

## ⚙️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/jaiteshg/AI-Code-Reviewer.git

# Navigate to project
cd ai-code-reviewer

# Install dependencies
npm install 
```

Create a .env.local file:

```env
GROQ_API_KEY=your_groq_api_key

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

NEXTAUTH_SECRET=your_random_secret
NEXTAUTH_URL=http://localhost:3000GROQ_API_KEY=your_api_key_here
```

Run the project:

```bash
npm run dev
```

Open in browser:

```
http://localhost:3000
```

---

## 🧪 How It Works

1. Write or paste your code in the editor  
2. Click **Analyze Code**  
3. AI analyzes and returns:
   - Bugs 🐞  
   - Improvements ✨  
   - Optimized code ✅  
4. View differences using the Diff Viewer  
5. Copy improved code instantly  

---

## 🎯 Use Cases

- Beginners learning coding  
- Developers debugging code faster  
- Improving code quality  
- Understanding best practices  

---


## 🙌 Acknowledgements

- Groq (AI inference)
- Next.js (framework)
- Monaco Editor (code editor)
- NextAuth (authentication)

---
## ⭐ Support
 Don’t forget to star the repo if you found it useful!

---
## 📬 Connect
Feel free to reach out or contribute to improve this project 🚀
