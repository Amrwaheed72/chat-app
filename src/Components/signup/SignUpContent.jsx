import { useForm } from 'react-hook-form';
import FormRow from '../../ui/FormRow';
import { Link } from 'react-router-dom';
import SkeletonShape from '../../ui/SkeletonShape';
import Logo from '../../ui/logo';
import SignUpLoginRouting from '../../ui/SignUpLoginRouting';

const SignUpContent = () => {
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;

  const onSubmit = (e) => {
    e.preventDefault;
  };
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8">
          {/* Logo */}
          <Logo
            title="Welcome to our App !"
            description="You can create free account 👇 and enjoy our App"
          />

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <FormRow
              id="fullName"
              label="Full Name"
              type="text"
              error={errors?.fullname?.message}
            />
            <FormRow
              id="email"
              label="Email Address"
              type="email"
              error={errors?.email?.message}
            />
            <FormRow
              id="password"
              label="Password"
              type="password"
              error={errors?.password?.message}
            />
            <button className="btn btn-primary w-full">Create account</button>
          </form>
          <SignUpLoginRouting title="Aleardy have an Account ?" to="/login" navigate="Sign in" />
        </div>
      </div>
      <SkeletonShape
        title="Join our community"
        description="Connect with friends, share moments, and stay in touch with all people around the globe "
      />
    </div>
  );
};

export default SignUpContent;
