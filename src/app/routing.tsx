import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { NotFoundPage } from '~pages/404';
import { HomePage } from '~pages/home';
import { SignInPage } from '~pages/sign-in';
import SignupPage from '~pages/sign-up';
import Vacancy from '~pages/vacancy';

import { PageLayout } from '~shared/ui/templates/page-layout';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/vacancy" element={<Vacancy />}></Route>
          <Route path="/sing-in" element={<SignInPage />}></Route>
          <Route path="/sign-up" element={<SignupPage />}></Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
