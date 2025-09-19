//login page
import  { useState } from 'react';
import { FaApple } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!email || !password) {
      setError('Please enter both your email and password.');
      return;
    }

    setLoading(true);

    try {
      const result = await login(email, password);

      if (result.success) {
        setSuccess('Login successful! Redirecting...');
        
        // Redirect to home page after 1 second
        setTimeout(() => {
          navigate('/');
        }, 1000);
      } else {
        setError(result.error || 'Login failed. Please check your credentials.');
      }

    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="font-sans antialiased text-gray-800 bg-gray-50">
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Left Section (Login Form) */}
        <div className="flex-1 flex items-center justify-center p-6 md:p-12">
          <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8 md:p-10">
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#46052D] mb-2 text-center">Welcome Back!</h1>
            <p className="text-gray-600 mb-8 text-center">
              Sign in to access your dashboard and continue optimizing your QA process.
            </p>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#46052D] transition duration-200"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-sm font-medium text-gray-700" htmlFor="password">Password</label>
                  <a href="#" className="text-xs text-[#46052D] hover:opacity-90">Forgot Password?</a>
                </div>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#46052D] transition duration-200"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={loading}
                />
              </div>

              {error && (
                <p className="text-red-500 text-sm">{error}</p>
              )}

              {success && (
                <p className="text-green-500 text-sm">{success}</p>
              )}

              <button
                type="submit"
                className={`w-full py-3 px-6 text-white font-semibold rounded-xl transition duration-300 transform hover:scale-105 ${loading ? "opacity-80 cursor-not-allowed" : "hover:opacity-95"}`}
                style={{ backgroundColor: '#46052D' }}
                disabled={loading}
              >
                {loading ? 'Signing In...' : 'Sign In'}
              </button>

              <div className="flex items-center space-x-2">
                <hr className="flex-grow border-gray-300" />
                <span className="text-gray-500 text-sm">OR</span>
                <hr className="flex-grow border-gray-300" />
              </div>

              <div className="space-y-3">
                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 border border-gray-300 rounded-xl hover:bg-gray-50 transition"
                  disabled={loading}
                >
                  <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" className="w-5 h-5" />
                  Continue with Google
                </button>
                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 border border-gray-300 rounded-xl bg-gray-900 text-white hover:bg-gray-800 transition"
                  disabled={loading}
                >
                  <FaApple size={18} />
                  Continue with Apple
                </button>
              </div>
            </form>

            <p className="text-sm mt-6 text-center text-gray-600">
              Don’t have an account?{' '}
              <a href="#" className="text-[#46052D] hover:underline font-medium">
                Sign Up
              </a>
            </p>
          </div>
        </div>

        {/* Right Section (Image & Quote) */}
        <div 
          className="hidden md:flex flex-1 flex-col items-center justify-center p-16 bg-cover bg-center rounded-l-3xl shadow-lg relative overflow-hidden"
          style={{ backgroundImage: "url(/image2x.png)" }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative text-white z-10 text-center max-w-md">
            
       
          </div>
        </div>
      </div>
    </div>
  );
};
