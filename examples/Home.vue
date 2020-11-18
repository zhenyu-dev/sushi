<template>
  <div class="">
    <VImage
      src="/images/icons/dribbble.png?i=1"
      :width="200"
      :height="200"
      srcset="/images/icons/dribbble.png, /images/icons/dribbble@2x.png 2x, /images/icons/dribbble@3x.png 3x"
    />
    <VImage
      src="/images/i.jpg?i=1"
      :width="800"
      :height="450"
      id="1"
      alt="alt..."
    />
    <br />
    <VImage src="/images/i.jpg?i=2" :width="800" :height="450" layout="intrinsic" id="2" />
    <br />
    <VImage src="/images/i.jpg?i=3" :width="800" :height="450" layout="responsive" id="3" />
    <br />
    <VImage src="/images/i.jpg?i=4" :width="800" :height="450" layout="fixed" id="4" />
    <br />
    <div style="height: 450px; width: 100%;">
      <VImage src="/images/i.jpg?i=5" layout="fill" id="5" />
    </div>
    <br />
    <div style="height: 450px; width: 100%;">
      <VImage src="/images/i.jpg?i=5" layout="fill" objectFit="cover" id="5" />
    </div>
    <br />
    <div style="height: 450px; width: 100%;">
      <VImage src="/images/i.jpg?i=5" layout="fill" objectFit="contain" id="6" />
    </div>
    <br />
    <div style="height: 450px; width: 100%;">
      <VImage src="/images/i.jpg?i=5" layout="fill" objectFit="none" id="7" />
    </div>
    <br />
  </div>
</template>

<script>
export default {
  methods: {},
};
</script>