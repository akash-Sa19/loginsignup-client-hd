import { useNavigate } from "react-router-dom";
import { dashboardDataQuery, signOutQuery } from "../auth/authQuery";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    const handleDashboardData = async () => {
      try {
        const response = await dashboardDataQuery();
        console.log(response);

        if (response.status === "success") {
          setUser({
            name: response.body?.name,
            email: response.body?.email,
          });
        }
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };
    handleDashboardData();
  }, []);

  const handleSignout = async () => {
    try {
      const response = await signOutQuery();

      if (response.status === "success") {
        navigate("/");
        toast(response.message);
      }
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <header className="flex items-center justify-between p-4 text-white bg-purple-800">
        <h1 className="text-lg font-semibold">Dashboard</h1>
        <button
          className="px-4 py-2 font-bold text-purple-800 transition bg-white rounded-md hover:bg-gray-200"
          onClick={handleSignout}
        >
          Sign Out
        </button>
      </header>

      {/* Main Content */}
      <main className="flex items-center justify-center flex-grow">
        <div className="w-11/12 p-6 bg-white rounded-lg shadow-md sm:w-3/4 lg:w-1/3">
          <h2 className="text-xl font-bold text-gray-800">
            Welcome, {user.name}!
          </h2>
          <p className="mt-2 text-gray-600">
            <strong>Email:</strong> {user.email}
          </p>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
