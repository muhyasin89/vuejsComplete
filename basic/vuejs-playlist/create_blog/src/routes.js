import addBlog from './components/addBlog.vue';
import showBlog from './components/showBlogs.vue';
import listBlog from './components/listBlogs.vue';

export default[
  { path: '/', component: showBlog },
  { path: '/add', component: addBlogs },
  { path: '/list', component: listBlogs }
]
