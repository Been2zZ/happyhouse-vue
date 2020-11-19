    <template>
    <section>
        <b-field label="아이디">
            <b-input value=""></b-input>
        </b-field>

        <b-field label="비밀번호">
            <b-input value="" type="password" password-reveal></b-input>
        </b-field>

        <b-button type="is-primary">로그인</b-button>
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

<style scoped>
section {
  width: 50%;
  padding-top: 5%;
  margin:0 auto; 
}
</style>