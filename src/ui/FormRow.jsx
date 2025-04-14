import { useState } from 'react';
import { FaUser } from 'react-icons/fa6';
import { IoIosEye, IoIosEyeOff } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';

const FormRow = ({ id, label, type, error, register }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <label htmlFor={id} className="label mb-2">
        <span className="font-medium">{label}</span>
      </label>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          {id === 'fullName' ? (
            <FaUser className="text-base-content/40 z-10 size-5" />
          ) : id === 'email' ? (
            <MdEmail className="text-base-content/40 z-10 size-5" />
          ) : (
            <RiLockPasswordFill className="text-base-content/40 z-10 size-5" />
          )}
        </div>
        {id === 'password' && (
          <div
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute inset-y-0 right-0 flex items-center pr-3"
          >
            {showPassword ? (
              <IoIosEyeOff className="text-base-content/40 z-10 size-5 cursor-pointer" />
            ) : (
              <IoIosEye className="text-base-content/40 z-10 size-5 cursor-pointer" />
            )}
          </div>
        )}
        <input
          type={showPassword ? 'text' : type}
          id={id}
          placeholder={label}
          className="input no-password-toggle w-full pl-10 focus:outline-none"
          {...register(id, {
            required: 'This field is required',
            ...(id === 'email' && {
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Please enter a valid email address',
              },
            }),
            ...(id === 'password' && {
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters',
              },
            }),
            ...(id === 'fullName' && {
              minLength: {
                value: 2,
                message: 'Full name must be at least 2 characters',
              },
            }),
          })}
        />
      </div>
      {error && (
        <div className="label absolute right-0 text-sm text-red-600 opacity-80">
          {error}
        </div>
      )}
    </div>
  );
};

export default FormRow;
