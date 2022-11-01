export interface IHandleClick {
  handleNavClick: IHNavClick;
}

export interface IHNavClick {
  (url: string, active: boolean): void;
}

export interface INav {
  url: string;
  title: string;
  active: boolean;
}
