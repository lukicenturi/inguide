import { createRouter, createWebHistory } from 'vue-router'

import Routes from '@/router/index';
import { setupLayouts } from 'virtual:generated-layouts';
import ToneOfVoice from '@/pages/ToneOfVoice.vue';
import Logo from '@/pages/Logo.vue';
import Color from '@/pages/Color.vue';
import Typography from '@/pages/Typography.vue';
import BrandExpression from '@/pages/BrandExpression.vue';
import Grid from '@/pages/Grid.vue';
import ProductAsset from '@/pages/ProductAsset.vue';
import Icon from '@/pages/Icon.vue';
import Illustration from '@/pages/Illustration.vue';
import Photography from '@/pages/Photography.vue';
import DataVisualization from '@/pages/DataVisualization.vue';
import FinalComposition from '@/pages/FinalComposition.vue';
import Login from '@/pages/Login.vue';
import Tools from '@/pages/Tools.vue';
import Text from '@/pages/Text.vue';

const routes = setupLayouts([
  {
    path: Routes.INDEX_ROUTE,
    redirect: Routes.ACCOUNT_ROUTE,
  },
  {
    path: Routes.ACCOUNT_ROUTE,
    component: Login,
    meta: {
      layout: 'account'
    }
  },
  {
    path: Routes.TOOLS_ROUTE,
    component: Tools,
    meta: {
      layout: 'tools'
    }
  },
  {
    path: Routes.TONE_OF_VOICE_ROUTE,
    component: ToneOfVoice
  },
  {
    path: Routes.LOGO_ROUTE,
    component: Logo
  },
  {
    path: Routes.COLOR_ROUTE,
    component: Color
  },
  {
    path: Routes.TYPOGRAPHY_ROUTE,
    component: Typography
  },
  {
    path: Routes.TEXT_ROUTE,
    component: Text
  },
  {
    path: Routes.BRAND_EXPRESSION_ROUTE,
    component: BrandExpression
  },
  {
    path: Routes.GRID_ROUTE,
    component: Grid
  },
  {
    path: Routes.PRODUCT_ASSET_ROUTE,
    component: ProductAsset
  },
  {
    path: Routes.PHOTOGRAPHY_ROUTE,
    component: Photography
  },
  {
    path: Routes.ICONOGRAPHY_ROUTE,
    component: Icon
  },
  {
    path: Routes.ILLUSTRATION_ROUTE,
    component: Illustration
  },
  {
    path: Routes.DATA_VISUALIZATION_ROUTE,
    component: DataVisualization
  },
  {
    path: Routes.FINAL_COMPOSITION_ROUTE,
    component: FinalComposition
  }
])

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
