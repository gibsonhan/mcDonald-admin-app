import React from 'react';
import styled from 'styled-components';

import Display from '../component/Display';
import Navigator from '../component/Navigator';

const Dashboard = ({ history }) => {
  //TODO:
  //when /dashboard is access when there is no log in. Reject/redirect to home page
  // How to handle user sesion
  return (
    <DashboardContainer>
      <DashNavbar history={history} />
      <DashMain />
    </DashboardContainer>
  );
};

const DashboardContainer = styled.div`
  display: grid;
  height: 100vh;
  width: 100%;

  grid-template-areas: 'nav' 'display';
  grid-template-rows: 1fr;
  grid-template-columns: 280px 1fr;
`;

const DashNavbar = styled(Navigator)`
  grid-area: nav;
`;

const DashMain = styled(Display)`
  grid-area: display;
`;

export default Dashboard;
