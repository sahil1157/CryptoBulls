import React, { useEffect } from "react";
import IndexStrategy from "../Components/HeroHome/Strategies";
import IndexChoose from "../Components/ChooseCrypto/IndexChoose";
import IndexIntro from "../Components/IntroCryptoBulls/IndexIntro";
import IndexService from "../Components/Services/IndexService";
import IndexQuestions from "../Components/Questions/IndexQuestions";

const Home = () => {
	return (
		<div className="flex w-full flex-col h-full">
			<div>
				<IndexStrategy />
			</div>
			<div>
				<IndexChoose />
			</div>
			<div>
				<IndexIntro />
			</div>
			<div>
				<IndexService />
			</div>
			<div>
				<IndexQuestions />
			</div>
		</div>
	);
};

export default Home;
