<template>
  <div>
    <section class="hero is-fullheight">
      <section class="hero-head">
        <nav
          class="navbar is-transparent is-unselectable"
          role="navigation"
          aria-label="main navigation">
          <div class="container">
            <div class="navbar-brand">
              <router-link
                to="/"
                class="navbar-item">
                SWITCHBLADE
              </router-link>
              <a
                class="navbar-burger"
                role="button"
                aria-label="menu"
                aria-expanded="false"
                @click="burger">
                <span aria-hidden="true"/>
                <span aria-hidden="true"/>
                <span aria-hidden="true"/>
              </a>
            </div>
            <div
              ref="navMenu"
              class="navbar-menu">
              <div class="navbar-start">
                <router-link
                  to="/contributors"
                  class="navbar-item">
                  <b-icon
                    icon="account-group"
                    custom-size="mdi-18px"
                    class="is-hidden-desktop" />
                  <span>Contributors</span>
                </router-link>
                <a
                  class="navbar-item"
                  href="https://github.com/switchbladebot/"
                  target="_blank">
                  <b-icon
                    icon="github-circle"
                    custom-size="mdi-18px"
                    class="is-hidden-desktop" />
                  <span>GitHub</span>
                </a>
              </div>
              <div class="navbar-end">
                <div
                  ref="navDropdown"
                  class="navbar-item has-dropdown"
                >
                  <div
                    class="navbar-link is-flex"
                    @click="dropdown"
                  >
                    <span>{{ $t('lang') }}</span>
                    <div
                      class="navbar-dropdown is-boxed"
                    >
                      <a
                        class="navbar-item"
                        @click="changeLang('en')">English</a>
                      <a
                        class="navbar-item"
                        @click="changeLang('pt')">Portugues</a>
                    </div>
                  </div>
                </div>
                <a class="navbar-item">
                  <b-icon
                    icon="login-variant"
                    custom-size="mdi-18px" />
                  <span>Login</span>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </section>
      <nuxt />
      <section class="hero-foot">
        <footer class="footer has-text-white">
          <div class="content has-text-centered">
            <p>
              {{ $t('footer.made_with') }}<b-icon
                class="heart"
                icon="heart"
                custom-size="mdi-18px" /> <router-link
                  class="colorFade"
                  to="/contributors">{{ $t('footer.by_lot_of') }}</router-link>.
            </p>
          </div>
        </footer>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: 'Home', icon: 'home', to: { name: 'index' } }
      ]
    }
  },
  methods: {
    burger (event) {
      const $burger = event.target.closest('.navbar-burger')
      const $target = this.$refs.navMenu
      $burger.classList.toggle('is-active')
      $target.classList.toggle('is-active')
    },
    dropdown () {
      const $target = this.$refs.navDropdown
      $target.classList.toggle('is-active')
    },
    changeLang (lang) {
      //mutate 'locale' in store
      this.$store.commit('SET_LANG', lang)
      //re-route to the current page but with the selected language in a query string
      this.$router.push({ path: `${this.$router.currentRoute.path}?lang=${lang}` })
    }
  }
}
</script>

<style scoped>
  /** Navbar **/
  .navbar-brand > .navbar-item,
  .navbar-burger {
    font-weight: 900;
    font-style: italic;
    color: white;
  }
  .navbar-brand > .navbar-item:hover,
  .navbar-burger:hover {
    color: white;
  }
  a.navbar-item {
    -webkit-transition: 0.25s color ease-out;
    -moz-transition: 0.25s color ease-out;
    transition: 0.25s color ease-out;
  }

  @-moz-keyframes spin {
    100% {
      -moz-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  /** Footer **/
  .heart {
    transition: color 0.25s ease;
  }
  .heart:hover {
    color: #ff3860;
  }
  .colorFade {
    -webkit-transition: 0.25s color ease-out;
    -moz-transition: 0.25s color ease-out;
    transition: 0.25s color ease-out;
  }
</style>
