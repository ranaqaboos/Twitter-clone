import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import '../style/register.css';

import { useNavigate } from 'react-router-dom';

// redux toolkit and login actions
import { useSelector } from 'react-redux';

import { useAppDispatch } from '../../../store/store';

import { addUser } from '../../../features/users';

type Inputs = {
  name: string;
  user: string;
  email: string;
  password: string;
  bio: string;
};

const validations = {
  name: {
    required: 'Name is required',
    minLength: {
      value: 3,
      message: 'Name must be at least 3 characters',
    },
  },
  user: {
    required: 'Username is required',
    minLength: {
      value: 3,
      message: 'Username must be at least 3 characters',
    },
  },

  email: {
    required: 'Email is required',
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      message: 'Invalid email or username',
    },
  },
  password: {
    required: 'Password is required',
    minLength: {
      value: 8,
      message: 'Password must be at least 8 characters',
    },
    pattern: {
      value:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      message:
        'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character',
    },
  },
};

export function Register(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isLoggedIn = useSelector((state: any) => state.isLoggedIn);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({});

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(addUser(data));
    isLoggedIn ? navigate('/') : navigate('/login');
  };
  React.useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn]);
  console.log('email ', watch('email')); // watch input value by passing the name of it
  console.log('password', watch('password')); // watch input value by passing the name of it

  return (
    <div className="full-container">
      <div className="left-cover">
        <img src="./assets/cover-img.jpg" alt="cover" />
      </div>
      <div className="lgn-container">
        <div className="box box-two">
          <h2 className="or">Signup</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="form-login">
            <input
              type="text"
              placeholder="Name"
              {...register('name', validations.name)}
            />
            {errors.name && <p className="error">{errors.name.message}</p>}

            <input
              type="text"
              placeholder="Username"
              {...register('user', validations.user)}
            />
            {errors.user && <p className="error">{errors.user.message}</p>}

            <input
              type="email"
              placeholder="Email"
              {...register('email', validations.email)}
            />
            {errors.email && <p className="error">{errors.email.message}</p>}

            <input
              type="password"
              placeholder="Password"
              {...register('password', validations.password)}
            />
            {errors.password && (
              <p className="error">{errors.password.message}</p>
            )}

            <input
              type="text"
              placeholder="bio"
              {...register('bio')}
            />

            <button type="submit" className="next-btn">
              Next
            </button>
          </form>
          <p>
            Do you have an account?
            <a
              style={{
                textDecoration: 'none',
                color: '#000',
              }}
              href="/login"
            >
              <button className="signup-btn">Sign In</button>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
