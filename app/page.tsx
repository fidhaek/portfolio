'use client'

import { useState, useEffect } from 'react'

// Contact Form Component
function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="contact-name" className="block text-gray-700 mb-2">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Your Name"
          required
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="block text-gray-700 mb-2">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="your.email@example.com"
          required
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-gray-700 mb-2">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Your message here..."
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Send Message
      </button>
    </form>
  )
}

// Updated Project card component with real links
function ProjectCard({ 
  title, 
  description, 
  technologies, 
  githubLink, 
  vercelLink 
}: { 
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  vercelLink: string;
}) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
      <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center relative">
        <div className="absolute inset-0 bg-black/10 hover:bg-black/20 transition-colors"></div>
        <span className="text-white text-xl font-bold relative z-10 text-center px-4">{title}</span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm px-3 py-1 rounded-full border border-blue-200"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <a 
            href={vercelLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center block"
          >
            🌐 Live Demo
          </a>
          <a 
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 border-2 border-gray-300 text-gray-700 py-2 rounded-lg font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 text-center block"
          >
            💻 Code
          </a>
        </div>
      </div>
    </div>
  )
}

// Skills component
function SkillsSection() {
  const skills = [
    { name: 'HTML/CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 80 },
    { name: 'Next.js', level: 75 },
    { name: 'Tailwind CSS', level: 85 },
    { name: 'TypeScript', level: 70 },
    { name: 'Git', level: 80 },
    { name: 'Node.js', level: 65 },
  ]

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-center mb-4">
                <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  {skill.level}%
                </div>
                <h3 className="font-semibold text-gray-800">{skill.name}</h3>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Main Portfolio Component
export default function Home() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Show loading state during hydration
  if (!isMounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Loading portfolio...</p>
          </div>
        </div>
      </div>
    )
  }

  const handleNavigation = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-gray-800">FIDHA ERANIKKAL</div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavigation(item)}
                  className="capitalize transition-all duration-300 text-gray-600 hover:text-blue-500"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold">
            YN
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Hi, I am <span className="text-blue-600">Fidha Eranikkal</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            A passionate developer creating beautiful and functional web experiences
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button 
              onClick={() => handleNavigation('projects')}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View My Work
            </button>
            <button 
              onClick={() => handleNavigation('contact')}
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              Contact Me
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">My Journey</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                I am a passionate developer who loves creating amazing web experiences. 
                I started my coding journey and have been constantly learning and growing ever since.
              </p>
              <p className="text-gray-600 leading-relaxed">
                When I am not coding, you can find me exploring new technologies. 
                I believe in continuous learning and always strive to improve my skills.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">1+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">10+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="bg-green-50 p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">5+</div>
                <div className="text-gray-600">Technologies</div>
              </div>
              <div className="bg-orange-50 p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
                <div className="text-gray-600">Dedication</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SkillsSection />

      {/* Updated Projects Section */}
      <section id="projects" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">My Projects</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one represents a learning journey and a problem solved.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Project 1 - Replace with your actual project */}
            <ProjectCard 
          
           title="Stone Paper Scissor Game"
           description="An interactive web-based game built with JavaScript where users can play the classic Stone, Paper, Scissor game against the computer. Features score tracking, responsive design, and smooth animations."
           technologies={["HTML5", "CSS3", "JavaScript", "Responsive Design"]}
           githubLink="https://github.com/fidhaek/stone-paper-scissor"
           vercelLink="https://rock-paper-scissors-wheat-nine.vercel.app/"
            />
            
            
           
            
            {/* Project 3 - Replace with your actual project */}
            <ProjectCard 
              title="Campus Magazine Website"
              description="A digital platform for campus news and articles featuring a clean, responsive layout. Includes article categories, search functionality, and an admin panel for content management."
              technologies={["React", "CSS3", "JavaScript", "Responsive Design,tailwind"]}
              githubLink="https://github.com/fidhaek/creative-campus"
              vercelLink="https://campus-creatives-app.vercel.app/"
/>
          
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Get In Touch</h2>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Lets Connect</h3>
                <p className="text-gray-600 mb-6">
                  Iam always open to discussing new opportunities, creative ideas, 
                  or just having a friendly chat about technology.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600">📧</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">Email</div>
                      <div className="text-gray-600">fidhaek19@gmail.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <span className="text-green-600">💼</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">LinkedIn</div>
                      <a 
                        href="https://linkedin.com/in/your-profile" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        linkedin.com/in/yourprofile
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <span className="text-purple-600">🐙</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">GitHub</div>
                      <a 
                        href="https://github.com/fidhaek" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        github.com/fidhaek
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 Your Name. All rights reserved.</p>
          <p className="text-gray-400 mt-2">Built with Next.js and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  )
}