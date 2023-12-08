import { Collections } from '@/enums';
import { db } from '@/firebase/config';
import { Config } from '@/types';
import { doc, getDoc } from 'firebase/firestore';

const latestVersionPath = doc(db, `${Collections.sys}/config`);

export const getLatestVersion = async (): Promise<string> => {
  const doc = await getDoc(latestVersionPath);
  const data = doc.data();

  if (!data) {
    throw new Error('No data found');
  }

  return (data as Config).version;
};
