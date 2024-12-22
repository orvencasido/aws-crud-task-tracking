document.addEventListener('DOMContentLoaded', function () {
    const app = {
        tasks: [],
        el: document.getElementById('taskList'),

        // Fetch and render all tasks from API
        FetchAll: async function () {
            try {
                const response = await fetch('INSERT_API_GATEWAY_ENDPOINT', {
                    method: 'GET',
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch tasks. Please try again.');
                }

                const data = await response.json();
                this.tasks = (data.tasks || []).sort((a, b) => b.taskid - a.taskid);
                this.Render();
                this.UpdateTaskCount();
            } catch (error) {
                console.error('Error fetching tasks:', error);
                alert('Error fetching tasks. Check the console for details.');
            }
        },

        // Render tasks to the DOM
        Render: function () {
            const taskHTML = this.tasks.length
                ? this.tasks.map((task, index) => `
                    <tr>
                        <td>${index + 1}</td>
                        <td>${task.taskName || task.task || 'Unnamed Task'}</td>
                        <td><button onclick="app.Edit('${task.taskid}')" class="btn btn-warning">Edit</button></td>
                        <td><button onclick="app.Delete('${task.taskid}')" class="btn btn-danger">Delete</button></td>
                    </tr>
                `).join('')
                : '<tr><td colspan="4" class="text-center">No tasks added</td></tr>';

            this.el.innerHTML = taskHTML;
        },

        // Add a new task
        Add: async function () {
            const taskInput = document.getElementById('taskInput');
            const taskValue = taskInput.value.trim();

            if (!taskValue) {
                alert('Please enter a task.');
                return;
            }

            const task = {
                taskid: Date.now().toString(),
                taskName: taskValue,
            };

            try {
                const response = await fetch('INSERT_API_GATEWAY_ENDPOINT', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(task),
                });

                if (!response.ok) {
                    throw new Error('Failed to add task. Please try again.');
                }

                console.log('Task added successfully:', await response.json());
                this.FetchAll(); // Refresh task list
                taskInput.value = ''; // Clear input field
            } catch (error) {
                console.error('Error adding task:', error);
                alert('Error adding task. Check the console for details.');
            }
        },

        // Delete a task
        Delete: async function (taskId) {
            if (!confirm(`Are you sure you want to delete Task ID: ${taskId}?`)) {
                return;
            }

            try {
                const response = await fetch('INSERT_API_GATEWAY_ENDPOINT', {
                    method: 'DELETE',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ taskId }), // Send taskId in the request body
                });

                if (!response.ok) {
                    throw new Error('Failed to delete task. Please try again.');
                }

                console.log('Task deleted successfully:', await response.json());
                this.FetchAll(); // Refresh task list
            } catch (error) {
                console.error('Error deleting task:', error);
                alert('Error deleting task. Check the console for details.');
            }
        },

        // Placeholder for editing functionality
        Edit: async function (taskId) {
            const taskToEdit = this.tasks.find(task => task.taskid === taskId);
            if (!taskToEdit) {
                alert('Task not found.');
                return;
            }
        
            // Prompt user for new task name
            const newTaskValue = prompt('Edit Task Name:', taskToEdit.taskName || taskToEdit.task || 'Unnamed Task');
            if (newTaskValue === null) {
                // User canceled the prompt
                return;
            }
        
            if (newTaskValue.trim() === '') {
                alert('Task name cannot be empty.');
                return;
            }
        
            try {
                // Set the update key to "taskName"
                const updateKey = 'taskName';
                const response = await fetch('INSERT_API_GATEWAY_ENDPOINT', {
                    method: 'PATCH',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        taskId,         // ID of the task to update
                        updateKey,      // Field name to update ("taskName")
                        updateValue: newTaskValue.trim(), // New value for the field
                    }),
                });
        
                if (!response.ok) {
                    throw new Error('Failed to update task. Please try again.');
                }
        
                console.log('Task updated successfully:', await response.json());
                this.FetchAll(); // Refresh the task list
            } catch (error) {
                console.error('Error updating task:', error);
                alert('Error updating task. Check the console for details.');
            }
        },
        
        // Update task count display
        UpdateTaskCount: function () {
            const countEl = document.getElementById('taskCount');
            countEl.textContent = `${this.tasks.length} Task${this.tasks.length !== 1 ? 's' : ''}`;
        },
    };

    // Attach the app globally for button onclick references
    window.app = app;

    // Add form submission handler
    document.getElementById('taskForm').addEventListener('submit', (event) => {
        event.preventDefault();
        app.Add();
    });

    // Fetch and display tasks on page load
    app.FetchAll();
});
