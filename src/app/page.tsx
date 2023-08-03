'use client'
import Link from 'next/link';
import {useState} from 'react'
import { useRouter } from 'next/navigation';
export default function Home() {
 let[name,setName]=useState('Mandeep');
 const router=useRouter();
 const navigate=(pagename: string)=>
 {
        router.push(pagename); 
 }
  return (
    <main >
     <h2 className='text-center text-secondary mb-5'>Basic Routing </h2>
     <div className='fs-6'>
     <Link href={'/'}>Home</Link>
     <Link href={'/login'}>Login</Link>
     <Link href={'/about'}>About </Link>
     <Link href={'/contact'}>Contact</Link>
     <Link href={'/fetchapi'}>Fetch API(Client Component)</Link>
     <Link href={'/fetchapiserver'}>Fetch API(Server Component)</Link>
     <Link href={'/styling'}>Styling</Link>
     <Link href={'/stylingmodule'}>Style with Module</Link>
     <Link href={'/conditionalstyling'}>Conditional Styling </Link>
     <Link href={'/imagetag'}>Image</Link>
     <Link href={'/scripttag'}>Script Tag</Link>
     <Link href={'/loader'}>Loader</Link>

     <div className='mt-5 '>
     <button className='btn btn-primary me-5' onClick={()=>navigate('/login')} >Login</button>
     <button className='btn btn-secondary me-5' onClick={()=>navigate('/about')}>About</button>
     <button className='btn btn-info' onClick={()=>navigate('/contact')}>Contact</button>
    
     </div>
     </div>
    </main>
  )
}

