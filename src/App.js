import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import EndFooter from "./Components/Footer/EndFooter";

const App = () => {
    const [activeSection, setActiveSection] = useState('strategy');
    const [showScrollTop, setShowScrollTop] = useState(false);
	const handleScroll = () => {
		const sections = document.querySelectorAll("section");
		let currentSection = "strategy";
		sections.forEach((section) => {
			const sectionTop = section.offsetTop;
			if (window.scrollY >= sectionTop - 60) {
				currentSection = section.getAttribute("id");
			}
		});
		setActiveSection(currentSection);

		if (window.scrollY > 300) {
			setShowScrollTop(true);
		} else {
			setShowScrollTop(false);
		}
	};

	const scrollToSection = (id) => {
		const section = document.getElementById(id);
		section.scrollIntoView({ behavior: "smooth" });
	};

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return (
		<div className="flex flex-col min-h-screen">
			{/* <Routing /> */}
			<Navbar activeSection={activeSection} scrollToSection={scrollToSection} showScrollTop={showScrollTop} />
			<Home />
			<EndFooter />
            {showScrollTop && (
                <button className="scroll-to-top" onClick={scrollToTop}>↑</button>
            )}
		</div>
	);
};

export default App;
