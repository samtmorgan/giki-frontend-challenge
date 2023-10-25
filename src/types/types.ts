export type EmissionsDisplaySize = 'lg' | 'sm';

export type Emissions = {
  emissions: string;
  title: string;
  size?: EmissionsDisplaySize;
  unit: string;
};

export type FootprintType = {
  emissions: number;
  unit: string;
};
