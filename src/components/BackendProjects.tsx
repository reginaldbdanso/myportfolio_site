import { Server, Eye, Github } from 'lucide-react';

const backendProjects = [
  {
    id: 1,
    title: 'API Gateway Service',
    description: 'High-performance API gateway with rate limiting and caching',
    technologies: ['Node.js', 'Redis', 'Docker'],
    githubUrl: 'https://github.com/yourusername/api-gateway',
    demoUrl: 'https://api-gateway-demo.com'
  },
  {
    id: 2,
    title: 'Message Queue System',
    description: 'Distributed message queue for handling high-throughput events',
    technologies: ['Go', 'RabbitMQ', 'gRPC'],
    githubUrl: 'https://github.com/yourusername/message-queue',
    demoUrl: 'https://queue-demo.com'
  }
];

export default function BackendProjects() {
  return (
    <div className="pt-24 container mx-auto px-4">
      <div className="flex items-center justify-center mb-12">
        <Server className="w-12 h-12 text-blue-600 dark:text-blue-400 mr-4" />
        <h1 className="text-4xl font-bold">Backend Projects</h1>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {backendProjects.map((project) => (
          <div 
            key={project.id}
            className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {project.description}
            </p>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-2">Technologies:</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
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
                className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <Github className="w-5 h-5 mr-2" />
                Code
              </a>
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <Eye className="w-5 h-5 mr-2" />
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}