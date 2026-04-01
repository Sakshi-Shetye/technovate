export const getCurrentRole = () => {
  return typeof window !== "undefined" ? sessionStorage.getItem("currentRole") || "user" : "user";
};

export const setCurrentRole = (role: string) => {
  if (typeof window !== "undefined") sessionStorage.setItem("currentRole", role);
};

export const getCurrentLanguage = () => {
  return typeof window !== "undefined" ? sessionStorage.getItem("language") || "en" : "en";
};

export const setCurrentLanguage = (lang: string) => {
  if (typeof window !== "undefined") sessionStorage.setItem("language", lang);
};
