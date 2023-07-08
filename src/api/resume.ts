import { Collections } from '@/enums';
import { db } from '@/firebase/config';
import { doc, getDoc } from 'firebase/firestore';

const resumePath = doc(db, `${Collections.pdfs}/resume`);

export const getResumeLink = async (): Promise<string> => {
  const doc = await getDoc(resumePath);
  const data = doc.data();

  if (!data) {
    throw new Error('No data found');
  }

  return data['link'];
};
