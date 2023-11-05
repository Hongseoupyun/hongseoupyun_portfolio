import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebaseConfig';

export const useSkillData = () => {
  const [skillData, setSkillData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock fetch function to simulate fetching data
    const fetchSkillData = async () => {
      try {
        const skillRef = collection(db,"Skills")
        const snapshot = await getDocs(skillRef);
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        console.log("Firebase data:", data);
        data.sort((a, b) => (a.id > b.id ? 1 : -1)); // Sort the projects according to id
        setSkillData(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSkillData();
  }, []);

  return { skillData, loading };
};
