<template>
<header>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-light bg-white">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarExample01"
        aria-controls="navbarExample01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarExample01">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item active">
            <router-link to="/" class="nav-link" aria-current="page" href="#">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/users" class="nav-link" href="#">Show users</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- Navbar -->
</header>

</template>

<script>
export default {
    name : "Header"
}
</script>

<style scoped>

</style>