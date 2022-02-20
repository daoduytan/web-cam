import Link from "next/link";
import { useRouter } from "next/router";
import { Text, ToggleTheme } from "..";
import './menu.module.css';


const Menu = () => {
	const router = useRouter()



	return (
		<ul className="menu grid gap-6 text-center md:text-left list-none md:inline-flex">
			<li
				className={router.pathname == "/projects" ? "active" : ""}
			>
				<Link href="/projects">
					<a

					>
						<Text className="text-3xl  md:text-base xl:text-4xl" >My projects</Text>
					</a>
				</Link>
			</li>
			<li className={`${router.pathname == "/about" ? "active" : ""} md:mx-10`}>
				<Link href="/about">
					<a>
						<Text className="text-3xl md:text-base xl:text-4xl" >It is all me</Text>
					</a>
				</Link>
			</li>
			<li>
				<ToggleTheme>
					<span className="cursor-pointer">
						<Text className="text-3xl md:text-base xl:text-4xl" >( Light it )</Text>
					</span>
				</ToggleTheme>
			</li>
		</ul >
	)
}

export {
	Menu
}