import { Routes, Route, useLocation } from "react-router-dom";
import { useTheme } from "./ThemeContext";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PixelBackground from "./PixelBackground";
import Intro from "./components/Intro";
import GamifiedPage from "./components/GamifiedPage";
import EducationTimeLine from "./components/EducationTimeLine";
import Projects from "./components/Projects";
import ProjectDetail from "./components/ProjectDetails";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const AppLayout = () => {
    const { theme } = useTheme();
    const location = useLocation();

    // Hide Navbar on /projects and /projects/:id
    const hideNavbar = location.pathname.startsWith("/projects");

    return (
        <div className="relative min-h-screen text-gray-900 dark:text-white">
            {theme === "light" && (
                <div className="absolute inset-0 w-full h-full animated-bg -z-10" />
            )}

            {theme === "dark" && <PixelBackground />}

            <div className="relative z-10">
                <main>
                    {!hideNavbar && <Navbar />}
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <>
                                    {theme === "light" ? (
                                        <>
                                            <Hero />
                                            <Intro />
                                            <Projects />
                                            {/* <EducationTimeLine /> */}
                                            <Skills />
                                            <Contact />
                                        </>
                                    ) : (
                                        <GamifiedPage />
                                    )}
                                </>
                            }
                        />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/projects/:id" element={<ProjectDetail />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default AppLayout;
