import { useState } from 'react';

export default function Profile() {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john@example.com');
  const [password, setPassword] = useState('');

  const updateHandler = (e) => {
    e.preventDefault();
    // Call API here
    console.log(name, email, password);
  };

  return (
    <div className="max-w-md mx-auto mt-10 border rounded-lg p-6 shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Profile</h2>
      <form onSubmit={updateHandler} className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700">
          Update Profile
        </button>
      </form>
    </div>
  );
}
