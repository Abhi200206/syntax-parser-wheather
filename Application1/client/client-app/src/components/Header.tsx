import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-gradient-to-r from-blue-500 to-blue-700 p-4 text-white shadow-md">
            <h1 className="text-3xl font-bold text-center font-serif">Rule Engine</h1>
            <nav className="mt-4 flex justify-center space-x-6">
                <Link 
                    to="/" 
                    className="hover:text-blue-300 transition duration-200 font-serif"
                >
                    Home
                </Link>
                <Link 
                    to="/create" 
                    className="hover:text-blue-300 transition duration-200 font-serif"
                >
                    Create Rule
                </Link>
                <Link 
                    to="/rules" 
                    className="hover:text-blue-300 transition duration-200 font-serif"
                >
                    View Rules
                </Link>
                <Link 
                    to="/evaluate" 
                    className="hover:text-blue-300 transition duration-200 font-serif"
                >
                    Evaluate Rule
                </Link>
            </nav>
        </header>
    );
};

export default Header;
