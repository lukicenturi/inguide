import { defineStore } from 'pinia'
import { type Ref } from 'vue';
import { ToneOfVoice } from '@/types/tone-of-voice';
import { LogoOptions } from '@/data/logo';
import { ColorOptions } from '@/data/colors';
import { BrandExpressionOptions } from '@/data/brand-expression';
import { GridOptions } from '@/data/grid';
import { ProductAssetOptions } from '@/data/product-asset';
import { IconOptions } from '@/data/icon';
import { PhotographyOptions } from '@/data/photography';

export const useMainStore = defineStore('main', () => {
  const selectedToneOfVoice: Ref<ToneOfVoice> = ref(ToneOfVoice.CLEAR);
  const selectedLogo: Ref<string> = ref(LogoOptions[0].id);
  const selectedColor: Ref<string> = ref(ColorOptions[0]);
  const selectedBrandExpression: Ref<string> = ref(BrandExpressionOptions[0].id);
  const selectedGrid: Ref<string> = ref(GridOptions[0].id);
  const selectedProductAsset: Ref<string> = ref(ProductAssetOptions[0].id);
  const selectedIcons: Ref<string> = ref(IconOptions[0].id);
  const selectedPhotography: Ref<string> = ref(PhotographyOptions[0].id);

  return {
    selectedToneOfVoice,
    selectedLogo,
    selectedColor,
    selectedBrandExpression,
    selectedGrid,
    selectedProductAsset,
    selectedIcons,
    selectedPhotography
  }
})
