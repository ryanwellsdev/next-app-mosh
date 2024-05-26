'use client'
import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import nextImage from "@/public/next.svg"
import { Metadata } from "next";
import { useState } from "react";

export default function Home() {
  return (
    <main className="relative h-screen">
      <h1>Hello World</h1>
      <button onClick={async () => {
        const _ = (await import('lodash')).default;
        const users = [
          { name: 'c' },
          { name: 'b' },
          { name: 'a' },
        ];
        const sorted = _.orderBy(users, ['name'])
        console.log(sorted)
      }}>Show</button>
      <br />
      <Link href="/users">Users</Link>
      <ProductCard />
      {/* <Image
        src="https://www.alesis.com/rscdn/1571/images/a6andromeda_angle_lg.jpg"
        alt="Andromeda A6"
        fill
        className="object-cover backdrop-blur-xl	"
        sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw)"
        quality={100}
      /> */}
    </main >
  )
}

// export const metadata: Metadata = {
//   title: '...',
//   description: '...'
// }

// export async function generateMetadata(): Promise<Metadata> {
//   const produdct = await fetch('')

//   return {
//     title: 'product.title',
//     description: 'product.description'
//   }
// }
