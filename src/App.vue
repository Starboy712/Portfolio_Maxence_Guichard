<template>
  <div id="app">
    <header class="barre_navigation">
      <nav>
        <h1 id="logo"><a href="index.html"><router-link to="/">Maxence Guichard</router-link></a> </h1>
        <ul>
          <li><a href="#"><router-link to="/Communication">Communication</router-link></a></li>
          <li><a href="#"><router-link to="/Design">Design</router-link></a></li>
          <li><a href="#"><router-link to="/About">A propos</router-link></a></li>
          <li><router-link class="bouton" to="/Contact">Me contacter</router-link></li>
        </ul>
      </nav>
    </header>

    <router-view/>


    <footer>
      <nav>
        <ul class="gauche">
          <a href="index.html"><h1> Maxence Guichard</h1></a>
          <li><a href="https://www.instagram.com/maxence_guichard_/">Instagram</a></li>
          <li><a href="https://www.linkedin.com/in/maxence-guichard-919170185/">LinkedIn</a></li>
        </ul>

        <ul class="droite">
          <li><router-link  to="/Contact">Me contacter</router-link></li>
          <li><router-link  to="/Contact">A propos</router-link></li>
          <li><router-link  to="/Legal">Mentions légales</router-link></li>
        </ul>
      </nav>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

.description h1 {
  font-size: 2.5em;
  color: #1181B2;
}

h1  {
  font-size: 1.70em;
  font-family: "JetBrains Mono";
}
h2  {
  font-size: 2em;
  font-family: "JetBrains Mono";
  color: #1181B2;
}
h3  {
  font-size: 1.20em;
  font-family: "JetBrains Mono";
  color: #F9F871;
}

li {
  font-size: 1.15em;
}

p {
  font-family: "Noto Sans";
  font-size: 1em;
  color: white;
  line-height: 1.75em;
  font-weight: lighter;
}

html {
  background: #212221;
}

/*lien*/
a {
  text-decoration: none;
  font-family: "JetBrains Mono";
  color: white;
}

a:hover {
  color: #1181B2;
}



/*Header*/

.barre_navigation {
  background: none;
  color: white;
}

nav {
  max-height: 10vh;
  display: flex;
  align-items: center;
  width: 80%;
  margin: auto;
  padding: 2rem;
  border-bottom: #1181B2 0.1em solid;

}


nav > ul {
  display: flex;
  flex: 1 1 60rem;
  justify-content: space-around;
  list-style: none;
  color: white;
}

@media (max-width: 600px) {
  nav {
    display: flex;
    max-height: 10000vh;
  }
  nav ul {
    display: block;
    padding-left: 25%;
  }
  nav ul li {
    padding: 0.5em;
  }

  nav ul li .bouton {
    background: none;
    padding: 0;
    color: #F9F871;
  }

  nav ul li .bouton:hover {
    color: #1181B2;
  }

  .gauche {padding-left: 0}

}
@media (max-width: 450px) {
  .droite {
    padding-right: 0;
    padding-left: 10%;
  }

  nav ul {

    padding-left: 1em;
  }
}

footer {
  background: none;
  color: white;
  margin-top: 10em;
}
footer ul > a > h1 {
  margin-bottom: 0;
}
footer > nav {
  border-bottom: none;
  border-top: #1181B2 0.1em solid;
  margin-bottom: 5em;
}

footer > nav > ul {
  display: block;
}

.droite {
  text-align: end;
}
.gauche {
  margin-top: 0;
}






#logo {
  flex: 1 1 40rem;
}

/*bouton*/
.bouton {
  background: #F9F871;
  color: #212221;
  padding: 0.25em;
  border-radius: 0.10em;
  font-size: 1em;
}



.text > a:hover {
  color: #F9F871;
}

/*contenu*/


.call_to_action > .text > h2 {
  color: #F9F871;
}



.text > p > a {
  color: #F9F871;
  font-family: "Noto Sans";
}

.text > p {
  margin-bottom: 2em;
}
.text > .bouton {
  background: #1181B2;
  padding: 1em;
}
.text > .bouton:hover {
  color: #F9F871;
}

router-link:hover {
  color: #F9F871;
}




.image > img {
  width: 100%;
  height: auto;
  margin-top: 2em;
  border-radius: 2em;
  filter: drop-shadow(0.5em 0.5em 1em black);
}






.icone_svg {
  margin-left: 47%;
}

.active {
  color: #F9F871;
}
</style>
