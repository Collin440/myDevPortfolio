import { useState, type KeyboardEvent } from "react";

type Line = { kind: "in" | "out"; text: string };

const commands: Record<string, string[]> = {
  help: [
    "Available commands:",
    "  about     who I am",
    "  projects  what I am building",
    "  skills    my honest skill levels",
    "  contact   how to reach me",
    "  clear     clear the screen",
  ],
  about: [
    "Fofo Collin Moleme: full-stack and mobile developer from Johannesburg.",
    "Currently levelling up on AWS and Kotlin.",
  ],
  projects: [
    "1. The GreenHaus: React, Supabase, AI (in progress)",
    "2. Tsebo: native Kotlin Android app (in progress)",
    "3. This portfolio: TypeScript on AWS (building)",
  ],
  skills: [
    "JavaScript / TypeScript: Lv 3",
    "React: Lv 2",
    "Node.js: Lv 2",
    "Kotlin: Lv 2 (learning)",
    "AWS: Lv 1 (in training)",
  ],
  contact: [
    "GitHub: github.com/Collin440",
    "Email: fofocollinmoleme@gmail.com",
  ],
};

export default function Terminal() {
  const [input, setInput] = useState("");
  const [lines, setLines] = useState<Line[]>([
    { kind: "out", text: "Welcome to the Cloud Guild. Type 'help' to begin." },
  ]);

  function run(raw: string) {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;
    if (cmd === "clear") {
      setLines([]);
      return;
    }
    const output = Object.keys(commands).includes(cmd)
      ? commands[cmd]
      : [`command not found: ${cmd}. Try 'help'.`];
    setLines((prev) => [
      ...prev,
      { kind: "in", text: raw },
      ...output.map((text) => ({ kind: "out" as const, text })),
    ]);
  }

  function onKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      run(input);
      setInput("");
    }
  }

  return (
    <div className="terminal">
      {lines.map((l, i) => (
        <div key={i} className={l.kind}>
          {l.kind === "in" ? "fofo@guild:~$ " : ""}
          {l.text}
        </div>
      ))}
      <label className="row">
        <span>fofo@guild:~$&nbsp;</span>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKeyDown}
          autoFocus
          spellCheck={false}
        />
      </label>
      <div className="chips">
        {Object.keys(commands).map((c) => (
          <button key={c} onClick={() => run(c)}>
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}
