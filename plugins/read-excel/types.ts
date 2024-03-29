export interface FacilityInfoType {
  title: string;
  _key: string;
  _imageRef?: string;
  list?: [];
};

export interface ContentSpecificationType {
  value: string;
  images?: string[];
};

export type BulletPointsType = {
  data: any;
  _key: string;
};

export type SplitStringType = {
  data:string,
  character:string
}

export type SplitMediaType = {
  data:string[],
  character:string
}