import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import '../style/login.css';
import { Apple, Google } from '@styled-icons/boxicons-logos';
import { useNavigate } from 'react-router-dom';

// redux toolkit and login actions
import { useSelector } from 'react-redux';

import { useAppDispatch } from '../../../store/store';

import { login } from '../../../features/users';
import Footer from './footer';

type Inputs = {
  email: string;
  password: string;
};

const validations = {
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

export function Login(): JSX.Element {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const isLoggedIn = useSelector((state: any) => state.isLoggedIn);

  const state = useSelector((state: any) => state.users);

  React.useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({});

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // alert('1 Form submitted ' + isLoggedIn);
    dispatch(login(data));
    // alert('2 Form submitted ' + isLoggedIn);
    // console.log('🚀 ~ 2', state);
  };

  console.log('email ', watch('email')); // watch input value by passing the name of it
  console.log('password', watch('password')); // watch input value by passing the name of it

  return (
    <div>
    <div className="full-container">
      <div className="left-cover">
        <img src="./assets/cover-img.jpg" alt="cover" />
      </div>
      <div className="lgn-container">
        <div className="box box-one">
          <i className="fab fa-twitter">
            <a href="/">
              <img
                src="https://img.icons8.com/color/50/000000/twitter--v1.png"
                alt="ticon"
              />
            </a>
          </i>
          <button>
            <Google height={20} width={20} />
            <span>Sign in with Google</span>
          </button>
          <button>
            <Apple height={20} width={20} />
            <span>Sign in with Apple</span>
          </button>
        </div>
        <h5 className="or">Or</h5>
        <div className="box box-two">
          <form onSubmit={handleSubmit(onSubmit)} className="form-login">
            <input
              {...register('email', validations.email)}
              type="text"
              placeholder="Enter your email"
            />

            {errors.email && <span>{errors.email.message}</span>}

            <input
              {...register('password', validations.password)}
              type="password"
              placeholder="Your password"
            />
            {errors.password && <span>{errors.password.message}</span>}

            <button type="submit" className="next-btn">
              Next
            </button>
          </form>
          <button>Forget password</button>
        </div>
        <p>
          Don't have an account
          <a
            style={{
              textDecoration: 'none',
              color: '#000',
            }}
            href="/signup"
          >
            <button className="signup-btn">Sign Up</button>
          </a>
        </p>
      </div>
    </div>
<Footer/>
    </div>
  
  );
}
