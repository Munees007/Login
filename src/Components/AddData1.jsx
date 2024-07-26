import { ref, set, get, update } from "firebase/database";
import { database1 } from "../firebase1";

// Function to add or update a document in the database
export const addOrUpdateDocInRealtimeDB1 = async (collectionPath, customKey,questionId, data) => {
    try {
      // Reference to the question data for the user
      const questionRef = ref(database1, `${collectionPath}/${customKey}/${questionId}`);
  
      // Check if the question data exists
      const snapshot = await get(questionRef);
  
      if (snapshot.exists()) {
        // Question data exists, update it
        await update(questionRef, data);
      } else {
        // Question data does not exist, create it
        await set(questionRef, data);
      }
  
      // Return the question ID
      return questionId;
    } 
    catch (error) {
      console.error("Error adding or updating question data:", error);
      throw error;
    }
};
