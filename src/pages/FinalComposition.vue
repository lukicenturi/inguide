<script setup lang="ts">
import { useMainStore } from '@/store';
import { PhotographyOptions } from '@/data/photography';
import { get, set } from '@vueuse/core';
import { ColorOptions } from '@/data/colors';
import { GridOptions } from '@/data/grid';
import { type PhotographyData } from '@/types/photography';
import { type GridData } from '@/types/grid';
import { type LogoData } from '@/types/logo';
import { LogoOptions } from '@/data/logo';
import BrandExpression from '@/pages/BrandExpression.vue';
import { BrandExpressionOptions } from '@/data/brand-expression';
import html2canvas from 'html2canvas';


const store = useMainStore();
const { generated, generating, selectedPhotography, selectedColor, selectedGrid, selectedLogo, headlineText, bodyText, selectedBrandExpression, generatedResult } = storeToRefs(store);
const { generate } = store;

const photographyData: ComputedRef<PhotographyData> = computed(() => {
  return PhotographyOptions.find(({ id }) => id === get(selectedPhotography))!
});

const gridData: ComputedRef<GridData> = computed(() => {
  return GridOptions.find(({ id }) => id === get(selectedGrid))!
});

const logoData: ComputedRef<LogoData> = computed(() => {
  return LogoOptions.find(({ id }) => id === get(selectedLogo))!
});

const brandExpressionData: ComputedRef<BrandExpression> = computed(() => {
  return BrandExpressionOptions.find(({ id }) => id === get(selectedBrandExpression))!
});

const pol2rect = (r, degree) =>  {
  const rad = (degree - 90) * (Math.PI / 180);
  return [r * Math.cos(rad) + r, r * Math.sin(rad) + r];
}

const generateResult = () => {
  const canvasSize = 640;
  const mainColor = get(selectedColor);
  const colors = ColorOptions.filter(item => item !== mainColor).sort(() => Math.random() - 0.5).slice(0, 3);
  const grid = get(gridData);
  const brandExpression = get(brandExpressionData);
  const radius = grid.width / 2;

  const firstCircle = pol2rect(radius, brandExpression.firstDegree);
  const secondCircle = pol2rect(radius, brandExpression.secondDegree);

  const results = [
    {
      mainColor,
      colors,
      topPercentage: grid.topPercentage,
      mainCircleWidth: grid.width,
      mainCirclePosition: grid.horizontalPosition,
      position: 'left',
      logoPosition: 'right',
      textLeft: grid.textLeft,
      textTop: grid.textTop,
      firstCircle,
      secondCircle,
      rotate: 0,
      backgroundSrc: get(photographyData).src,
      logoSrc: get(logoData).realSrc,
      headlineText: get(headlineText),
      bodyText: get(bodyText),
    },
    {
      mainColor,
      colors,
      topPercentage: grid.topPercentage,
      mainCircleWidth: grid.width,
      mainCirclePosition: grid.horizontalPosition,
      position: 'right',
      logoPosition: 'left',
      textLeft: canvasSize - 230,
      textTop: grid.textTop,
      firstCircle,
      secondCircle,
      rotate: 180,
      backgroundSrc: get(photographyData).src,
      logoSrc: get(logoData).realSrc,
      headlineText: get(headlineText),
      bodyText: get(bodyText),
    }
  ];

  set(generatedResult, results.map((data, index) => ({ id: index + 1, ...data })));
};

const toPx = (number: number): string => {
  return `${number}px`
}

const toPercentage = (number: number): string => {
  return `${number}%`
}

const css = useCssModule();

const downloadURI = (uri: string, name: string) => {
  let link = document.createElement("a");

  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
}

