export interface social {
  [key: string]: social | string;
}
interface localizations extends social {
  instagram: string;
  facebook: string;
  youtube: string;
  twitter: string;
  gmail: string;

  phoneNumber: string;
}

const links: localizations = {
  instagram: "https://www.instagram.com/AutoDemandApp",
  facebook: "https://www.facebook.com/AutoDemandApp",
  youtube: "https://www.youtube.com/AutoDemandApp",
  twitter: "https://www.twitter.com/AutoDemandApp",
  gmail: "autodemandapp@gmail.com",
 
  phoneNumber: "07700000000",
};
export default links
