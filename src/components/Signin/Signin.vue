<template>
  <form @click.prevent>
    <div class="row g-3 align-items-center">
      <h1>Sign In</h1>
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
        <button class="btn btn-primary" type="submit">Sign In</button>
      </div>
    </div>
    <br />
  </form>
</template>

<script>
export default {
  name: "SignUpForm",
  data() {
    return {
      pass: "",
      email: "",
    };
  },
};
</script>

<style></style>
