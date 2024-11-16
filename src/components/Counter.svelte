<script>
  // Import styling for the component
  import './Logos.css';
  // Create a variable to hold the count value, initialized to 0
  let count = $state(0);
</script>

<!-- onclick event handler is set to the increment function -->
<!-- Button text displays the current count and the word "time" with appropriate pluralization -->
<button class="btn btn-secondary w-100" onclick={() => count++}>
  Pressed {count} time{count !== 1 ? 's' : ''}
</button>
