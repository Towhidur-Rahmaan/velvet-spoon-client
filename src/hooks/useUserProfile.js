import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import api from "../services/api";

const useUserProfile = () => {
  const { user } = useAuth();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    const fetchUser = async () => {
      try {
        const res = await api.get(`/users?email=${user.email}`);
        setProfile(res.data);
      } catch (err) {
        console.log("Profile fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [user]);

  return { profile, loading };
};

export default useUserProfile;
