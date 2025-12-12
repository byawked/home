"use client";

import { useState, useEffect, useRef } from "react";

import Input from "./input";

export default function Terminal() {
  const documentRef = useRef<HTMLBodyElement>(null);
  const [commands, setCommands] = useState<Command[]>([]);

  useEffect(() => {
    if (!documentRef.current) {
      documentRef.current = document.querySelector("body");
    }

    if (documentRef.current) {
      window.scrollTo(0, documentRef.current.scrollHeight);
    }
  }, [commands]);

  const handleCommit: HandleCommit = (command) => {
    const result =
      command.value.length > 0
        ? `command not found: ${command.value.trim().split(" ")[0]}`
        : " ";

    const commandEntry = { ...command, result };
    setCommands([...commands, commandEntry]);
  };

  // clear ctrl + l / windows clear

  return (
    <>
      <div style={{ width: "100%" }}>
        {commands.map(({ timestamp, user, value, result }) => (
          <div key={`${timestamp}-command`}>
            <div className="command-row">{`[${user}] ${value}`}</div>
            <div className="command-row">{result}</div>
          </div>
        ))}
      </div>
      <Input prefix="user" onCommit={handleCommit} />
    </>
  );
}

type RawCommand = { value: string; user: string; timestamp: number };
type Command = RawCommand & { result: string };
export type HandleCommit = (command: RawCommand) => void;
