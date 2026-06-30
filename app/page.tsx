import Link from "next/link";


export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>Home</h1>
      <nav>
        <Link href='/'>Home</Link>
        <br />

        <Link href="/about">About</Link>
        <br />

        <Link href="/contact">Contact</Link>
        <br />

        <Link href="/dashboard">Dashboard</Link>
      </nav>
      
    </div>
  );
}
