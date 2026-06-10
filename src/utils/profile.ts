import localData from "../data/home.json";

export interface Social {
  name: string;
  url: string;
  icon: string;
  showInContact?: boolean;
}

export interface ProfileData {
  name: string;
  photoUrl: string;
  intro: string;
  introHtml: string;
  webpageTitle: string;
  resumeUrl: string;
  socials: Social[];
}

export async function getProfileData(): Promise<ProfileData> {
  const isApiLive = import.meta.env.PROD;
  const baseUrl = import.meta.env.PUBLIC_API_BASE_URL;

  if (!isApiLive || !baseUrl) {
    return localData as ProfileData;
  }

  try {
    const response = await fetch(`${baseUrl}/home`);
    if (!response.ok) {
      throw new Error(`Profile API responded with ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("API fetch failed, falling back to local profile data", error);
    return localData as ProfileData;
  }
}
