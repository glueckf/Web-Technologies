<script setup>

///////////////////////////////////////////////
// IDs to be used for the respective DOM elements in the template
///////////////////////////////////////////////

const MODAL_ID = 'modalRoot' // for the modal's root element
const MODAL_SELECT_COLUMN_ID = 'modalSelectColumn' // for the selector in the modal's header
const MODAL_BUTTON_X_ID = 'modalButtonX'
const MODAL_INPUT_TITLE_ID = 'modalInputTitle' // for the input where users enter the task's title
const MODAL_HELPER_TITLE_ID = 'modalHelperTitle' // for the helper showing the length of entered title
const MODAL_INPUT_TEXT_ID = 'modalInputText' // for the textarea where users enter the task's description
const MODAL_DROPDOWN_TRIGGER_ID = 'modalDropdownTrigger' // for the button that toggles the tag selection dropdown
const MODAL_DROPDOWN_MENU_ID = 'modalDropdownMenu' // for the root element of the tag selection dropdown's menu
const MODAL_CHECKBOX_BASE_ID = 'modalCheckbox' // base string for the checkboxes in the dropdown, concatenate with the respective tag's name
const MODAL_BUTTON_CANCEL = 'modalButtonCancel' // for the modal's cancel button
const MODAL_BUTTON_SUBMIT = 'modalButtonSubmit' // for the modal's submit button

///////////////////////////////////////////////
// Your implementation below
///////////////////////////////////////////////


</script>

<template>
    <div :id="MODAL_ID" class="modal" tabindex="-1">
        <!-- TODO: implement -->
    </div>
</template>

<style scoped>
    /* no custom stylesheet necessary thanks to Bootstrap */
</style>