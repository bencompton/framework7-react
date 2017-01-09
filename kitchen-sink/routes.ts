import {ContentBlockPage} from './components/pages/ContentBlockPage';
import {CardsPage} from './components/pages/CardsPage';
import {ListsPage} from './components/pages/ListsPage';
import {ContactsPage} from './components/pages/ContactsPage';
import {SortablePage} from './components/pages/SortablePage';
import {SwipeoutPage} from './components/pages/SwipeoutPage';
import {AccordionPage} from './components/pages/AccordionPage';
import {ProgressbarPage} from './components/pages/ProgressbarPage';
import {GridPage} from './components/pages/GridPage';

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
    path: '/grid/',
    component: GridPage
}];