import { Suspense } from 'react';

type ReturnType<T> = (props: T) => JSX.Element;

export const Loadable = <T extends object>(Component: React.ComponentType<T>): ReturnType<T> => {
    return (props: T) => (
        <Suspense fallback={<div>Loading...</div>}>
            <Component {...props} />
        </Suspense>
    );
};