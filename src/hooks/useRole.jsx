import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Context/useaxios/useAxiosSecure";
import useAuth from "../Context/useAuth/useAuth";

const useRole = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: role = "User", isLoading } = useQuery({
    queryKey: ["user-role", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${user.email}`);
      return res.data.role;
    },
  });

  return { role, isLoading: loading || isLoading };
};

export default useRole;
