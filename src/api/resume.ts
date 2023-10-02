import { getDownloadURL, getStorage, ref } from 'firebase/storage';

const storage = getStorage();
const resumeRef = ref(storage, 'resume/Jason_Cheung_resume.pdf');

export const getResumeLink = async (): Promise<string> => {
  const link = await getDownloadURL(resumeRef);
  return link;
};
