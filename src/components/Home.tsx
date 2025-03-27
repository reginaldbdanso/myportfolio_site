import { Code } from 'lucide-react';

export default function Home() {
  return (
    <div className="pt-16">
      {/* Banner */}
      <div className="w-full h-[60vh] relative overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?auto=format&fit=crop&q=80&w=2048" 
          alt="Banner" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="flex justify-center items-center mb-8">
              <Code className="mr-4 w-16 h-16 text-blue-400" />
              <h1 className="text-5xl font-bold">Your Name</h1>
            </div>
            <h2 className="text-2xl font-light max-w-2xl mx-auto">
              Crafting elegant solutions through code
            </h2>
          </div>
        </div>
      </div>

      {/* Welcome Message */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Welcome to My Portfolio</h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          I'm a passionate software engineer specializing in building robust backend systems 
          and full-stack applications. Explore my projects to see how I bring ideas to life 
          through clean, efficient code.
        </p>
      </div>
    </div>
  );
}