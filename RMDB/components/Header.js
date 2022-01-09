import Image from "next/image";
import HeaderItem from "./HeaderItem";
import { HomeIcon, BadgeCheckIcon, LightningBoltIcon, SearchIcon, UserIcon, CollectionIcon } from "@heroicons/react/outline";

function Header() {
	return (
		<>
			<header className="flex flex-col sm:flex-row m-6 justify-between">
				<div className="flex flex-grow justify-evenly max-w-2xl">
					<HeaderItem Icon={HomeIcon} title="HOME" />
					<HeaderItem Icon={LightningBoltIcon} title="TRENDING" />
					<HeaderItem Icon={BadgeCheckIcon} title="VERIFIED" />
					<HeaderItem Icon={CollectionIcon} title="COLLECTIONS" />
					<HeaderItem Icon={SearchIcon} title="SEARCH" />
					<HeaderItem Icon={UserIcon} title="ACCOUNT" />
				</div>
				<Image className="object-contain" src="/RMDB.png" height={60} width={125} alt="Logo" />
			</header>
		</>
	);
}

export default Header;
