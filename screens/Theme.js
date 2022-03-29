import React from 'react';
import styled from 'styled-components';
import ThemeMunu from '../components/ThemeMenu';

const Theme = () => {
  return (
    <CenteredView>
      <ThemeMunu />
    </CenteredView>
  );
};

export default Theme;

// #region styled-component
const CenteredView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.backgroundColor};
`;
// #endregion
