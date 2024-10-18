import Header from '../components/Header';
import RuleForm from '../components/RuleForm';

const CreateRule = () => {
    return (
        <div className="bg-gradient-to-r from-blue-100 to-blue-200 min-h-screen">
            <Header />
            <main className="max-w-2xl mx-auto p-8">
                <RuleForm />
            </main>
        </div>
    );
};

export default CreateRule;
