<script>
  import { Router, Route } from "svelte-routing";
  import Landing from "./Pages/Landing.svelte";
  import Register from "./Pages/Register.svelte";

  let url = "";
</script>

<main>
  <Router {url}>

    <Route exact path="/">
      <Landing />
    </Route>

    <Route path="/register">
      <Register />
    </Route>

  </Router>

</main>
