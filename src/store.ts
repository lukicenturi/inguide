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
import { get, set, useTimeoutFn } from '@vueuse/core';


interface GeneratedResult {
  id: number;
  mainColor: string;
  colors: [string, string, string];
  mainCircleWidth: number;
  mainCirclePosition: number;
  position: string;
  logoPosition: string;
  topPercentage: number;
  textLeft: number;
  textTop: number;
  firstCircle: [number, number];
  secondCircle: [number, number];
  rotate: number;
  backgroundSrc: string;
  logoSrc: string;
  headlineText: string;
  bodyText: string;
}

export const useMainStore = defineStore('main', () => {
  const selectedToneOfVoice: Ref<ToneOfVoice> = ref(ToneOfVoice.CLEAR);
  const selectedLogo: Ref<string> = ref(LogoOptions[0].id);
  const selectedColor: Ref<string> = ref(ColorOptions[0]);
  const selectedBrandExpression: Ref<string> = ref(BrandExpressionOptions[0].id);
  const selectedGrid: Ref<string> = ref(GridOptions[0].id);
  const selectedProductAsset: Ref<string> = ref(ProductAssetOptions[0].id);
  const selectedIcons: Ref<string> = ref(IconOptions[0].id);
  const selectedPhotography: Ref<string> = ref(PhotographyOptions[0].id);
  const headlineText: Ref<string> = ref('Bikin nyampe kantor duluan.');
  const bodyText: Ref<string> = ref('Jadi Cerdikiawan');

  const generated: Ref<boolean> = ref(false);
  const generating: Ref<boolean> = ref(false);
  const generateFunc: Ref<Function> = ref(() => {});

  const generatedResult: Ref<GeneratedResult[]> = ref([]);

  const generate = (func: Function) => {
    set(generateFunc, func);
    set(generating, true);
    start();
  }

  const { start } = useTimeoutFn(() => {
    set(generating, false);
    get(generateFunc)?.();
    set(generated, true);
  }, 1500, {
    immediate: false
  });

  return {
    selectedToneOfVoice,
    selectedLogo,
    selectedColor,
    selectedBrandExpression,
    selectedGrid,
    selectedProductAsset,
    selectedIcons,
    selectedPhotography,
    headlineText,
    bodyText,
    generated,
    generating,
    generate,
    generatedResult
  }
})
