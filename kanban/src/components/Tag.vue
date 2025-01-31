<script setup>
    defineProps({
        tagValue: {
            type: String,
            required: true
        }
    });

    function getBadgeColor(tag) {
        switch (tag) {
            case 'Feature':
            case 'Bug':
                return 'text-bg-info';
            case 'In concept':
            case 'Shelved':
            case 'Abandoned':
                return 'text-bg-secondary';
            case 'Assigned':
                return 'text-bg-success';
            case 'Client request':
                return 'text-bg-warning';
            case 'Urgent':
                return 'text-bg-danger';
            default:
                return 'text-bg-light';
        }
    }

</script>

<template>
    <div :class="['badge me-2', getBadgeColor(tagValue)]">
        {{ tagValue }}
    </div>
</template>