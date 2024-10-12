
import Link from "next/link";
import connectdb from "./helpers/connection";



export default async function Home() {

const connection=await connectdb()
const db=await connection.db()

const users=await db.collection('classes').find().toArray();
// console.log(users);
  return (
    
<div className="w-80 m-auto">

<h1 className="font-bold text-2xl">NEXT.JS</h1>
<h1>These Data are extracted from MONGODB</h1>
<h1>=====================================</h1>

<div className=" h-52 w-fit flex gap-3 bg-slate-500 ">

{users.map(user=>(

<Link href={`/users/${user._id}`} className="w-52 shadow bg-slate-50 h-40">
  <p>
    {user.FirstName+" "}{user.lastName}
  </p>
</Link>



))}

</div>

</div>



  );
}
