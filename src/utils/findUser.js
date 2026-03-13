import { db } from "../firebase"
import { ref, get } from 'firebase/database';

export const getChildByChildId = async (childId) => {
  try {
    // First, try to fetch directly by childId path
    // This is the most direct and efficient way for our data structure
    const childRef = ref(db, 'children/' + childId);
    const snapshot = await get(childRef);

    if (snapshot.exists()) {
      // Return in the format expected by ChildPage: { childId: childData }
      return { [childId]: snapshot.val() };
    }

    console.warn(`No child found with ID: ${childId}`);
    return null;
  } catch (error) {
    console.error('Error fetching child data:', error);
    throw error;
  }
};
