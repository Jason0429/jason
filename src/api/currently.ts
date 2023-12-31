import { Collections } from '@/enums';
import { db } from '@/firebase/config';
import { CareerPosition } from '@/types';
import { doc, getDoc } from 'firebase/firestore';

const currentPositionPath = doc(db, `${Collections.currently}/position`);

export const getCurrentPosition = async (): Promise<string> => {
  // Wait to simulate a slow network
  // await new Promise((resolve) => setTimeout(resolve, 1_000));
  const doc = await getDoc(currentPositionPath);
  const data = doc.data();

  if (!data) {
    throw new Error('No data found');
  }

  return (data as CareerPosition).title;
};
