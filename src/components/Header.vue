<template>
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
            <!-- <b-navbar-dropdown label="Info">
                <b-navbar-item href="#">
                    About
                </b-navbar-item>
                <b-navbar-item href="#">
                    Contact
                </b-navbar-item>
            </b-navbar-dropdown> --> 
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
</template>


<script>
export default {
  name: 'Header',
};
</script>
