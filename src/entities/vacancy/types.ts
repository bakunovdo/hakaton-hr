export interface VacancyPosition {
  id: string;
  position: string;
}

export interface Vacancy {
  id: string;
  position: VacancyPosition;
  replacementDate: string;
  desciption: string;
  startYearsXP: number;
  endYearsXP: number;
  location: string;
  salary: string;
}
