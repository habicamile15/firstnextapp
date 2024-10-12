import connectdb from "@/app/helpers/connection";
import { ObjectId} from "mongodb";

export default async function user({params}:{params:{userid:string}}){
    const userid=new ObjectId(params.userid)
        const connection=await connectdb()
    const db=await connection.db()
    
    const user:any=await db.collection('classes').findOne({_id:userid});
    
return(
<div className="">


<p>
    {user.FirstName+" "}{user.lastName}
  </p>

</div>


)
}

