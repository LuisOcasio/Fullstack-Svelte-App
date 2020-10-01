<script>
  import { Router, link } from "svelte-routing";
</script>

<style></style>

<Router>
  <nav>
    <div class="center-anchors">
      <a href="/" use:link food>Food</a>
      <a href="/" use:link services>Services</a>
      <a href="/" use:link about>About</a>
    </div>
  </nav>
</Router>
