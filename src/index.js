import { HeaderComponent } from './components/header.copmonent'
import { NavigationComponent } from './components/navigation.component';
import { CreateComponent } from './components/create.component';
import { FavoriteComponent } from './components/favorite.component';
import { PostsComponent } from './components/posts.component';

new HeaderComponent('header')

const navigation = new NavigationComponent('navigation')
const create = new NavigationComponent('create')
const favorite = new NavigationComponent('favorite')
const posts = new NavigationComponent('posts')