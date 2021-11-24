import { FC } from 'react';
import { connect } from 'react-redux';
import { TopScrollBtn, TopScrollIcon } from './TopScroll.styled';

const TopScroll: FC<TopScrollProps> = ({ pageYOffset }) => {
	const handleClick = () => window.scrollTo({ behavior: 'smooth', top: 0 });

	return (
		<TopScrollBtn pageYOffset={pageYOffset} onClick={handleClick}>
			<TopScrollIcon />
		</TopScrollBtn>
	);
};

const mapStateToProps = (state: RootState) => ({
	pageYOffset: state.windowReducer.window.pageYOffset
});

export default connect(mapStateToProps)(TopScroll);

interface TopScrollProps {
	pageYOffset: number;
}
