import { FC } from 'react';
import { ThemeBtnLink } from './ThemeBtn.styled';

const ThemeBtn: FC<ThemeBtnProps> = ({ link, children }) => (
	<div>
		<ThemeBtnLink to={link}>{children}</ThemeBtnLink>
	</div>
);

export default ThemeBtn;

interface ThemeBtnProps {
	link: string;
}
