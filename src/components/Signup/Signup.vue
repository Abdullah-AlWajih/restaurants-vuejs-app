<template>
  <form @click.prevent>
    <div class="row g-3 align-items-center">
      <h1>Sign Up</h1>
      <div class="col-auto d-block mx-auto">
        <input class="form-control" placeholder="Enter your name" type="text" />
      </div>
    </div>
    <br />
    <div class="row g-3 align-items-center">
      <div class="col-auto d-block mx-auto">
        <input
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
          class="form-control"
          placeholder="Enter your number"
          type="tel"
        />
      </div>
    </div>
    <br />
    <div class="row g-3 align-items-center">
      <div class="col-auto d-block mx-auto">
        <button class="btn btn-secondary" type="submit">Sign Up Now</button>
      </div>
    </div>
    <br />
  </form>
</template>

<script>
export default {
  name: "SignUpForm",
};
</script>

<style></style>
