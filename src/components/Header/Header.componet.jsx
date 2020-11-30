import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { HaderStyled, AnimatedButton, NavButton, ButtonText } from './styles/Header.styled';
import { useAppDataContext } from '../../providers/AppData';
import { DARK_THEME } from '../../utils/constants';
import actions from '../../state/actions';
import './styles/Header.styles.css';

const SUN_EMOJI = '🌞';
const MOON_EMOJI = '🌑';
const Header = () => {
   const { state, dispatch } = useAppDataContext();

   const changeTheme = () => {
      dispatch({ type: actions.TOGGLE_THEME });
   };
   const { theme } = useContext(ThemeContext);

   const openNav = () => {
      dispatch({ type: actions.TOGGLE_NAV });
   };
   return (
      <HaderStyled theme={theme}>
         <NavButton onClick={openNav} rotate={state.navigationOpen.toString()}>
            <FontAwesomeIcon className="iconFa" icon={faAngleDoubleRight} />
         </NavButton>

         <AnimatedButton onClick={changeTheme}>

            <ButtonText>
               {'Toggle theme '}

            </ButtonText>

            <span>
               {state.theme === DARK_THEME
                  ? `${SUN_EMOJI} `
                  : `${MOON_EMOJI}`}
            </span>
         </AnimatedButton>
      </HaderStyled>
   );
};

export default Header;
