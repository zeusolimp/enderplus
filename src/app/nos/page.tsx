import NavBar from "@/components/NavBar";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <>
      <NavBar />
      <main className="pt-20 px-[50px]">
        <div className="container mx-auto">
          {/* Personal Section */}
          <div className="flex flex-col md:flex-row items-center gap-12 py-16">
            <div className="w-full md:w-1/2">
              <Image
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                alt="Ender Narea"
                width={600}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h1 className="text-3xl font-bold mb-6">Ender Guevara Narea</h1>
              <p className="text-gray-600 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link href="#" className="px-6 py-2 bg-gray-800 hover:bg-gray-600 text-white rounded-lg shadow-md transition-transform hover:scale-105">
                  LinkedIn
                </Link>
                <Link href="#" className="px-6 py-2 bg-gray-800 hover:bg-gray-600 text-white rounded-lg shadow-md transition-transform hover:scale-105">
                  GitHub
                </Link>
                <Link href="#" className="px-6 py-2 bg-gray-800 hover:bg-gray-600 text-white rounded-lg shadow-md transition-transform hover:scale-105">
                  Twitter
                </Link>
                <Link href="#" className="px-6 py-2 bg-gray-800 hover:bg-gray-600 text-white rounded-lg shadow-md transition-transform hover:scale-105">
                  Instagram
                </Link>
                <Link href="#" className="px-6 py-2 bg-gray-800 hover:bg-gray-600 text-white rounded-lg shadow-md transition-transform hover:scale-105">
                  Facebook
                </Link>
              </div>
            </div>
          </div>

          {/* Project Section */}
          <div className="py-16">
            <h2 className="text-3xl font-bold mb-8">Projeto EnderPlus</h2>
            <div className="space-y-6 text-gray-600">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit.
              </p>
              <p>
                Nulla quis lorem ut libero malesuada feugiat. Nulla quis lorem ut libero malesuada feugiat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
              </p>
              <p>
                Curabitur aliquet quam id dui posuere blandit. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed porttitor lectus nibh.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}