import { FC } from 'react';
import { DateTagBody, DateTagIcon } from './DateTag.styled';

const DateTag: FC<DateTagProps> = ({ text }) => (
	<DateTagBody>
		<DateTagIcon />
		{text}
	</DateTagBody>
);

export default DateTag;

interface DateTagProps {
	text: string;
}
