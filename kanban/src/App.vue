<script setup>
import { ref, onMounted } from 'vue';
import Header from './components/Header.vue'
import Board from './components/Board.vue'

/* DO NOT MODIFY SCRIPT BELOW */
const columns = ref([]);
const title = "My Kanban Board"

const loadColumns = () => {
	columns.value = [
		{
			id: 1,
			name: 'To Do',
			tasks: [
				{ id: 't1', title: 'UI Design for Login Page', text: 'Create a modern and user-friendly interface for the login page. Ensure the design is responsive and accessible on various devices. Include elements like input fields, buttons, and error message displays.', tags: ['Feature', 'In concept'] },
				{ id: 't2', title: 'Gather Reporting Requirements', text: 'Meet with stakeholders to define the requirements for the new reporting module. Document all necessary data points and report formats. Establish a timeline for the development and delivery of this module.', tags: ['Feature', 'Client request'] },
				{ id: 't3', title: 'Prepare Project Documentation', text: 'Draft initial documentation outlining the project scope, objectives, and timeline. Include detailed descriptions of all features and functionalities. Ensure the documentation is clear for both technical and non-technical stakeholders.', tags: ['Feature', 'Client request'] }
			]
		},
		{
			id: 2,
			name: 'In Progress',
			tasks: [
				{ id: 't4', title: 'Fix API Synchronization Bug', text: 'Identify and resolve the data synchronization issue in the API. Test the fix under various scenarios to ensure data consistency. Document the changes made and update the API documentation accordingly.', tags: ['Bug', 'Assigned', 'Urgent'] },
				{ id: 't5', title: 'Develop Data Entry Front-End', text: 'Build a front-end interface for data entry that is intuitive and efficient. The interface should include form validation and error handling to guide the user. Ensure compatibility with major web browsers.', tags: ['Feature', 'Assigned'] }
			]
		},
		{
			id: 3,
			name: 'Done',
			tasks: [
				{ id: 't6', title: 'Database Query Optimization', text: 'Analyze and optimize the performance of database queries to reduce load times. Test the changes in a staging environment to ensure they don\'t negatively impact other functionalities. Document the optimizations made for future reference.', tags: ['Bug', 'Urgent'] },
				{ id: 't7', title: 'User Authentication Implementation', text: 'Implement a secure and efficient user authentication system. The system should support features like password recovery and multi-factor authentication. Conduct thorough testing to ensure security and reliability.', tags: ['Feature'] },
				{ id: 't8', title: 'Initial Feature Testing', text: 'Conduct initial rounds of testing for the newly developed feature module. Identify and document any bugs or issues for resolution. Gather feedback from test users to improve usability and functionality.', tags: ['Feature', 'Shelved'] }
			]
		}
	];
};

onMounted(loadColumns);
</script>

<template>
  <div>
    <Header :title="title" />
    <Board :columns="columns" />
  </div>
</template>

<style scoped>

</style>