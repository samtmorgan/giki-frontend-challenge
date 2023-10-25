export type EmissionsDisplaySize = 'lg' | 'sm';

export type Emissions = {
  emissions: number;
  title: string;
  size?: EmissionsDisplaySize;
};

export type FootprintType = {
  emissions: number;
};

export type Coords = {
  x: number;
  y: number;
  a?: number;
};

export type ContentType = {
  emissions: number;
  yearTarget: number;
  remainderToCut: number;
  twenty30Target: number;
};
