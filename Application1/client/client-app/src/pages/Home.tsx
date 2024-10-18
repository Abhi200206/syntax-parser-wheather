import Header from '../components/Header';

const Home = () => {
    return (
        <div className="bg-gradient-to-r from-blue-100 to-blue-200 min-h-screen flex items-center justify-center">
            <div>
                <Header />
                <main className="max-w-2xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-10">
                    <h1 className="text-4xl font-bold text-center text-blue-600 mb-4">Welcome to the Rule Engine</h1>
                    <p className="text-lg text-center text-gray-700 mt-2">
                        Create and evaluate complex rules easily!
                    </p>
                    <p className="text-center mt-4 text-gray-600">
                        Use the navigation above to get started!
                    </p>
                </main>
            </div>
        </div>
    );
};

export default Home;
