<script>
	import 'bootstrap/js/dist/modal.js';
	// Keep classes from purge by postcss .modal-backdrop
</script>

<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#demoModal">
	Demo Modal
</button>

<!-- Modal -->
<div
	class="modal fade"
	id="demoModal"
	tabindex="-1"
	aria-labelledby="demoModalLabel"
	aria-hidden="true"
>
	<div class="modal-dialog modal-dialog-centered" data-bs-theme="dark">
		<div class="modal-content bg-dark">
			<div class="modal-header border-black">
				<h1 class="modal-title fs-5" id="demoModalLabel">Demo Modal title</h1>
				<button type="button" class="btn-close btn" data-bs-dismiss="modal" aria-label="Close"
				></button>
			</div>
			<div class="modal-body">It is nice to see you all here.</div>
			<div class="modal-footer border-black">
				<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
			</div>
		</div>
	</div>
</div>
