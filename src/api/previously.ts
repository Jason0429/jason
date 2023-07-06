import { Collections } from '@/enums';
import { db } from '@/firebase/config';
import { CareerPosition } from '@/types';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';

const previouslyCollection = collection(db, Collections.previously);

export const getPreviousCareers = async (): Promise<Array<CareerPosition>> => {
  // Wait to simulate a slow network
  await new Promise((resolve) => setTimeout(resolve, 1_000));
  const data = await getDocs(query(previouslyCollection, orderBy('index')));
  return data.docs.map((doc) => doc.data() as CareerPosition);
};
