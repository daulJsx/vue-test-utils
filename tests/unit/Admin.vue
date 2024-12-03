<template>
  <nav>
    <a id="profile" href="/profile">My Profile</a>
    <a v-show="admin" id="admin" href="/admin">Admin</a>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      admin: false,
    };
  },
};
</script>
