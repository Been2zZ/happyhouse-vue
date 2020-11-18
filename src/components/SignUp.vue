<template>
    <section>
       <b-container fluid>
           <br>
  <b-row class="my-1">
    <b-col sm="3">
      <label for="input-none">아이디:</label>
    </b-col>
    <b-col sm="9">
      <b-form-input id="input-none" :state="null" placeholder="No validation"></b-form-input>
    </b-col>
  </b-row>

  <b-row class="my-1">
    <b-col sm="3">
      <label for="input-valid">비밀번호:</label>
    </b-col>
    <b-col sm="9">
      <b-form-input id="input-valid" :state="true" placeholder="Valid input"></b-form-input>
    </b-col>
  </b-row>

  <b-row class="my-1">
    <b-col sm="3">
      <label for="input-invalid">이름:</label>
    </b-col>
    <b-col sm="9">
      <b-form-input id="input-invalid" :state="false" placeholder="Invalid input"></b-form-input>
    </b-col>
  </b-row>
</b-container>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                name: ''
            }
        }
    }
</script>