import { Code } from 'lucide-react';
import { Eye } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with React and Node.js',
    technologies: ['React', 'Node.js', 'MongoDB'],
    imageUrl: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1024',
    liveUrl: 'https://example-ecommerce.com'
  },
  {
    id: 2,
    title: 'Project Management Tool',
    description: 'Collaborative project management web application',
    technologies: ['React', 'Express', 'PostgreSQL'],
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1024',
    liveUrl: 'https://example-project-manager.com'
  }
];

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

      {/* Projects Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
                  >
                    <Eye className="mr-2 w-5 h-5" /> View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}