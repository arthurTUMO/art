import Vue from 'vue'
import Router from 'vue-router'
import ExerciseOne from './views/ExerciseOne.vue'
import ExerciseTwo from './views/ExerciseTwo.vue'
import ExerciseThree from './views/ExerciseThree.vue'
import ExerciseFour from './views/ExerciseFour.vue'
import ExerciseFive from './views/ExerciseFive.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'exercise-one',
      component: ExerciseOne
    },
    {
      path: '/exercise-two',
      name: 'exercise-two',
      component: ExerciseTwo
    },
    {
      path: '/exercise-three',
      name: 'exercise-three',
      component: ExerciseThree
    },
    {
      path: '/exercise-four',
      name: 'exercise-four',
      component: ExerciseFour
    },
    {
      path: '/exercise-five',
      name: 'exercise-five',
      component: ExerciseFive
    }
  ]
})
