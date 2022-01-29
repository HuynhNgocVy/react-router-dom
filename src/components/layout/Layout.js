import './Layout.module.css'
import MainNavigation from './MainNavigation';
function Layout({children}) {
    return (
        <div className='layout'>
            <MainNavigation />
            <main>{children}</main>
        </div>
    )
}
export default Layout;
