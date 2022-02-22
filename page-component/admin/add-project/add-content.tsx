import { MinusIcon, PlusIcon, XIcon } from '@heroicons/react/solid';
import { get } from 'lodash';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { IImage } from '../../../collection';
import { UploadImage } from '../../../components';
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
		<div className="px-3 py-2 absolute left-full translate-x-2 top-0 border rounded bg-white flex gap-3">
			{listBlock.map((item) => (
				<BlockMenuItem key={item.type} menu={item} />
			))}
		</div>
	);
}

function BtnAddBlock() {
	const ref = useRef<any>()
	const [open, setOpen] = useState<boolean>(false);

	const toggle = () => setOpen((o) => !o);

	useEffect(() => {
		function clickOutDiv(event: any) {
			if (ref.current && !ref.current.contains(event.target)) {
				setOpen(false)
			}

		}

		document.addEventListener('click', clickOutDiv)

		return () => {
			document.removeEventListener('click', clickOutDiv)

		}
	}, [])

	return (
		<div className="relative inline-block" ref={ref}>
			<span
				className="bg-blue-200 rounded w-10 h-10 flex items-center justify-center cursor-pointer"
				onClick={toggle}
			>

				<PlusIcon className='w-5' />
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
				<div className='w-full'>
					<UploadImage upload={changeImage} defaultValue={get(block, 'value')}>
						<div className="relative bg-white border rounded w-full h-40 flex items-center justify-center cursor-pointer">
							{get(block, 'value') ? (
								<Image src={get(block, 'value')} layout="fill" alt="" />
							) : (
								<div className="py-10">
									<PlusIcon className='w-5' />
								</div>
							)}
						</div>
					</UploadImage>
					<div className='mt-4'>
						<label className='text-sm font-semibold mb-2 block'>Url image:</label>
						<input className="w-full border block p-2 rounded text-sm" onChange={handleChange} value={get(block, 'value')} />
					</div>
				</div>

			);
		}
		if (type === 'video') {
			return (
				<textarea
					className="w-full border block p-2 rounded text-sm"
					value={block.value}
					onChange={handleChange}
					rows={4}
				/>
			);
		}
		return (
			<textarea
				className="w-full border block p-2 rounded text-sm"
				value={block.value}
				onChange={handleChange}
			/>
		);
	};

	return (
		<div className="rounded flex gap-2">
			<div
				className="rounded bg-red-200 w-10 h-10 flex items-center justify-center cursor-pointer"
				onClick={removeBlock}
			>
				<XIcon className='w-5' />
			</div>

			{renderContent()}
		</div>
	);
}

function AddContent() {
	const { project } = useFormProject();

	return (
		<div className="grid gap-10">
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
