<template>
  <form @click.prevent>
    <div class="row g-3 align-items-center">
      <h1>Sign Up</h1>
      <div class="col-auto d-block mx-auto">
        <input
          v-model="name"
          class="form-control"
          placeholder="Enter your name"
          type="text"
        />
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
      </div>
    </div>
    <br />
    <div class="row g-3 align-items-center">
      <div class="col-auto d-block mx-auto">
        <button class="btn btn-primary" type="submit">Sign Up Now</button>
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

export default {
  name: "SignUpForm",
  data() {
    return {
      name: "",
      pass: "",
      email: "",
    };
  },
  methods: {
    ...mapActions(["redirectTo"]),
  },
};
</script>

<style></style>
