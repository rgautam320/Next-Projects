import Thumbnail from "./Thumbnail";

function Result({ results }) {
	return (
		<>
			<div className="px-5 my-16 sm:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
				{results.map((val) => (
					<Thumbnail key={val?.id} result={val} />
				))}
			</div>
		</>
	);
}

export default Result;
