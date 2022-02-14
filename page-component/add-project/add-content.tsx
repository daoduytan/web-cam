import { get } from 'lodash';
import Image from 'next/image';
import { useState } from 'react';
import { IImage } from '../../collection';
import { UploadImage } from '../../components';
import { useFormProject } from './state';

interface IBlock {
	type: 'text' | 'image' | 'video';
	label: string;
}

const listBlock: IBlock[] = [
	{ type: 'text', label: 'Text' },
	{ type: 'image', label: 'Image' },

	{ type: 'video', label: 'Video' },
];

function BlockMenuItem({ menu }: { menu: IBlock }) {
	const { updateFieldProject, project } = useFormProject();

	const handleClick = () => {
		updateFieldProject({
			content: [
				...get(project, 'content', []),
				{
					key: Date.now(),
					type: menu.type,
					value: '',
				},
			],
		});
	};

	return (
		<span className="cursor-pointer" onClick={handleClick}>
			{menu.label}
		</span>
	);
}

function BlockMenu() {
	return (
		<div className="px-3 py-2 absolute left-full top-0 border rounded bg-white flex gap-3">
			{listBlock.map((item) => (
				<BlockMenuItem key={item.type} menu={item} />
			))}
		</div>
	);
}

function BtnAddBlock() {
	const [open, setOpen] = useState<boolean>(true);

	const toggle = () => setOpen((o) => !o);

	return (
		<div className="relative inline-block">
			<span
				className="bg-pink-50 w-10 h-10 flex items-center justify-center cursor-pointer"
				onClick={toggle}
			>
				+
			</span>
			{open && <BlockMenu />}
		</div>
	);
}

function BlockContent({ type, block }: any) {
	const { project, updateFieldProject } = useFormProject();

	const removeBlock = () => {
		const newContent = get(project, 'content', []).filter(
			(item: any) => item.key !== block.key
		);

		updateFieldProject({
			content: newContent,
		});
	};

	const handleChange = (e: any) => {
		const newContent = get(project, 'content', []).map((item: any) => {
			if (item.key === block.key) {
				return {
					...item,
					value: e.target.value,
				};
			}
			return item;
		});

		updateFieldProject({
			content: newContent,
		});
	};

	const changeImage = (image: IImage) => {
		const newContent = get(project, 'content', []).map((item: any) => {
			if (item.key === block.key) {
				return {
					...item,
					value: image.url,
				};
			}
			return item;
		});

		updateFieldProject({
			content: newContent,
		});
	};

	const renderContent = () => {
		if (type === 'image') {
			return (
				<UploadImage upload={changeImage} defaultValue={get(block, 'value')}>
					<div className="relative bg-white border rounded w-full h-40 flex items-center justify-center cursor-pointer">
						{get(block, 'value') ? (
							<Image src={get(block, 'value')} layout="fill" alt="" />
						) : (
							<div className="py-10">+</div>
						)}
					</div>
				</UploadImage>
			);
		}
		if (type === 'video') {
			return (
				<input
					className="w-full block p-2 rounded"
					type="text"
					onChange={handleChange}
					value={block.value}
				/>
			);
		}
		return (
			<textarea
				className="w-full block p-2 rounded"
				value={block.value}
				onChange={handleChange}
			/>
		);
	};

	return (
		<div className="rounded flex gap-2">
			<div
				className="rounded bg-gray-200 w-10 h-10 flex items-center justify-center cursor-pointer"
				onClick={removeBlock}
			>
				x
			</div>

			{renderContent()}
		</div>
	);
}

function AddContent() {
	const { project } = useFormProject();

	return (
		<div className="grid gap-2">
			{get(project, 'content', []).map((item: any) => (
				<BlockContent key={item.key} type={item.type} block={item} />
			))}
			<div>
				<BtnAddBlock />
			</div>
		</div>
	);
}

export { AddContent };
