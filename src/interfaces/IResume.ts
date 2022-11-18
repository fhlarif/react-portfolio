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

interface IEducationInfo {
  level: string;
  descriptiom: string;
}

export interface IEducation {
  year: string;
  infos: IEducationInfo[];
}
