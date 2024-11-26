<script>
  import 'bootstrap/js/dist/modal.js';
  const {
    btnTitle = 'Demo Modal',
    modalTitle = 'Demo Modal title',
    id = 'demoModal',
    body = `Hello, I'm a modal!`
  } = $props();
  const idLabel = id + 'Label';
</script>

<!-- Button trigger modal -->
<button
  type="button"
  class="btn btn-primary w-100"
  data-bs-toggle="modal"
  data-bs-target={'#' + id}
>
  {btnTitle}
</button>

<!-- Modal -->
<div class="modal fade" {id} tabindex="-1" aria-labelledby={idLabel} aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content bg-body-secondary">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id={idLabel}>{modalTitle}</h1>
        <button type="button" class="btn-close btn" data-bs-dismiss="modal" aria-label="Close"
        ></button>
      </div>
      <div class="modal-body">
        {body}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
