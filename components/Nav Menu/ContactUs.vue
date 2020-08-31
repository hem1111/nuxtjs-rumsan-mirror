<template>
  <div class="tile is-ancestor mx-6">
    <div class="tile is-4 is-vertical is-parent has-background-warning box">
      <p class="title is-uppercase">Get in Touch</p>
      <p>We welcome new ideas, partnerships, and contributions.</p>
      <br />
      <br />
      <p>Kupondole-01</p>
      <p>Lalitpur, Nepal</p>
      <br />
      <br />
      <p>Mobile :</p>
      <p>+977 9801109681</p>
      <br />
      <br />
      <p>Email us at :</p>
      <p>team@rumsan.com</p>
    </div>
    <div class="tile is-parent">
      <div class="tile is-child box">
        <p class="title is-capitalized has-text-centered">Response Form</p>
        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input class="input" type="text" placeholder="Text input" />
          </div>
        </div>

        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input class="input" type="email" placeholder="Email input" />
          </div>

          <div class="field">
            <label class="label">Subject</label>
            <div class="control">
              <div class="select">
                <select>
                  <option>Select Option</option>
                  <option>Collaborations</option>
                  <option>Partnerships</option>
                  <option>Advices</option>
                  <option>Sugestions</option>
                </select>
              </div>
            </div>
          </div>

          <div class="field">
            <label class="label">Message</label>
            <div class="control">
              <textarea class="textarea" placeholder="Textarea"></textarea>
            </div>
          </div>
          <div class="field is-grouped">
            <div class="control">
              <button class="button is-link">Submit</button>
            </div>
            <div class="control">
              <button class="button is-link is-light">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>