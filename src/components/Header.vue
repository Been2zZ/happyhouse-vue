<template>
<<<<<<< HEAD
  <b-navbar>
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
          alt="Lightweight UI components for Vue.js based on Bulma"
        />
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item href="/housesearch">
        해피하우스 찾기
      </b-navbar-item>
      <b-navbar-item href="/coronasearch">
        선별 진료소
      </b-navbar-item>
      <b-navbar-item href="/board">
        게시판
      </b-navbar-item>
      <!-- <b-navbar-dropdown label="Info">
=======
    <b-navbar>
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="../assets/happylogo.png"
                    alt="happy house logo"
                >
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item href="/housesearch">
                해피하우스 찾기
            </b-navbar-item>
            <b-navbar-item href="/board">
                선별 진료소
            </b-navbar-item>
            <b-navbar-item href="/board">
                게시판
            </b-navbar-item>
            <b-navbar-dropdown label="Info">
>>>>>>> 0853065da41393666749f98c6c6365eb19bc40db
                <b-navbar-item href="#">
                    About
                </b-navbar-item>
                <b-navbar-item href="#">
                    Contact
                </b-navbar-item>
<<<<<<< HEAD
            </b-navbar-dropdown> -->
    </template>

    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <a class="button is-primary" href="/signup">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
=======
            </b-navbar-dropdown> 
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-primary" href="/signup">
                        <strong>Sign up</strong>
                    </a>
                    <a class="button is-light" href="/login">
                        Log in
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
>>>>>>> 0853065da41393666749f98c6c6365eb19bc40db
</template>

<script>
export default {
  name: 'Header',
};
</script>
