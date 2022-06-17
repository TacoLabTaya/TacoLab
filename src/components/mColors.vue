<template>
  <div class="mColor" :style="styleset">
    <slot />
  </div>
</template>

<script setup>
  const prop = defineProps({ blok: Object });
  
  const hx2r = (hx) => {
    return parseInt(hx.substring(1, 3), 16).toString()
  };
  const hx2g = (hx) => {
    return parseInt(hx.substring(3, 5), 16).toString()
  };
  const hx2b = (hx) => {
    return parseInt(hx.substring(5, 7), 16).toString()
  ;}
  const rgb2hsl = (r, g, b) => {
    const RGB_MAX = 255;
    const HUE_MAX = 360;
    const SATURATION_MAX = 100;
    const LIGHTNESS_MAX = 100;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h, s, l;

    // Hue
    const hp = HUE_MAX / 6;
    if (max == min) {
      h = 0;
    } else if (r == max) {
      h = hp * ((g - b) / (max - min));
    } else if (g == max) {
      h = hp * ((b - r) / (max - min)) + HUE_MAX / 3;
    } else {
      h = hp * ((r - g) / (max - min)) + HUE_MAX * 2 / 3;
    }
    if (h < 0) {
      h += HUE_MAX;
    }

    // Saturation
    const cnt = (max + min) / 2;
    if (cnt < RGB_MAX / 2) {
      if (max + min <= 0) {
        s = 0;
      } else {
        s = (max - min) / (max + min) * SATURATION_MAX;
      }
    } else {
      s = (max - min) / (RGB_MAX * 2 - max - min) * SATURATION_MAX;
    }

    // Lightness
    l = (max + min) / RGB_MAX / 2 * LIGHTNESS_MAX;
    
    return {
      h: h,
      s: s,
      l: l
    };
  };
  const hx2hsl= (hx) => {
    const r = hx2r(hx);
    const g = hx2g(hx);
    const b = hx2b(hx);
    const hsl = rgb2hsl(r,g,b);
    return hsl;
  };
  const hsl2String = (hsl) => {
    return `${hsl.h.toFixed(0)},${hsl.s.toFixed(0)}%,${hsl.l.toFixed(0)}%`;
  };
  const inRange = (val,min,max) => {
    if (val<min) { return min; }
    if (val>max) { return max; }
    return val;
  };
  const hx2hls = (hx,dept) => {
    /* dept: 0 - 1 / 0.1 */
    const hsl = hx2hsl(hx);
    const ret = {
      h: hsl.h,
      s: inRange(hsl.s + ((100-hsl.s) * dept), 0, 100),
      l: inRange(hsl.l + ((100-hsl.l) * dept), 0, 100),
    };
    return hsl2String(ret);
  };
  const styleset = computed( () => {
    const style = {
      "--c-base"  :`${hx2hls(prop.blok.base, 0 * prop.blok.dept)}`,
      "--c-base-l":`${hx2hls(prop.blok.base, 1 * prop.blok.dept)}`,
      "--c-base-d":`${hx2hls(prop.blok.base,-1 * prop.blok.dept)}`,
      "--c-main"  :`${hx2hls(prop.blok.main, 0 * prop.blok.dept)}`,
      "--c-main-l":`${hx2hls(prop.blok.main, 1 * prop.blok.dept)}`,
      "--c-main-d":`${hx2hls(prop.blok.main,-1 * prop.blok.dept)}`,
      "--c-acce"  :`${hx2hls(prop.blok.acce, 0 * prop.blok.dept)}`,
      "--c-acce-l":`${hx2hls(prop.blok.acce, 1 * prop.blok.dept)}`,
      "--c-acce-d":`${hx2hls(prop.blok.acce,-1 * prop.blok.dept)}`,
    };
    return style;
  });
</script>

<style lang="scss">
</style>