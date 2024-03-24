import React, { useCallback, useEffect, useMemo, useState } from "react";
import Background from "../../assets/images/CartesiImageBg.png";
import LogoCartesiLabs from "../../assets/images/LogoCartesiLabs.svg";
import { Filter } from "../../components/Filter";
import { Search } from "../../components/Search";
import { Card } from "../../components/Card";
import { Tutorial } from "../../types/Tutorial";
import Spinner from "../../components/loaders/Spinner";
import { useNavigate } from "react-router";
import { useTutorials } from "../../contexts/Tutorial";
import Paginator from "../../components/Paginator";
import _debounce from "lodash/debounce";


export const Home = () => {

	const [searchKey, setSearchKey] = useState<string>("");
	const [tagFilters, setTagFilters] = useState<string[]>([]);
	const { currentTutorialsPage, onRequestNextPage, getTutorialsByName } = useTutorials();
	const currentTutorials = useMemo(() => {
		if (currentTutorialsPage) {
			return currentTutorialsPage.data;
		}
		return null;
	}, [currentTutorialsPage?.page]);

	const navigator = useNavigate();

	useEffect(() => {
		onRequestNextPage(currentTutorialsPage?.page ?? 1, tagFilters);
	}, [tagFilters]);


	const handleDebounceFn = (inputValue: string) => {
		getTutorialsByName(inputValue, tagFilters);
	};

	const debounceFn = useCallback(_debounce(handleDebounceFn, 500), []);


	const getContent = () => {
		if (currentTutorials == null) {
			return (
				<div className="w-full mt-8 flex justify-center items-center">
					<Spinner color="primary" size={50} />
				</div>
			);
		}
		if (currentTutorials.length === 0) {
			return (
				<div className="w-full mt-8 flex justify-center items-center">
					<p className="text-white text-lg">No tutorials found</p>
				</div>
			);
		}

		return (
			<div className="w-full grid lg:grid-cols-2 grid-cols-1 mt-3 gap-5">
				{
					currentTutorials.map((card: Tutorial, index: number) =>
						<Card
							info={card}
							key={index}
							onStartRequest={() => navigator(`/tutorial/${card.id}`)}
						/>
					)
				}
			</div>
		);
	};

	return (
		<div className="bg-black">
			<img
				src={Background}
				className="absolute inset-0 w-full object-cover h-[260px] "
				alt="Background Image"
			></img>
			<div className="w-full pt-6 pb-8 flex justify-center items-center relative mt-20">
				<img
					src={LogoCartesiLabs}
					alt="Logo Cartesi Labs"
					className="max-w-[330px] w-full"
				/>
			</div>

			<div className="bg-radial-gradient w-full h-screen">
				<div className="pt-20 flex items-start lg:w-3/4">
					<Filter values={tagFilters} onFilterSelected={(newList) => setTagFilters(newList)} />
					<div className="flex pl-7 pr-7 lg:pr-0 flex-1 flex-col mb-20">
						<Search value={searchKey} onChange={(text: string) => {
							setSearchKey(text);
							debounceFn(text);
						}} />
						{
							getContent()
						}
						{
							currentTutorialsPage && currentTutorialsPage?.totalPages > 1 &&
							<Paginator
								currentPage={currentTutorialsPage?.page ?? 1}
								totalPages={currentTutorialsPage?.totalPages ?? 1}
								onPageChange={(num) => onRequestNextPage(num, tagFilters)}
							/>
						}
					</div>
				</div>
			</div>
		</div>
	);
};
