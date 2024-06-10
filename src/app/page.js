"use client";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import {MenuIcon} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";



export default function Home() {
  const router = useRouter();
        function handleGoTo(){
            router.push('construction');
        }
  return (
    <div className="container mx-auto p-4 md:p-8">
      <nav className="flex flex-wrap justify-between items-center py-4 md:py-6">
        <div className="text-lg cursor-pointer font-bold">KAZI KAZINI</div>
        {/* <p className='md:hidden block'>Menu</p> */}
        <DropdownMenu className="md:hidden block">
          <DropdownMenuTrigger className='md:hidden block'>
            
              <MenuIcon/>

          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Page</DropdownMenuItem>
            <DropdownMenuItem>Page</DropdownMenuItem>
            <DropdownMenuItem>Log in</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Sign Up</DropdownMenuLabel>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="md:flex hidden flex-wrap items-center space-x-4 md:space-x-8 mt-4 md:mt-0">
          <div className="text-lg cursor-pointer">Page</div>
          <div className="text-lg cursor-pointer">Page</div>
          <div onClick={handleGoTo} className="text-lg cursor-pointer">Log in</div>
          <button onClick={handleGoTo} className="px-4 py-2 bg-black text-white rounded hover:shadow-md hover:shadow-gray-500 transform transition-transform duration-200 hover:scale-105">Sign Up</button>

        </div>
      </nav>
      <header className="text-center py-10 md:py-20">
        <div className="space-y-6 flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-bold ">Closing The Gap</h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-[70ch]">
              We link employers with university students, offering experience and income to students and talented labour to employers
          </p>

          <button onClick={handleGoTo} className="px-6 py-3 bg-black text-white rounded hover:shadow-md hover:shadow-gray-500 transform transition-transform duration-200 hover:scale-105">
            Get Started
          </button>
        </div>
        <div className="mt-10 flex justify-center">
          <Image src="/images/laptop.jpg" alt="Main Image" width={900} height={269} className="rounded" />
          
        </div>
      </header>
      <section className="py-10 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold">Heading</h2>
          <p className="text-lg md:text-xl text-gray-500">Subheading to introduce testimonials</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 md:p-8 rounded shadow-lg">
            <p className="text-lg font-medium">“A terrific piece of praise”</p>
            <div className="flex items-center mt-4">
              {/* <Image src="" alt="Avatar 1" width={45} height={45} className="rounded-full" /> */}
              <img
                src="/images/prof-man.jpg"
                  alt="Main Image"
                  className="rounded-full object-cover border-2 border-gray-300"
                  width={100}
                  height={80}
                  style={{ aspectRatio: '120/120' }}
              />
              <div className="ml-4">
                <p className="font-medium">Name</p>
                <p className="text-sm text-gray-500">Description</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 md:p-8 rounded shadow-lg">
            <p className="text-lg font-medium">“A fantastic bit of feedback”</p>
            <div className="flex items-center mt-4">
              {/* <Image src="" alt="Avatar 2" width={45} height={45} className="rounded-full" /> */}
              <img
                src="/images/woman.jpg"
                  alt="Main Image"
                  className="rounded-full object-cover border-2 border-gray-300"
                  width={100}
                  height={80}
                  style={{ aspectRatio: '120/120' }}
              />
              <div className="ml-4">
                <p className="font-medium">Name</p>
                <p className="text-sm text-gray-500">Description</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 md:p-8 rounded shadow-lg">
            <p className="text-lg font-medium">“A genuinely glowing review”</p>
            <div className="flex items-center mt-4">
              {/* <Image src="" alt="Avatar 3" width={45} height={45} className="rounded-full" /> */}
              <img
                src="/images/man-stand.jpg"
                  alt="Main Image"
                  className="rounded-full object-cover border-2 border-gray-300"
                  width={100}
                  height={80}
                  style={{ aspectRatio: '120/120' }}
              />
              <div className="ml-4">
                <p className="font-medium">Name</p>
                <p className="text-sm text-gray-500">Description</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="pt-10 pb-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="md:mr-16 mb-8 md:mb-0">
              <h2 className="text-2xl font-bold">Kazi Kazini</h2>
            </div>
            <div className="flex gap-24 md:gap-48">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Topic</h3>
                <ul className="space-y-2">
                  <li className="text-lg text-gray-600">Page</li>
                  <li className="text-lg text-gray-600">Page</li>
                  <li className="text-lg text-gray-600">Page</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Topic</h3>
                <ul className="space-y-2">
                  <li className="text-lg text-gray-600">Page</li>
                  <li className="text-lg text-gray-600">Page</li>
                  <li className="text-lg text-gray-600">Page</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Topic</h3>
                <ul className="space-y-2">
                  <li className="text-lg text-gray-600">Page</li>
                  <li className="text-lg text-gray-600">Page</li>
                  <li className="text-lg text-gray-600">Page</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>


    </div>
  );
}
