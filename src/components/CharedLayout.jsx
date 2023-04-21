import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/Loader';
import { HeaderNav, StyledLink } from './SharedLayout.styled';
//   <Suspense fallback={<div>Loading page...</div>}>

const SharedLayout = () => {
  return (
    <div>
      <HeaderNav>
        <nav>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="/Movies">Movies</StyledLink>
        </nav>
      </HeaderNav>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
