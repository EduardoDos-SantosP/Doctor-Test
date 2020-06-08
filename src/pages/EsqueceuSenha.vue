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
              <div class="text-h6 flex flex-center">Esqueceu Senha</div>

              <div class="q-pa-md">
                <div class="q-gutter-md" style="max-width: 300px">

                  <q-input filled v-model="EsqueceuSenha.nome" label="Nome Completo" />
                  <q-input filled v-model="EsqueceuSenha.email" label="E-mail" />

                </div>
              </div>

              <div>
                <q-btn-group flat>
                  <q-btn  label="Cancelar" icon="fas fa-backspace" to="/Login" />
                  <q-btn  label="Enviar" icon="fas fa-envelope" to="/" />
                </q-btn-group>
              </div>
              <br/>

              <div>
              <label class="flex flex-center">--------------------------------------------------------------------</label>
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
export default {
    data(){
        return{
            EsqueceuSenha:{
                nome:"",
                email:""
            }
        }
    }
}
</script>

