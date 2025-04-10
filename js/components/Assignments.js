import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
    components: { AssignmentList, AssignmentCreate },

    template: `
        <section class="space-y-6 p-6 bg-gray-900 text-gray-100 min-h-screen">
            <assignment-create @add="addAssignment"></assignment-create>

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
            ]
        };
    },

    methods: {
        addAssignment(newAssignment) {
            this.assignments.push(newAssignment);
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