import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebaseConfig';

export const useProjectData = () => {
  const [projectDatas, setProjectDatas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projectRef = collection(db, "Project");
        const snapshot = await getDocs(projectRef);
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        data.sort((a, b) => (a.id > b.id ? 1 : -1)); // Sort the projects according to id
        setProjectDatas(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { projectDatas, loading };
};
