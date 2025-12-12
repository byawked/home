"use client";

import { useEffect, useRef, useState, ChangeEvent, KeyboardEvent } from "react";

import { Input as InputPollyfill } from "react-field-sizing-content";

import { HandleCommit } from "./terminal";

const INPUT_DEFAULT_VALUE = "";

const resetCaretEndPos = (inputElem: HTMLInputElement | null) => {
  if (inputElem) {
    inputElem.focus();
    inputElem.setSelectionRange(inputElem.value.length, inputElem.value.length);
  }
};

type InputProps = {
  prefix: string;
  onCommit: HandleCommit;
};

export default function Input({ prefix = "user", onCommit }: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [input, setInput] = useState(INPUT_DEFAULT_VALUE);

  useEffect(() => {
    setTimeout(() => {
      resetCaretEndPos(inputRef.current);
    }, 0);
  }, [inputRef, input]);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleOnFocus = (e: ChangeEvent<HTMLInputElement>) => {
    setTimeout(() => {
      resetCaretEndPos(inputRef.current);
    }, 0);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    switch (e.code) {
      case "Enter":
        onCommit({ timestamp: Date.now(), value: input, user: prefix });
        setInput(INPUT_DEFAULT_VALUE);
        break;
      case "ArrowLeft":
        if (input.length > 0) {
          setInput(input.slice(0, -1));
          break;
        }
        setInput(INPUT_DEFAULT_VALUE);
        break;
    }
  };

  return (
    <label className="input-container self-start justify-self-end">
      <span className="input-prefix">{`[${prefix}]`}</span>
      <span className="input-wrapper">
        <InputPollyfill
          className="input"
          ref={inputRef}
          onKeyDown={handleKeyDown}
          onChange={handleOnChange}
          onFocus={handleOnFocus}
          fieldSizing="content"
          type="text"
          value={input}
        />
      </span>
    </label>
  );
}
