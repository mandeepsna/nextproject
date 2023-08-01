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
     <h2>Basic Routing </h2>
     <div>
     <Link href={'/'}>Home</Link>
     <Link href={'/login'}>Login</Link>
     <Link href={'/about'}>About </Link>
     <Link href={'/contact'}>Contact</Link>
     <div>
     <button className='btn btn-primary me-3' onClick={()=>navigate('/login')} >Login</button>
     <button className='btn btn-secondary me-3' onClick={()=>navigate('/about')}>About</button>
     <button className='btn btn-info' onClick={()=>navigate('/contact')}>Contact</button>
     </div>
     </div>
    </main>
  )
}

