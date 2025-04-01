import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Loadable } from '../../hocs/Loadable.hoc';

import { ProductsPage } from '../../pages/ProductsPage';
import { ProductDetailsPage } from '../../pages/ProductDetailsPage';
import { SignInPage } from '../../pages/SignInPage';
import { SignUpPage } from '../../pages/SignUpPage';

import MainLayout from '../../components/layouts/MainLayout/MainLayout';
import { AuthLayout } from '../../components/layouts/AuthLayout/AuthLayout.async';
import RequireAuth from './RequireAuth';

const Products = Loadable(ProductsPage);
const ProductDetails = Loadable(ProductDetailsPage);
const AuthLayoutFallback = Loadable(AuthLayout);

const AppRouter = () => {
    const protectedLayout = (
        <RequireAuth>
            <MainLayout />
        </RequireAuth>
    )
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={protectedLayout}>
                    <Route index element={<Products />} />
                    <Route path="/product/:id" element={<ProductDetails />} />
                </Route>
                <Route path="/auth" element={<AuthLayoutFallback />}>
                    <Route path="signin" element={<SignInPage />} />
                    <Route path="signup" element={<SignUpPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;