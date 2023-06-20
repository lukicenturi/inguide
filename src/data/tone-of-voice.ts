import { ToneOfVoice, type ToneOfVoiceData } from '@/types/tone-of-voice';

export const ToneOfVoiceOptions: ToneOfVoiceData[] = [
  {
    id: ToneOfVoice.CLEAR,
    label: 'Clear',
    description: 'We don’t beat around the bush. We talk all things simple, straightforward, and single-meaning. So, if our language had a color, it’d be transparent - if that’s a color.'
  },
  {
    id: ToneOfVoice.CASUAL,
    label: 'Casual',
    description: 'Formals don’t suit us, really. We write the way we speak. But we’re always sincere and respectful first. Beachwear second. And maybe only half a Bacardi down, third.'
  },
  {
    id: ToneOfVoice.WITTY,
    label: 'Witty',
    description: 'Even a well-timed poor joke could win hearts. We get it. And we get it right too often. Wit comes naturally to us - unless we try hard, in which case, you’ll never know.'
  },
  {
    id: ToneOfVoice.EMPATHETIC,
    label: 'Empathetic',
    description: 'We know exactly how one feels on early food delivery, or late cab arrival. We never facepalm a customer that gets the Confirm password wrong. We understand. Until they get it wrong the third time.'
  }
]
