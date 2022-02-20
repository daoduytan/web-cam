import Image, { ImageProps } from 'next/image';
import styles from './image-cus.module.css'

interface Props extends ImageProps {
	src: string
}

function ImageCus({ src }: Props) {
	return (
		<div className={styles.unsetImg}>
			<Image alt="Mountains" src={src} layout="fill" className={styles.customImg}
			/>
		</div>
	)
}

export { ImageCus };
