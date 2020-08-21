import styled from 'styled-components';
import { CARD_BG } from '../../const/css-constant';
const { CARD_BG_ONE } = CARD_BG;

export const Container = styled.div`
	display: flex;
	width: 100%;
	margin: 12vh 0;
	justify-content: space-around;
	align-items: center;
`;
export const Card = styled.div`
	border-radius: 0.4rem;
	background-color: ${CARD_BG_ONE};
	${props => {
		switch (props.gutter) {
			case 'confirmed':
				return `
          border-left: 3px solid rgba(0, 0, 255, 0.5) ;
          box-shadow: -2px 0px 0 0 rgba(0,0,255,.5);
        `;
			case 'recovered':
				return `
        border-left: 3px solid rgba(0, 255, 0, 0.5) ;
          box-shadow: -2px 0px 0 0 rgba(0,255,0,.5);
          `;
			case 'deaths':
				return `
        border-left: 3px solid rgba(255, 0, 0, 0.5) ;
          box-shadow: -2px 0px 0 0 rgba(255,0,0,.5);
        `;
			default:
				return ``;
		}
	}};
	.card-content {
		text-align: center;
		padding: 2rem;
	}
`;

// switch (props.gutter) {
//   case 'confirmed':
//     return `
//       border-left: 3px solid rgba(0, 0, 255, 0.5) ;
//       box-shadow: -5px 0px 0 0 rgba(0,0,255,.5);
//     `;
//   case 'recovered':
//     return `
//       border-left: 3px solid rgba(0, 255, 0, 0.5) ;
//       border-right: 3px solid rgba(0, 255, 0, 0.5) ;
//       box-shadow:
//         -5px 0px 0 0 rgba(0, 255, 0, .5),
//         5px 0px 0 0 rgba(0, 255, 0, .5);
//       `;
//   case 'deaths':
//     return `
//       border-right: 3px solid rgba(255, 0, 0, 0.5) ;
//       box-shadow: 5px 0px 0 0 rgba(255,0,0,.5);
//     `;
//   default:
//     return ``;
// }
