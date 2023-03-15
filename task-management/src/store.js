import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        tasks: [
            {
                id: 1,
                name: '牛乳を買う',
                done: false
            },
            {
                id: 2,
                name: 'Vue.jsの本を買う',
                done: true
            }
        ],
        labels: [
            {
                id: 1,
                text: '買い物'
            },
            {
                id: 2,
                text: '食料'
            },
            {
                id: 3,
                text: '本'
            }
        ],
        nextTaskId: 3,
        nextLabelId: 4,
        filter: null
    },
    getters: {
        filteredTasks(state) {
            if(!state.filter) {
                return state.tasks
            }
            return state.tasks.filter(function(task) {
                return task.labelIds.indexOf(state.filter) >= 0
            })
        }
    },
    mutations: {
        addTask: function(state, { name, labelIds }) {
            state.tasks.push({
                id: state.nextTaskId,
                name,
                labelIds,
                done: false
            })
            state.nextTaskId++
        },
        toggleTaskStatus(state, { id }) {
            const filtered = state.tasks.filter(function(task) {
                return task.id === id
            })
            filtered.forEach(function(task) {
                task.done = !task.done
            })
        },
        // ラベルを追加する
        addLabel(state, { text } ) {
            state.labels.push({
                id: state.nextLabelId,
                text
            })
            state.nextLabelId++
        },
        // フィルタリング対象のラベル変更する
        changeFilter(state, {filter}) {
            state.filter = filter
        },
        // ステートを復元する
        restore(state, {tasks, labels, nextTaskId, nextLabelId}) {
            state.taksks = tasks
            state.labels = labels
            state.nextTaslId = nextTaskId
            state.nextLabelId = nextLabelId
        }
    },

    actions: {
        save({state}) {
            const data = {
                tasks: state.tasks,
                labels: state.labels,
                nextTaskId: state.nextTaskId,
                nextLabelId: state.nextLabelId
            }
            localStorage.setItem('taks-app-data', JSON.stringify(data))
        },
        restore({commit}) {
            const data = localStorage.getItem('taks-app-data')
            if(data) {
                commit('restore', JSON.parse(data))
            }
        }
    }
})

export default store;