<template>
  <section class="section introduction">
    <div class="container has-text-centered">
      <img
        draggable="false"
        src="@/assets/logo.svg"
        class="logo"
        width="128"
        height="128">
      <h1 class="title has-text-white">{{ $t('home.slogan') }}</h1>
      <div class="buttons is-centered">
        <a
          class="button is-large is-rounded is-white"
          href="http://support.switchblade.xyz/"
          target="_blank">
          <b-icon icon="lifebuoy" />
          <span>{{ $t('home.support_server') }}</span>
        </a>
        <a
          class="button is-large is-rounded is-primary"
          href="http://invite.switchblade.xyz/"
          target="_blank">
          <b-icon icon="email" />
          <span>{{ $t('home.invite') }}</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'HomePage',
  data() {
      return {

      }
  }
}
</script>

<style scoped>
  .is-centered {
    text-align: center;
  }
  .logo {
    animation: pulse 5s ease-in-out infinite;
    padding-bottom: 10px;
  }
  .button {
    transition: 0.25s all ease-in-out;
  }
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }
  @-webkit-keyframes pulse {
    0% {
      -webkit-transform: scale(1);
    }
    50% {
      -webkit-transform: scale(1.05);
    }
    100% {
      -webkit-transform: scale(1);
    }
  }
  @-moz-keyframes pulse {
    0% {
      -moz-transform: scale(1);
    }
    50% {
      -moz-transform: scale(1.05);
    }
    100% {
      -moz-transform: scale(1);
    }
  }
</style>
