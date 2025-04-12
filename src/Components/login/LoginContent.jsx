import { useForm } from 'react-hook-form';
import FormRow from '../../ui/FormRow';
import SkeletonShape from '../../ui/SkeletonShape';
import Logo from '../../ui/logo';
import SignUpLoginRouting from '../../ui/SignUpLoginRouting';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { UseChatAppContext } from '../../context/chatAppProvider';

const LoginContent = () => {
  const [user, setUser] = useState({
    email: 'amr@gmail.com',
    password: 'amrwaheed',
  });
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;
  const navigate = useNavigate();
  const { authUser, setAuthUser } = UseChatAppContext();
  console.log(authUser);

  const onSubmit = (data) => {
    if (data.email === user.email && data.password === user.password) {
      toast.success('Login successful!');
      setAuthUser(true)
      navigate('/settings'); 
    } else {
      toast.error('Invalid email or password');
    }
  };

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8">
          <Logo
            title="Welcome back !"
            description="you can sign in to your account"
          />
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <FormRow
              id="email"
              label="Email Address"
              type="email"
              error={errors?.email?.message}
              register={register}
            />
            <FormRow
              id="password"
              label="Password"
              type="password"
              error={errors?.password?.message}
              register={register}
            />
            <button type="submit" className="btn btn-primary w-full">
              Login
            </button>
          </form>
          <SignUpLoginRouting
            to="/signup"
            title="Dont have an Account ?"
            navigate="Sign up now"
          />
        </div>
      </div>
      <SkeletonShape
        title="Welcome back !"
        description=" sign in to continue your conversations with people that you love, We hope you enjoy using our app"
      />
    </div>
  );
};

export default LoginContent;
