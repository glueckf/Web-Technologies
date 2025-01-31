<script setup>
	import TaskCard from './TaskCard.vue';

	defineProps({
		column: {
            type: Object,
			required: true
		}
	});
</script>

<template>
	<h4 class="text-light pt-4">{{ column.name }}</h4>
	<div class="column-body">
        <TaskCard v-for="task in column.tasks" :key="task.id" :task="task" />
	</div>
</template>