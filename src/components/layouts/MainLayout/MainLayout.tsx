import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <aside>Sidebar</aside>
            <div>
                <header>Navbar</header>
                <main>
                    <Outlet />
                </main>
                <footer></footer>
            </div>
        </div>
    );
}

export default MainLayout;