import Link from 'next/link'
import { Logo } from '..'
import styles from './logo-header.module.css'

const LogoHeader = () => {
	return (
		<div className={`${styles.logo} relative`}>
			<Link href="/">
				<a className='block'>
					<Logo />
				</a>
			</Link>
		</div>
	)
}

export {
	LogoHeader
}