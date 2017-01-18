import {ContentBlockPage} from './components/pages/ContentBlockPage';
import {CardsPage} from './components/pages/CardsPage';
import {ListsPage} from './components/pages/ListsPage';
import {ContactsPage} from './components/pages/ContactsPage';
import {SortablePage} from './components/pages/SortablePage';
import {SwipeoutPage} from './components/pages/SwipeoutPage';
import {AccordionPage} from './components/pages/AccordionPage';
import {ProgressbarPage} from './components/pages/ProgressbarPage';
import {FormsPage} from './components/pages/FormsPage';
import {GridPage} from './components/pages/GridPage';
import {SmartSelectPage} from './components/pages/SmartSelectPage';
import {ChipsPage} from './components/pages/ChipsPage';
import {PreloaderPage} from './components/pages/PreloaderPage';
import {PullRefreshPage} from './components/pages/PullRefreshPage';
import {InfinitePage} from './components/pages/InfinitePage';
import {SwiperPage} from './components/pages/SwiperPage';
import {SearchbarPage} from './components/pages/SearchbarPage';
import {TabsPage} from './components/pages/TabsPage';
import {TabsSwipeablePage} from './components/pages/TabsSwipeablePage';

export const routes = [{
    path: '/content-block/',
    component: ContentBlockPage
}, {
    path: '/cards/',
    component: CardsPage
}, {
    path: '/lists/',
    component: ListsPage
}, {
    path: '/contacts/',
    component: ContactsPage
}, {
    path: '/sortable/',
    component: SortablePage
}, {
    path: '/swipeout/',
    component: SwipeoutPage
}, {
    path: '/accordion/',
    component: AccordionPage
}, {
    path: '/progressbar/',
    component: ProgressbarPage
}, {
    path: '/forms/',
    component: FormsPage
}, {
    path: '/smart-select/',
    component: SmartSelectPage
}, {
    path: '/chips/',
    component: ChipsPage
}, {
    path: '/grid/',
    component: GridPage
}, {
    path: '/preloader/',
    component: PreloaderPage
}, {
    path: '/pull-to-refresh/',
    component: PullRefreshPage
}, {
    path: '/infinite/',
    component: InfinitePage
}, {
    path: '/swiper/',
    component: SwiperPage
}, {
    path: '/searchbar/',
    component: SearchbarPage
}, {
    path: '/tabs/',
    component: TabsPage
}, {
    path: '/tabs-swipeable/',
    component: TabsSwipeablePage
}];