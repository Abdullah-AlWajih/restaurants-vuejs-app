<template>
  <form class="g-3 needs-validation" @click.prevent>
    <div class="row g-3 align-items-center">
      <h1>Sign Up</h1>
      <div class="col-auto d-block mx-auto">
        <input
          v-model="name"
          class="form-control"
          placeholder="Enter your name"
          type="text"
        />
        <span v-if="v$.name.$error" class="error-feedback">{{
          v$.name.$errors[0].$message
        }}</span>
      </div>
    </div>
    <br />
    <div class="row g-3 align-items-center">
      <div class="col-auto d-block mx-auto">
        <input
          v-model="email"
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
          v-model="pass"
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
        <button class="btn btn-primary" type="submit" @click="onClickSignup()">
          Sign Up Now
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button
          class="btn btn-primary"
          type="button"
          @click="redirectTo({ value: 'signin' })"
        >
          Sign In
        </button>
      </div>
    </div>
    <br />
  </form>
</template>

<script>
import { mapActions } from "vuex";
import useVuelidate from "@vuelidate/core";
import { email, required, minLength } from "@vuelidate/validators";

export default {
  name: "SignUpForm",
  data() {
    return {
      v$: useVuelidate(),
      name: "",
      pass: "",
      email: "",
    };
  },
  validations() {
    return {
      name: { required, minLength: minLength(10) },
      pass: { required, minLength: minLength(8) },
      email: { required, email },
    };
  },
  methods: {
    ...mapActions(["redirectTo"]),
    onClickSignup() {
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
