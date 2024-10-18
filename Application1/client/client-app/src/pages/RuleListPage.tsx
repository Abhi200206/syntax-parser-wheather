import Header from '../components/Header';
import RuleList from '../components/RuleList';

const RuleListPage = () => {
    return (
        <div className="bg-gradient-to-r from-blue-100 to-blue-200 min-h-screen flex flex-col">
            <Header />
            <main className="max-w-2xl mx-auto p-8 mt-10">
                <RuleList />
            </main>
        </div>
    );
};

export default RuleListPage;
