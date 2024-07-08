import { getDatabase, ref, get, child } from 'firebase/database';
import { auth} from '../firebase';
import { database1 } from '../firebase1';
import {useState,useEffect} from 'react'

const useFetchUserData1 = () => {
    const [userData, setUserData] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const user = auth.currentUser;
          if (user) {
            // Reference to the user's data in the Realtime Database
            
            const userRef = ref(database1, `codingcontest/${user.uid}`);
            
            // Fetch the user's data
            const snapshot = await get(userRef);
            if (snapshot.exists()) {
              const userData = snapshot.val();
              setUserData(userData);
            } else {
              console.log("User data not found");
            }
          } else {
            console.log("User not logged in");
          }
        } catch (error) {
          console.log(error);
        }
      };
  
      const unsubscribe = auth.onAuthStateChanged((user) => {
        if (user) {
          fetchData();
        } else {
          console.log("User not logged in");
          // Set loading state to false or handle appropriately
        }
      });
  
      return () => unsubscribe();
    }, [userData]);
  
    return userData;
  };
  
  export default useFetchUserData1;
