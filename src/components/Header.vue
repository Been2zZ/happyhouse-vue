<template>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      
      <b-navbar-brand href="/">Happy House</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/board">해피하우스 찾기</b-nav-item>
          <b-nav-item href="/board">근처 병원 정보</b-nav-item>
          <b-nav-item href="/board">게시판</b-nav-item>
           <!-- <b-nav-item href="/write">게시물 등록</b-nav-item> -->
         </b-navbar-nav>
      </b-collapse>
      
      <b-navbar-nav tag="div">
        <b-button variant="primary" href="/signup"><strong>Sign up</strong></b-button>
        <b-button variant="outline-primary">Log in</b-button>
      </b-navbar-nav>
      
    </b-navbar>
</template>


<script>
export default {
  name: 'Header',
};
</script>
