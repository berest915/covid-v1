import styled, { css } from 'styled-components';
import coverImage from '../images/cover-image.png';

// // latter:: try put css-const in public folder
import { CONTAINER_BG, CONTAINER_PAD } from '../const/css-constant';
const { CONTAINER_BG_DARKER, CONTAINER_BG_LIGHTER } = CONTAINER_BG;
const { PAD_MINOR, PAD_MAJOR } = CONTAINER_PAD;

//! { css }
const cssCoverImage = css`
	background-image: url(${coverImage});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	position: relative;
`;
//! styled
//! main-container
export const MainCardContainer = styled.div`
  display: flex;
	height: 100vh;
	max-height: 100vh;
	background-color: ${props => (props.darker ? CONTAINER_BG_DARKER : CONTAINER_BG_LIGHTER)};
	padding: ${props => (props.pad === 'minor' ? PAD_MINOR : PAD_MAJOR)};
	${props => props.enCoverImage && cssCoverImage}
`;
