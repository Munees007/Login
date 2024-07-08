import { auth} from '../firebase';
import { database1 } from '../firebase1';
import {ref,update} from 'firebase/database'

const useUpdateUserData1 = () => {
    const updateUser = async (newData) => {
      try {
        const user = auth.currentUser;
        if (user) {
          // Reference to the user's data in the Realtime Database
          const userRef = ref(database1, `codingcontest/${user.uid}`);
  
          // Update the user's data
          await update(userRef, newData);
          console.log("Document successfully updated!");
        } else {
          console.log("User not logged in");
        }
      } catch (error) {
        console.error("Error updating document: ", error);
      }
    };
  
    return updateUser;
  };
  
  export default useUpdateUserData1;
