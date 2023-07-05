import { Collections } from '@/enums';
import { db } from '@/firebase/config';
import { Project } from '@/types';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';

const projectsCollection = collection(db, Collections.projects);

export const getProjects = async (): Promise<Array<Project>> => {
  // Wait to simulate a slow network
  // await new Promise((resolve) => setTimeout(resolve, 10_000));
  const data = await getDocs(query(projectsCollection, orderBy('index')));
  return data.docs.map((doc) => doc.data() as Project);
};
