export interface IExpInfo {
  year: string;
  position: string;
  description: string;
}

export interface IBioInfo {
  name: string;
  position: string;
  description: string;
}

interface IActivityInfo {
  location: string;
  descriptiom: string;
}

export interface IActivity {
  year: string;
  infos: IActivityInfo[];
}
