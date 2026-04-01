export interface Program {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  benefits: string[];
  impactStats: { label: string; value: string }[];
  image: string;
}

export interface ImpactStat {
  label: string;
  value: string;
  description: string;
}
