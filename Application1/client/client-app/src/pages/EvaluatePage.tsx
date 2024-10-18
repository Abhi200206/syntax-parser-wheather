import Header from '../components/Header';
import EvaluateRule from '../components/EvaluateRule';

const EvaluatePage = () => {
    return (
        <div className="bg-gradient-to-r from-blue-100 to-blue-200 min-h-screen">
            <Header />
            <main className="max-w-2xl mx-auto p-8">
                <EvaluateRule />
            </main>
        </div>
    );
};

export default EvaluatePage;