const download = (id: number) => {
  const elemId = `canvas-${id}`
  const elem = document.getElementById(elemId)!;
  html2canvas(elem, { width: 640, height: 360, scale: 5 }).then(canvas => {
    let myImage = canvas.toDataURL();
    downloadURI(myImage, `result-${id}.png`);
  });
}
</script>
<template>
  <div>
    <div v-if="generating" class="fixed top-0 left-0 w-full h-full bg-yellow/[0.95] flex items-center justify-center z-10">
      <div class="flex items-center">
        <div class="w-[150px] relative">
          <img class="absolute w-[80px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" src="/img/loading/inner.png" />
          <img class="absolute w-[150px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-[loading_0.75s_infinite]" src="/img/loading/outer.png" />
        </div>
        <div class="ml-8">
          <div class="font-bold">
            DEIN-1 on working to generate media..
          </div>
          <div>
            please wait a second, don’t close the tab..
          </div>
        </div>
      </div>
    </div>
    <div>
      <button class="bg-transparent py-2 px-4 border border-2 border-black rounded transition hover:text-white hover:bg-black" @click="generate(generateResult)">
        {{ generated ? 'Re-Generate Media' : 'Generate Media'}}
      </button>
    </div>
    <div v-if="generated" class="grid gap-8 my-8">
      <div v-for="result in generatedResult" class="flex items-center flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
        <div :id="`canvas-${result.id}`" class="relative overflow-hidden" :class="css.canvas" :style="{ backgroundImage: `url(${result.backgroundSrc})` }">
          <div
            class="rounded-full"
            :class="css.mainCircle"
            :style="{
              backgroundColor: result.mainColor,
              width: toPx(result.mainCircleWidth),
              height: toPx(result.mainCircleWidth),
              top: toPercentage(result.topPercentage),
              [result.position]: toPx(result.mainCirclePosition),
              '--rotate': `${result.rotate}deg`
            }"
          >
            <div
              :class="css.firstCircle"
              :style="{
                left: toPx(result.firstCircle[0]),
                top: toPx(result.firstCircle[1]),
                backgroundColor: result.colors[0]
              }"
            >
            </div>
            <div
              :class="css.secondCircle"
              :style="{
                left: toPx(result.secondCircle[0]),
                top: toPx(result.secondCircle[1]),
                backgroundColor: result.colors[1]
              }"
            >
            </div>
          </div>
          <div class="flex items-center rounded-full justify-center p-2" :class="css.logo" :style="{ [result.logoPosition]: '20px', backgroundColor: result.colors[2] }">
            <img class="w-full" :src="result.logoSrc">
          </div>
          <div :class="css.product" :style="{ [result.position]: toPx(30) }">
            <img class="w-[120px]" src="/img/example/products/goride.png" alt="">
          </div>
          <div :class="css.texts" :style="{ left: toPx(result.textLeft), top: toPx(result.textTop), maxWidth: toPx(210) }">
            <div :class="css.headline" class="text-2xl">{{ result.headlineText }}</div>
            <div :class="css.bodyText" class="mt-3">{{ result.bodyText }}</div>
          </div>
        </div>

        <button class="py-2 px-4 border border-2 border-black rounded transition hover:text-white hover:bg-black" @click="download(result.id)">
          Download
        </button>
      </div>
    </div>
  </div>
</template>

<style module>
.canvas {
  width: 640px;
  height: 360px;
  background-size: cover;
  background-position: center;
}

.canvas > * {
  position: absolute;
}

.canvas * {
  font-family: 'Poppins';
}

.logo {
  bottom: 20px;
  width: 80px;
  height: 80px;
}

.logo img {
  filter: brightness(0) invert(100%) ;
}

.mainCircle {
  transform: translateY(-50%) rotate(var(--rotate));
}

.mainCircle > * {
  position: absolute;
  border-radius: 100%;
  transform: translate(-50%, -50%);
}

.firstCircle {
  width: 70px;
  height: 70px;
}

.secondCircle {
  width: 50px;
  height: 50px;
}

.product {
  top: 20px;
}

.texts {
  color: white;
}

.headline {
  font-weight: bold;
}

.bodyText {
  font-weight: 300;
}
</style>
