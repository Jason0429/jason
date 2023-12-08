import { getResumeLink } from "@/api";
import { redirect } from "solid-start";

export const GET = async () => {
  const resumeLink = await getResumeLink();
  return redirect(resumeLink);
};
