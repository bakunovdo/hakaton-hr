import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { NotFoundPage } from '~pages/404';
import { HomePage } from '~pages/home';
import { SignInPage } from '~pages/sign-in';
import SignupPage from '~pages/sign-up';

import { PageLayout } from '~shared/ui/templates/page-layout';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/sign-in" element={<SignInPage />}></Route>
          <Route path="/sign-up" element={<SignupPage />}></Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
