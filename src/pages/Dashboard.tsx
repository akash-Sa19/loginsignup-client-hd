const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="bg-purple-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-lg font-semibold">Dashboard</h1>
        <button className="bg-white text-purple-800 px-4 py-2 rounded-md hover:bg-gray-200 transition font-bold">
          Sign Out
        </button>
      </header>

      {/* Main Content */}
      <main className="flex flex-grow items-center justify-center">
        <div className="bg-white shadow-md rounded-lg p-6 w-11/12 sm:w-3/4 lg:w-1/3">
          <h2 className="text-xl font-bold text-gray-800">
            Welcome, John Doe!
          </h2>
          <p className="text-gray-600 mt-2">
            <strong>Email:</strong> xxxxxx@xxxx.com
          </p>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
