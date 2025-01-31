<script setup>
	import Column from './Column.vue';

	defineProps({
		columns: {
            type: Array,
			required: true
		}
	});
</script>

<template>
	<div class="container">
		<div class="row">
			<div v-for="column in columns" class="col-12 col-md-6 col-lg-4">
                <Column :key="column.id" :column="column" />
			</div>
		</div>
	</div>
</template>
