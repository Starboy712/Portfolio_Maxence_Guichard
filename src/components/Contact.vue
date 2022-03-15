<template>
  <div>

    <div class="description">
      <h1>Vous voulez me contacter ?</h1>
      <p>
        Envie de faire appel à mes services pour des travaux de Web Design ou de Communication ? Vous pouvez me
        contacter via mon mail.
      </p>
      <h3>maxenceguichard974@gmail.com</h3>

    </div>



  </div>

</template>

<script>
export default {
  name: "Contact"
}
</script>

<style scoped>
.description, .conclusion {
  width: 70%;
  display: block;
  margin: auto;
  padding-top: 5em;
}

.conclusion {
  padding-top: 2em;
}

.conclusion h2 {
  color: #F9F871;
}


.image_article {
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1em;
}

.description > ul > li {
  color: white;
  font-family: "Noto Sans";
}

li {
  color: white;
}
</style>

