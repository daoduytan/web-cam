import type { NextPage } from 'next';

const Signup: NextPage = () => {
  const handleSignup = () => {
    fetch('/api/signup', {
      method: 'POST',
      body: JSON.stringify({
        username: 'admin',
        password: '123456789',
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  return (
    <div>
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default Signup;
