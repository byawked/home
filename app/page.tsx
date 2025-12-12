import Image from "next/image";

import Terminal from "./ui/terminal";

export default function Home() {
  return (
    <div className="flex justify-center bg-crt">
      <main
        style={{ padding: "calc(50vh - 30px) 0 80px 0" }}
        className="flex min-h-screen w-full max-w-3xl flex-col items-center-safe"
      >
        <Image
          style={{
            marginBottom: "5vh",
          }}
          src="/logo_glitch.svg"
          alt="byAwked logo"
          width={200}
          height={60}
          priority
        />
        <Terminal />
      </main>
    </div>
  );
}
