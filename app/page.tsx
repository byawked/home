import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans bg-crt">
      <main className="flex min-h-screen w-full max-w-3xl flex-col justify-center-safe items-center-safe">
        <Image
          className="dark:invert"
          src="/logo_glitch.svg"
          alt="byAwked logo"
          width={200}
          height={60}
          priority
        />
      </main>
    </div>
  );
}
