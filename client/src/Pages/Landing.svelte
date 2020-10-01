<script>
  // your script goes here
  import Navigation from "../components/Navigation.svelte";
  import Footer from "../components/Footer.svelte";
  import { Router, link } from "svelte-routing";
</script>

<style>
    .wrapper {
      width: 1100px;
    }
    .action-buttons-wrapper{
      width: 100%;
      display: flex;
      justify-content: end;

    }
    .action-buttons{
      width: 15%;
      height: 1.5rem;
      display: flex;
      justify-content: center;
      align-items: center;     
    }
</style>

<div class="wrapper">
  <Navigation />
<div class='action-buttons-wrapper'>
      <a class="action-buttons" href="/register" use:link register>
        <button>Join Us</button>
      </a>

      <a class="action-buttons" href="/login" use:link login>
        <button>Login</button>
      </a>
  </div>
 </div>

<Footer/>