import { Code, Eye, Github } from 'lucide-react';

const fullStackProjects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-featured e-commerce platform with real-time inventory management',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    imageUrl: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1024',
    githubUrl: 'https://github.com/yourusername/ecommerce',
    liveUrl: 'https://ecommerce-demo.com'
  },
  {
    id: 2,
    title: 'Project Management Dashboard',
    description: 'Collaborative project management tool with real-time updates',
    technologies: ['React', 'Express', 'PostgreSQL', 'WebSocket'],
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1024',
    githubUrl: 'https://github.com/yourusername/project-management',
    liveUrl: 'https://project-management-demo.com'
  }
];

export default function FullStackProjects() {
  return (
    <div className="pt-24 container mx-auto px-4">
      <div className="flex items-center justify-center mb-12">
        <Code className="w-12 h-12 text-green-600 dark:text-green-400 mr-4" />
        <h1 className="text-4xl font-bold">Full Stack Projects</h1>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {fullStackProjects.map((project) => (
          <div 
            key={project.id}
            className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
          >
            <img 
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {project.description}
              </p>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-2">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex space-x-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
                >
                  <Github className="w-5 h-5 mr-2" />
                  Code
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
                >
                  <Eye className="w-5 h-5 mr-2" />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}