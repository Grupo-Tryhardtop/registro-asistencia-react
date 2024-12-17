import { useState } from 'react';
import './panel.css'
import '@fortawesome/fontawesome-free/css/all.min.css';


const Dashboard = () => {
    const [isMobile,] = useState(window.matchMedia("(max-width: 990px)" ).matches);
    const [isNavVisible, setNavVisible] = useState(false);
    const [isCompact, setCompact] = useState(false);

    const toggleMenu = () => {
        if (isMobile) {
            setNavVisible(!isNavVisible);
        } else {
            setCompact(!isCompact );
        }
    };

    const handleLogout = (event) => {
        event.preventDefault();
        localStorage.removeItem('userSession');
        window.location.href = 'login.html';
    };

    return (
        <div className={`dashboard ${isCompact ? 'dashboard-compact' : ''}`}>
            <div className={`dashboard-nav ${isNavVisible ? 'mobile-show' : ''}`}>
                <header>
                    <a className="menu-toggle" onClick={toggleMenu}>
                        <i className="fas fa-bars"></i>
                    </a>
                    <a className="brand-logo">
                        <i className="fa-solid fa-house"></i> Panel
                       
                    </a>
                </header>
                <nav className="dashboard-nav-list">
                    <a href="../tabla/tabla.jsx" className="dashboard-nav-item active">
                        <i className="fas fa-tachometer-alt"></i> dashboard
                    </a>
                
                    <div className="nav-item-divider"></div>
                    <a href="login.html" id="logout" className="dashboard-nav-item" onClick={handleLogout}>
                        <i className="fas fa-sign-out-alt"></i> Logout
                    </a>
                </nav>
            </div>
            <div className='dashboard-app'>
                <header className='dashboard-toolbar'>
                    <a href="#!" className="menu-toggle" onClick={toggleMenu}>
                        <i className="fas fa-bars"></i>
                    </a>
                </header>
                {/* <div className='dashboard-content'>
                    <div className='container'>
                        <div className='card'>
                            <div className='card-header'>
                                <h1>¡Bienvenido de vuelta!</h1>
                            </div>
                            <div className='card-body'>
                                <p>  
                                    ¡Bienvenido de vuelta!
                                </p>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Dashboard;
