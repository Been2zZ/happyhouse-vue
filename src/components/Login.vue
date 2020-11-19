    <template>
    <section>

        <b-field label="Id">
            <b-input value="" placeholder="Id를 입력하세요."></b-input>
        </b-field>

        <b-field label="Password">
            <b-input value="" placeholder="비밀번호를 입력하세요." type="password"></b-input>
        </b-field>
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