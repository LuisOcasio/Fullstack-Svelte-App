<script>
  import Navigation from "./../components/Navigation.svelte";
  import { onMount } from "svelte";
  import {
    emailValidator,
    requiredValidator,
    passValidator
  } from "../validation/validator.js";
  import { createFieldValidator } from "../validation/validation.js";

  onMount(async () => {
    await fetch(``).then(r => r.json());
  });

  const [validity, validate] = createFieldValidator(
    requiredValidator(),
    emailValidator()
  );

  function handleSubmit(e) {
    const { elements } = e.target;
    console.log(e);
  }

  let email = null;
  let pass = null;
</script>

<style>
  
</style>

<div class="register-container">
  <Navigation />
  <div class="register-title">
    <h1>A market for locals and vendors</h1>
  </div>

  <div class="form-wrapper">
    <form>
      <input
        class="input"
        type="text"
        bind:value={email}
        placeholder="Your Email"
        class:field-danger={!$validity.valid}
        class:field-success={$validity.valid}
        use:validate={email} />
      {#if $validity.dirty && !$validity.valid}
        <span class="validation-hint">
          {$validity.message} {$validity.dirty}
        </span>
      {/if}
      <input
        class="input"
        type="text"
        bind:value={pass}
        placeholder="password"
        class:field-danger={!$validity.valid}
        class:field-success={$validity.valid}
        use:validate={pass} />
      {#if $validity.dirty && !$validity.valid}
        <span class="validation-hint">
          {$validity.message} {$validity.dirty}
        </span>
      {/if}
      <button
        on:submit|preventDefault={handleSubmit}
        disabled={!$validity.valid}>
        Register
      </button>
    </form>
  </div>
</div>


