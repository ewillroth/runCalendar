import * as React from 'react';

export interface IDropdownProps {
	value: string | number;
}

const Dropdown = ({ value }: IDropdownProps) => {
	return <div>Dropdown value: {value}</div>;
};

export default Dropdown;
