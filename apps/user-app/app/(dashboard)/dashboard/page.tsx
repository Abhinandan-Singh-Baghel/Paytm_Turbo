"use client"
import { signOut } from 'next-auth/react';


export default function() {
    return <div className='flex-1 flex justify-between'>
       <div>Dashboard</div>
       <ClearSessionPage/>
    </div>
}



const ClearSessionPage = () => {
  // Function to clear session and redirect to login/signup page
  const handleClearSession = async () => {
    try {
      // Clear session data
      await signOut({ redirect: false });

      // Redirect to login/signup page
      window.location.href = '/api/auth/signin'; // Change '/login' to the appropriate URL of your login/signup page
    } catch (error) {
      console.error('Error clearing session:', error);
    }
  };

  return (
    <div>
      <h1 className='text-l pb-3'>Clear Session</h1>
      <button 
  onClick={handleClearSession} 
  className={`px-3 py-1 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400`}
>
  Clear Session
</button>
    </div>
  );
};

// export default ClearSessionPage;
