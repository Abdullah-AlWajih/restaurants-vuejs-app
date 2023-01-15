<template>
  <form @click.prevent>
    <div class="row g-3 align-items-center">
      <h1>Sign In</h1>
      <div class="col-auto d-block mx-auto">
        <input
          v-model="state.email"
          class="form-control"
          placeholder="Enter your email"
          type="email"
        />
        <span v-if="v$.email.$error" class="error-feedback">{{
          v$.email.$errors[0].$message
        }}</span>
      </div>
    </div>
    <br />
    <div class="row g-3 align-items-center">
      <div class="col-auto d-block mx-auto">
        <input
          v-model="state.pass"
          class="form-control"
          placeholder="Enter your password"
          type="password"
        />
        <span v-if="v$.pass.$error" class="error-feedback">{{
          v$.pass.$errors[0].$message
        }}</span>
      </div>
    </div>
    <br />
    <div class="row g-3 align-items-center">
      <div class="col-auto d-block mx-auto">
        <button class="btn btn-primary" type="submit" @click="onClickSignin()">
          Sign In
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button
          class="btn btn-primary"
          type="button"
          @click="redirectTo({ value: 'signup' })"
        >
          Sign Up
        </button>
      </div>
    </div>
    <br />
  </form>
</template>

<script>
import { mapActions } from "vuex";
import useVuelidate from "@vuelidate/core";
import { email, minLength, required } from "@vuelidate/validators";
import { computed, reactive } from "vue";

export default {
  name: "SignUpForm",
  // composition API
  setup() {
    // data
    const state = reactive({
      email: "",
      pass: "",
    });
    // validations
    const rules = computed(() => {
      return {
        email: { required, email },
        pass: { required, minLength: minLength(8) },
      };
    });

    const v$ = useVuelidate(rules, state);

    return { state, v$ };
  },
  data() {
    return {};
  },
  validations() {
    return {
      // pass: { required, minLength: minLength(8) },
      // email: { required, email },
    };
  },
  methods: {
    ...mapActions(["redirectTo"]),
    onClickSignin() {
      this.v$.$validate();
      if (!this.v$.error) {
        console.log("if");
      } else {
        console.log("else");
      }
    },
  },
};
</script>

<style scoped>
.error-feedback {
  color: red;
  font-size: 0.85em;
}
</style>
