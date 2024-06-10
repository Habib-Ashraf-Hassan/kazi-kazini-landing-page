'use client';
import Head from 'next/head';
import { useRouter } from "next/navigation";
export default function Construction() {
    const router = useRouter();
        function handleNavigate(){
            router.push('/')
        }
        
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Head>
        <title>Kazi Kazini-Sign Up</title>
      </Head>
      <div className="text-center p-8 md:p-0">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">Under Construction</h1>
        <p className="text-lg text-gray-600">
          We're working hard to finish the development of this site. Stay tuned!
        </p>
        <div className="flex justify-center m-6">
          <img src="/images/construction.png" alt="Under Construction" width={250} height={250} className=""/>
        </div>
        <button onClick={handleNavigate} className="px-6 py-3 bg-black text-white rounded hover:shadow-md hover:shadow-gray-500 transform transition-transform duration-200 hover:scale-105">
            Go Back
        </button>
      </div>
    </div>
  );
}
