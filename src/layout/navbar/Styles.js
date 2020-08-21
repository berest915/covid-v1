import styled, { css } from 'styled-components';

export const Nav = styled.div`
	background: linear-gradient(
		70deg,
		rgba(231, 231, 242, 1) 60%,
		rgba(127, 127, 135, .9) 97%
  );
  box-shadow: 0 2px 5px 0 lightgray;
	position: fixed;
	z-index: 5;
	padding: 2vh 8%;
	width: 100%;
	height: 12vh;
	max-height: 12vh;

	display: flex;
`;
export const LeftContainer = styled.div`
	display: inline-flex;
	flex: 2;
	img {
		padding-right: 0.8rem;
		width: 60px;
	}
	div {
		display: inline-flex;
		flex-direction: column;
		font-weight: bold;
		justify-content: center;
		font-family: Roboto;
	}
	.span {
		font-size: 1.5rem;
	}
`;
export const Span = styled.span`
	font-size: 1rem;
	color: ${props => props.light && 'gray'};
`;
export const RightContainer = styled.div`
	display: flex;
	flex: 1;
	justify-content: flex-end;
	align-items: center;
`;
