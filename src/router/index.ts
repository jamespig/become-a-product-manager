import { createRouter, createWebHistory } from 'vue-router'
import CommunityDesignSystemView from '@/views/CommunityDesignSystemView.vue'
import CommunityManagementLayoutView from '@/views/CommunityManagementLayoutView.vue'
import CommunityManagementView from '@/views/CommunityManagementView.vue'
import CommunityOverviewView from '@/views/CommunityOverviewView.vue'
import CommunityPlanningView from '@/views/CommunityPlanningView.vue'
import CommunityYoxiDataView from '@/views/CommunityYoxiDataView.vue'
import HomeView from '@/views/HomeView.vue'
import SkillDetailView from '@/views/SkillDetailView.vue'
import SkillsView from '@/views/SkillsView.vue'
import YoxiFeatureCandidatesView from '@/views/YoxiFeatureCandidatesView.vue'
import YoxiLayoutView from '@/views/YoxiLayoutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/skills',
      name: 'skills',
      component: SkillsView,
    },
    {
      path: '/skills/:id',
      name: 'skill-detail',
      component: SkillDetailView,
      props: true,
    },
    {
      path: '/community-management',
      name: 'community-management',
      component: CommunityManagementLayoutView,
      children: [
        {
          path: '',
          redirect: '/community-management/overview',
        },
        {
          path: 'overview',
          name: 'community-management-overview',
          component: CommunityOverviewView,
        },
        {
          path: 'insights',
          name: 'community-management-insights',
          component: CommunityManagementView,
        },
        {
          path: 'planning',
          name: 'community-management-planning',
          component: CommunityPlanningView,
        },
        {
          path: 'design-system',
          name: 'community-management-design-system',
          component: CommunityDesignSystemView,
        },
      ],
    },
    {
      path: '/yoxi',
      name: 'yoxi',
      component: YoxiLayoutView,
      children: [
        {
          path: '',
          redirect: '/yoxi/visualization',
        },
        {
          path: 'visualization',
          name: 'yoxi-visualization',
          component: CommunityYoxiDataView,
        },
        {
          path: 'candidates',
          name: 'yoxi-candidates',
          component: YoxiFeatureCandidatesView,
        },
      ],
    },
  ],
})

export default router
