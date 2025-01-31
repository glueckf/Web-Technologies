<script setup>
	import { ref } from 'vue';
	import Tag from './Tag.vue'

	defineProps({
		task: {
            type: Object,
			required: true
        }
	});

	let collapsed = ref('collapsed')

	function toggleCollapsed() {
		if(collapsed.value.length === 0) {
			collapsed.value = 'collapsed'
		} else {
			collapsed.value = ''
		}
	}
</script>

<template>
	<div class="card bg-light mt-3">
        <h5 class="card-header collapsed">{{ task.title }}</h5>


        <div :class="['card-body', collapsed]" @click="toggleCollapsed()">
			{{ task.text }}
		</div>
		<div class="card-footer">
			<Tag v-for="tag in task.tags" :tag-value="tag" />
		</div>
	</div>
</template>

<style scoped>
	.collapsed {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		cursor: pointer;
	}
</style>
