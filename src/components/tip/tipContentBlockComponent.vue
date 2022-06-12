<template>
  <div>
    <blockquote>
      <p>
        <i>{{ tip }}</i>
      </p>
    </blockquote>
  </div>
</template>

<script>
export default {
  name: "TipContentBlockComponent",
  props: {
    tip: {
      type: String,
    },
  },
};
</script>

<style scoped>
blockquote {
  padding: 0.5em 10px;
  margin: 1.5em 10px;
  border-left: 10px solid #42b983;

  background: #2c3e50;

  color: #ffffff;

  quotes: "\201C""\201D""\2018""\2019";
}
blockquote:before {
  content: open-quote;

  margin-right: 0.25em;

  color: #ffffff;
  font-size: 4em;
  line-height: 0.1em;
  vertical-align: -0.4em;
}
blockquote p {
  display: inline;
}
</style>
