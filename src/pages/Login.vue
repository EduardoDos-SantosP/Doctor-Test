<template>
    <q-page class="flex flex-center">

      <q-card flat bordered class="my-card bg-grey-1">
        <q-card-section>

          <div class="row items-center no-wrap">
            <div class="col">
              <img
                class="flex flex-center"
                alt="Quasar logo"
                src="~assets/Doctor_Test.png" style="max-width: 300px"
              >
              <div class="text-h6 flex flex-center">Login</div>

              <div class="q-pa-md">
                <div class="q-gutter-md" style="max-width: 300px">

                  <q-input filled v-model="Login.email" label="E-mail" />
                  <q-input filled v-model="Login.senha" label="Senha" type="password" />

                </div>
              </div>

              <div>
                <q-btn-group flat>
                  <q-btn  label="Cadastrar" icon="fas fa-user-plus" to="/Cadastrar" />
                  <q-btn  label="Entrar" icon="fas fa-sign-in-alt" to="/" />
                </q-btn-group>
              </div>

              <div>
              <q-btn flat  class="flex flex-center"  label="Esqueci a senha" icon="fas fa-key" to="/EsqueceuSenha" />
              </div>

              <br/>
              <label class="fas fa-copyright flex flex-center">Tecnizium</label>

            </div>
          </div>

        </q-card-section>
      </q-card>

</q-page>
</template>

  <style lang="sass" scoped>
  .my-card
    width: 100%
    max-width: 300px
  </style>

<script>
export default{
name: "Login",
    data(){
      return {
        Login:{
          email:'',
          senha:''
        }
      }
    }
}
</script>
