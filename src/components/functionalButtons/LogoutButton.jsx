import { getAuth, signOut } from "firebase/auth";

const LogoutButton = () => {
  const auth = getAuth();
  const handleLogout = async () => {
    await signOut(auth);
  };
  return (
    <div>
      <button
        onClick={handleLogout}
        className="mt-4 md:mt-0 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
      >
        Logout
      </button>
    </div>
  );
};

export default LogoutButton;
