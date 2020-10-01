<script>
  import {ApolloClient} from "@apollo/client"
  import { setClient } from "svelte-apollo";
  import { Router, Route } from "svelte-routing";
  import Landing from "./Pages/Landing.svelte";
  import Register from "./Pages/Register.svelte";

  let url = "";


  // 1. Create an Apollo client and pass it to all child components
  //    (uses svelte's built-in context)
  const client = new ApolloClient({
    /* ... */
  });
  setClient(client);
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
