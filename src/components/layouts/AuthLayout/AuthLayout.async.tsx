import { lazy } from 'react';

const AuthLayoutAsync = lazy(() => import('./AuthLayout'));

export { AuthLayoutAsync as AuthLayout };
