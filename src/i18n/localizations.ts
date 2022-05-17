export interface VuetifyLocale {
    [key: string]: VuetifyLocale | string;
  }

  export default interface localizations extends VuetifyLocale {
    appName: string;
    arabic: string;
    english: string;
    language: string;
    privacyPolicy:string
    termsAndConditions:string
    startUsingTheApp:string
    downloadTheApp:string
    ourServices:string
    manImg:string
    carImg:string
    familyImg:string
    autoWithYou:string
    weFullySupport:string
    firstTime:string
    solutionInButton:string
    bestChoice:string
    toSolveProblem:string
  }