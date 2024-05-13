import React, { useState } from 'react';

const Landing = () => {
	const [distance, setDistance] = useState('');
	const [isOpen, setIsOpen] = useState(false);
	const popoverRef = React.useRef<HTMLDivElement>(null);

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setDistance(event.target.value);
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		// Do something with the distance value, such as storing it in state or making an API call
		console.log(distance);
		setIsOpen(false); // Close the popover
	};

	const openPopover = () => {
		setIsOpen(true);
	};

	const closePopover = () => {
		setIsOpen(false);
	};

	React.useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
				closePopover();
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return (
		<div>
			<button onClick={openPopover}>Open Popover</button>
			{isOpen && (
				<div ref={popoverRef}>
					<form onSubmit={handleSubmit}>
						<input type="text" placeholder="Enter distance" value={distance} onChange={handleInputChange} />
						<button type="submit">Submit</button>
					</form>
				</div>
			)}
		</div>
	);
};

export default Landing;