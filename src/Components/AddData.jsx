import { ref,set} from "firebase/database";
import { database } from "../firebase";

// Function to add a new document to the database
export const addDocToRealtimeDB = async (collectionPath,customKey, data) => {
  try {
    // Generate a new unique key for the document
    const docRef = ref(database, `${collectionPath}/${customKey}`);

    // Push the data to the collection
    await set(docRef, data);
    // Return the newly generated key
    return customKey;
  } catch (error) {
    console.error("Error adding document to Realtime Database:", error);
    throw error;
  }
};