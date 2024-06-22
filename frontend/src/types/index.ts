export interface FieldInterface {
  shotStatus: ShotStatus;
}

export enum ShotStatus {
  HIT = 'HIT',
  MISS = 'MISS',
  NOT_HIT = 'NOT_HIT',
}
