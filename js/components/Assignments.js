import AssignmentList from "./AssignmentList.js";

export default {
    components: { AssignmentList },

    template: `
        <section class="space-y-6 p-6 bg-gray-900 text-gray-100 min-h-screen">
            <form @submit.prevent="addAssignment" class="mb-6">
                <input 
                    v-model="newAssignment" 
                    type="text" 
                    placeholder="New Assignment" 
                    class="p-2 rounded-lg bg-gray-800 text-gray-100 w-full"
                />
                <button 
                    type="submit" 
                    class="mt-2 p-2 bg-blue-600 rounded-lg text-white hover:bg-blue-700"
                >
                    Add Assignment
                </button>
            </form>

            <assignment-list 
                :assignments="filters.inProgress" 
                title="In Progress" 
                class="bg-gray-800 p-4 rounded-lg shadow-md"
            ></assignment-list>
            <assignment-list 
                :assignments="filters.completed" 
                title="Completed" 
                class="bg-gray-800 p-4 rounded-lg shadow-md"
            ></assignment-list>
        </section>
    `,

    data() {
        return {
            assignments: [
                { name: 'Finish project', complete: false, id: 1 },
                { name: 'Read Chapter 4', complete: false, id: 2 },
                { name: 'Turn in Homework', complete: false, id: 3 },
            ],
            newAssignment: '' // For the input field
        };
    },

    methods: {
        addAssignment() {
            if (this.newAssignment.trim() === '') return;

            this.assignments.push({
                name: this.newAssignment,
                complete: false,
                id: this.assignments.length + 1
            });

            this.newAssignment = ''; // Clear the input field
        }
    },

    computed: {
        filters() {
            return {
                inProgress: this.assignments.filter(assignment => !assignment.complete),
                completed: this.assignments.filter(assignment => assignment.complete)
            };
        }
    }
};