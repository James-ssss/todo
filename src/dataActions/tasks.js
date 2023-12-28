export const TaskActions = {
    saveValue: (value) => {
        console.log("saveValue")
        return new Promise((resolve, reject) => {
            let valueToSave = value;
            if (!value) {
                valueToSave = [];
            }
            localStorage.setItem('tasks', JSON.stringify(valueToSave));
            resolve();
        })
    },
    getValue: () => {
        console.log("getValue")
        return new Promise((resolve, reject) => {
            const savedValue = localStorage.getItem('tasks');
            if (!savedValue) {
                resolve([])
            } else
                resolve(JSON.parse(savedValue));
        })
    }
}