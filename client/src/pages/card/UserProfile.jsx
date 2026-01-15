import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserHeader from "../../components/UserHeader";
import UserMaterialsTabs from "../../components/UserMaterialsTabs";
import api from "../../api/axios";


const UserProfile = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState("analiticals");
  const [analiticals, setAnaliticals] = useState([]);
  const [news, setNews] = useState([]);
  const [position, setPosition] = useState([]);

  const fetchProfile = async () => {
    try {
      const { data } = await api.get(`/api/users/profile/${id}`);
      if (data.success) {
        setUser(data.user);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const feachAnaliticl = async () => {
    try {
      const { data } = await api.get(`/api/analytical/get-by-user-id/${user._id}`);
      if (data.success) {
        setAnaliticals(data.data)
      }
    } catch (error) {
      console.error(error);
    }
  };
  const feachNews = async () => {
    try {
      const { data } = await api.get(`/api/news/get-by-user-id/${user._id}`);
      if (data.success) {
        setNews(data.data)
      }
    } catch (error) {
      console.error(error);
    }
  };
  const feachPosition = async () => {
    try {
      const { data } = await api.get(`/api/position/get-by-user-id/${user._id}`);
      if (data.success) {
        setPosition(data.data)
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, [id]);

  useEffect(() => {
    if (!user?._id) return;

    feachAnaliticl();
    feachNews();
    feachPosition();
  }, [user]);

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      {user && <div className="max-w-5xl mx-auto space-y-8">
        <UserHeader user={user} analiticals={analiticals} news={news} position={position} />

        <UserMaterialsTabs user={user} activeTab={activeTab} setActiveTab={setActiveTab} analiticals={analiticals} news={news} position={position} />
      </div>}
    </div>
  );
};

export default UserProfile;
