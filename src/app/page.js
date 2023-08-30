import HeroSection from '../../components/HeroSection';
import ProjectsSection from '../../components/ProjectsSection';
import AboutSection from '../../components/AboutSection';

// try min-h-screen

export default function Home() {
  
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">

        <HeroSection />
        <AboutSection />
        <ProjectsSection />
    </main>
  )
}
