import Image from 'next/image';
import React, { cloneElement, useEffect, useState } from 'react';
import { Modal } from '..';
import { IImage } from '../../collection';
import { ImageList } from './image-list';

interface Props {
	upload: (image: IImage) => void;
	defaultValue?: string;
	children?: JSX.Element;
}

function UploadImage({ children, upload, defaultValue }: Props) {
	const [urlImage, setUrlImage] = useState<string>();

	const [visible, setVisible] = useState<boolean>(false);

	const toggle = () => setVisible((v) => !v);

	const handleSelectImg = (image: IImage) => {
		upload(image);
		setUrlImage(image.url);
		toggle();
	};

	useEffect(() => {
		if (defaultValue) {
			setUrlImage(defaultValue);
		}

		fetch('/api/image');
	}, [defaultValue]);

	const renderChildren = children ? (
		cloneElement(children, { onClick: toggle })
	) : (
		<div
			onClick={toggle}
			className="relative w-10 h-10 flex items-center justify-center border"
		>
			{!!urlImage && <Image src={urlImage} alt="" width={100} height={100} />}
		</div>
	);

	return (
		<>
			{renderChildren}

			<Modal visible={visible} onClose={() => setVisible(false)}>
				<ImageList select={handleSelectImg} />
			</Modal>
		</>
	);
}

export { UploadImage };
