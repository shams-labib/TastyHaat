import { useEffect } from "react";
import { useNavigate } from "react-router";

const PaymentsSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/dashboard/my-orders");
    }, 4000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 px-4">
      <div className="bg-base-100 max-w-md w-full rounded-3xl shadow-2xl p-10 text-center animate-scaleIn border border-base-300">
        <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-accent/20">
          <svg
            className="w-10 h-10 text-accent"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="text-3xl font-extrabold text-primary mb-3">
          Payment Successful
        </h1>

        <p className="text-base-content mb-8 leading-relaxed">
          Thank you for your order. Your payment was processed successfully.
          You'll be redirected to your orders shortly.
        </p>

        <button
          onClick={() => navigate("/dashboard/my-orders")}
          className="w-full py-3 rounded-xl bg-primary text-primary-content font-bold hover:bg-primary-focus transition"
        >
          View My Orders
        </button>
      </div>

      <style>
        {`
          .animate-scaleIn {
            animation: scaleIn 0.3s ease-out;
          }
          @keyframes scaleIn {
            from { transform: scale(0.88); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
        `}
      </style>
    </div>
  );
};

export default PaymentsSuccess;
