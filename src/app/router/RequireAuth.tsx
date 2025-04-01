import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/storeHooks';
import { WithChildrenProps } from '../../types/generalTypes';


const RequireAuth = ({ children }: WithChildrenProps) => {
    const authenticated = useAppSelector((state) => state.authSlice.isAuthenticated);
    return authenticated ? <>{children}</> : <Navigate to="/auth/signin" replace />
}

export default RequireAuth;