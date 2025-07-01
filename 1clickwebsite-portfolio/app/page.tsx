"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import {
  Monitor,
  ShoppingCart,
  Rocket,
  Star,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  MessageCircle,
  Instagram,
  Music,
} from "lucide-react"

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("Tous")
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  // Services data
  const services = [
    {
      icon: Monitor,
      title: "Site Vitrine",
      description: "Design clé en main à partir de 200€",
      color: "from-red-500 to-red-700",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce",
      description: "Stripe/Shopify intégré, 500€",
      color: "from-purple-500 to-purple-700",
    },
    {
      icon: Rocket,
      title: "Optimisation SEO",
      description: "+50% de trafic en 1 mois",
      color: "from-gray-800 to-black",
    },
  ]

  // Projects data
  const projects = [
    {
      id: 1,
      title: "Restaurant Le Gourmet",
      category: "Vitrine",
      beforeImage: "/placeholder.svg?height=300&width=400",
      afterImage: "/placeholder.svg?height=300&width=400",
      description: "Refonte complète avec système de réservation",
    },
    {
      id: 2,
      title: "Boutique Mode Élégance",
      category: "E-commerce",
      beforeImage: "/placeholder.svg?height=300&width=400",
      afterImage: "/placeholder.svg?height=300&width=400",
      description: "E-commerce avec paiement Stripe intégré",
    },
    {
      id: 3,
      title: "Cabinet Dentaire Sourire",
      category: "Vitrine",
      beforeImage: "/placeholder.svg?height=300&width=400",
      afterImage: "/placeholder.svg?height=300&width=400",
      description: "Site moderne avec prise de RDV en ligne",
    },
    {
      id: 4,
      title: "Tech Store Pro",
      category: "E-commerce",
      beforeImage: "/placeholder.svg?height=300&width=400",
      afterImage: "/placeholder.svg?height=300&width=400",
      description: "Marketplace avec gestion multi-vendeurs",
    },
  ]

  // Testimonials data
  const testimonials = [
    {
      name: "Marie Dubois",
      role: "Propriétaire Restaurant",
      image: "/placeholder.svg?height=80&width=80",
      text: "Mon trafic a triplé ! Le site est magnifique et les réservations affluent.",
      rating: 5,
    },
    {
      name: "Pierre Martin",
      role: "E-commerçant",
      image: "/placeholder.svg?height=80&width=80",
      text: "Conversion +200% en 2 mois. Un travail exceptionnel, je recommande !",
      rating: 5,
    },
    {
      name: "Sophie Laurent",
      role: "Dentiste",
      image: "/placeholder.svg?height=80&width=80",
      text: "Site professionnel et moderne. Mes patients adorent prendre RDV en ligne.",
      rating: 5,
    },
  ]

  // Filter projects
  const filteredProjects =
    activeFilter === "Tous" ? projects : projects.filter((project) => project.category === activeFilter)

  // Navigation
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent"
          >
            1ClickWebsite
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {["Accueil", "Services", "Projets", "Témoignages", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="hover:text-orange-500 transition-colors duration-300"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
          >
            <nav className="flex flex-col space-y-4 p-4">
              {["Accueil", "Services", "Projets", "Témoignages", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-left hover:text-orange-500 transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-purple-600 to-black" />

        {/* Abstract SVG Background */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
            <path d="M0,400 Q300,200 600,400 T1200,400 V800 H0 Z" fill="url(#wave1)" />
            <path d="M0,500 Q400,300 800,500 T1200,500 V800 H0 Z" fill="url(#wave2)" />
            <defs>
              <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.3)" />
              </linearGradient>
              <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.05)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.2)" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.h1
            {...fadeInUp}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Je transforme vos idées en{" "}
            <span className="bg-gradient-to-r from-red-400 to-purple-500 bg-clip-text text-transparent">
              sites web ultra-rapides
            </span>
          </motion.h1>

          <motion.p {...fadeInUp} transition={{ delay: 0.2 }} className="text-xl md:text-2xl mb-8 opacity-90">
            Designs sur-mesure en 48h max
          </motion.p>

          <motion.div {...fadeInUp} transition={{ delay: 0.4 }}>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg rounded-full shadow-2xl hover:shadow-red-500/25 transition-all duration-300 transform hover:scale-105"
            >
              Demander un devis gratuit
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
              Mes Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Des solutions web complètes pour votre réussite</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white dark:bg-gray-900">
                  <CardContent className="p-8 text-center">
                    <div
                      className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projets" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
              Mes Réalisations
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">Découvrez les transformations avant/après</p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              {["Tous", "E-commerce", "Vitrine"].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${
                    activeFilter === filter
                      ? "bg-red-600 text-white shadow-lg"
                      : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="group relative overflow-hidden rounded-2xl shadow-xl"
              >
                <div className="relative h-64 md:h-80">
                  {/* Before Image */}
                  <div className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0">
                    <img
                      src={project.beforeImage || "/placeholder.svg"}
                      alt={`${project.title} - Avant`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Avant
                    </div>
                  </div>

                  {/* After Image */}
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <img
                      src={project.afterImage || "/placeholder.svg"}
                      alt={`${project.title} - Après`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Après
                    </div>
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-sm opacity-90">{project.description}</p>
                      <span className="inline-block mt-2 px-3 py-1 bg-purple-600 rounded-full text-xs">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="témoignages" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
              Témoignages Clients
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Ce que disent mes clients satisfaits</p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl text-center"
            >
              <img
                src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                alt={testimonials[currentTestimonial].name}
                className="w-20 h-20 rounded-full mx-auto mb-6 object-cover"
              />

              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-lg md:text-xl mb-6 italic text-gray-700 dark:text-gray-300">
                "{testimonials[currentTestimonial].text}"
              </p>

              <div>
                <h4 className="font-bold text-lg">{testimonials[currentTestimonial].name}</h4>
                <p className="text-gray-600 dark:text-gray-400">{testimonials[currentTestimonial].role}</p>
              </div>
            </motion.div>

            {/* Navigation Buttons */}
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={() => setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? "bg-red-600" : "bg-gray-300 dark:bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
              Contactez-moi
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Prêt à transformer votre présence en ligne ?</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <Card className="shadow-2xl border-0 bg-white dark:bg-gray-900">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Nom</label>
                      <Input
                        placeholder="Votre nom"
                        className="border-2 border-gray-200 dark:border-gray-700 focus:border-red-500 transition-colors duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Email</label>
                      <Input
                        type="email"
                        placeholder="votre@email.com"
                        className="border-2 border-gray-200 dark:border-gray-700 focus:border-red-500 transition-colors duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Message</label>
                    <Textarea
                      placeholder="Décrivez votre projet..."
                      rows={5}
                      className="border-2 border-gray-200 dark:border-gray-700 focus:border-red-500 transition-colors duration-300"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-3 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Envoyer
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-3xl font-bold mb-6 bg-gradient-to-r from-red-400 to-purple-500 bg-clip-text text-transparent">
              1ClickWebsite
            </div>

            <div className="flex justify-center space-x-6 mb-8">
              <a
                href="https://wa.me/33123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com/1clickwebsite"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-600 hover:bg-purple-700 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://tiktok.com/@1clickwebsite"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black hover:bg-gray-900 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
              >
                <Music className="w-6 h-6" />
              </a>
            </div>

            <p className="text-gray-400">© 2024 1ClickWebsite. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
