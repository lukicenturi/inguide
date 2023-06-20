export enum ToneOfVoice {
  CLEAR = 'clear',
  CASUAL = 'casual',
  WITTY = 'witty',
  EMPATHETIC = 'empatethic'
}

export interface ToneOfVoiceData {
  id: ToneOfVoice,
  label: string,
  description: string
}
