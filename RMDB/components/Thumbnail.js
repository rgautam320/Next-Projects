import { ThumbUpIcon, StarIcon } from "@heroicons/react/outline";
import Image from "next/image";

const Thumbnail = ({ result }) => {
	const BASE_URL = "https://image.tmdb.org/t/p/original";
	return (
		<div className="group cursor-pointer p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
			<Image src={`${BASE_URL}${result.backdrop_path || result.poster_path}`} layout="responsive" height={1080} width={1920} />
			<div className="p-2">
				<p className="truncate max-w-md">{result?.overview}</p>
				<h2 className="mt-1 text-xl text-white transition-all duration-100 ease-in-out group-hover:font-bold truncate">{result?.title || result?.original_name}</h2>
				<p className="flex items-center capitalize opacity-0 group-hover:opacity-100 text-sm">
					{`${result?.media_type} `}&#8226; {result?.release_date || result?.first_air_date} &#8226;
					<ThumbUpIcon className="h-5 mx-2" /> {result?.vote_count} &#8226;
					<StarIcon className="h-5 mx-2" /> {result?.vote_average}
				</p>
			</div>
		</div>
	);
};

export default Thumbnail;
