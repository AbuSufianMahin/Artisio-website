import React from 'react';
import RegisterForm from './RegisterForm';

const RegisterPage = () => {
    return (
        <div className="flex flex-1 lg:items-center justify-center">
            <div className="w-full max-w-md">
                <RegisterForm />
            </div>
        </div>
    );
};

export default RegisterPage;