declare module 'chordConfigType' {
  export interface ChordSetting {
    readonly id: number;
    readonly type: string;
    readonly config: { readonly [key: string]: boolean };
  }
}
