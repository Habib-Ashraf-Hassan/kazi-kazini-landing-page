import Image from 'next/image';

export default function Home() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <nav className="flex flex-wrap justify-between items-center py-4 md:py-6">
        <div className="text-lg font-bold">KAZI KAZINI</div>
        <div className="flex flex-wrap items-center space-x-4 md:space-x-8 mt-4 md:mt-0">
          <div className="text-lg">Page</div>
          <div className="text-lg">Page</div>
          <div className="text-lg">Log in</div>
          <button className="px-4 py-2 bg-black text-white rounded">Sign Up</button>
        </div>
      </nav>
      <header className="text-center py-10 md:py-20">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold">Closing The Gap</h1>
          <p className="text-lg md:text-xl text-gray-500">
            We link employers with university students effortlessly, offering experience and income to students and talented labour to employers
          </p>
          <button className="px-6 py-3 bg-black text-white rounded">Get Started</button>
        </div>
        <div className="mt-10">
          {/* <Image src="/workspace.jpg" alt="Main Image" width={857} height={269} className="rounded" /> */}
          <img
            src="https://picsum.photos/500/300"
            alt="Main Image"
            className="w-full h-auto rounded"
            style={{ aspectRatio: '857/269' }}
          />

          
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
                src="https://picsum.photos/100/100"
                  alt="Main Image"
                  className="rounded-full"
                  style={{ aspectRatio: '45/45' }}
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
                src="https://picsum.photos/100/100"
                  alt="Main Image"
                  className="rounded-full"
                  style={{ aspectRatio: '45/45' }}
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
                src="https://picsum.photos/100/100"
                  alt="Main Image"
                  className="rounded-full"
                  style={{ aspectRatio: '45/45' }}
              />
              <div className="ml-4">
                <p className="font-medium">Name</p>
                <p className="text-sm text-gray-500">Description</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="py-20 bg-gray-100">
          <div className="flex flex-col space-y-8 md:flex-row md:space-y-0 md:space-x-8 md:justify-between">
            <div>
              <h2 className="text-2xl font-bold">Kazi Kazini</h2>
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
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Topic</h3>
              <ul className="space-y-2">
                <li className="text-lg text-gray-600">Page</li>
                <li className="text-lg text-gray-600">Page</li>
                <li className="text-lg text-gray-600">Page</li>
              </ul>
            </div>
            
          </div>
      </footer>

    </div>
  );
}
