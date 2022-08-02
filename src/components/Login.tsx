import '../style/login.css'
export function Login() {
	return (
        
        <div className="lgn-container">
        <div className="box box-one">
            <i className="fab fa-twitter"><img src="https://img.icons8.com/color/50/000000/twitter--v1.png"/></i>
            <button>
               <img src="/google.png" alt="google" width={19}/>
                <span>Sign in with Google</span>
            </button>
            <button>
                <img src="/apple.png" alt="" width={19}/>
                <span>Sign in with Apple</span>
            </button>
        </div>
        <h5>Or</h5>
        <div className="box box-two">
            <form>
                <input type="text" placeholder="Phone,email, or username"/>
            </form>
            <button className="next-btn">Next</button>
            <button>Forget password</button>
        </div>
        <p>Don't have an account <a href="#">Sign Up</a></p>
    </div>
    )}