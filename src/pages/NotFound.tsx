
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { logSecurityEvent } from "@/utils/security";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    // Log 404 attempts for security monitoring
    logSecurityEvent("404_ACCESS_ATTEMPT", {
      path: location.pathname,
      userAgent: navigator.userAgent,
      timestamp: new Date().toISOString()
    });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        <Link 
          to="/" 
          className="text-blue-500 hover:text-blue-700 underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded px-2 py-1"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
