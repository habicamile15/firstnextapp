"use client"

import Link from "next/link"

export default function Nav()
{

return(

<nav className="flex gap-4 items-center justify-center text-white bg-blue-600 py-4 mb-5">

<Link href="/">HOME PAGE</Link>
<Link href="/about">ABOUT US</Link>

</nav>

)



}