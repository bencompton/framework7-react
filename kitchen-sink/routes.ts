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
import {MessagesPage} from './components/pages/MessagesPage';
import {BarsPage} from './components/pages/BarsPage';
import {BarsTabbarPage} from './components/pages/BarsTabbarPage';
import {BarsTabbarLabelsPage} from './components/pages/BarsTabbarLabelsPage';
import {BarsHidePage} from './components/pages/BarsHidePage';
import {BarsSubnavbarPage} from './components/pages/BarsSubnavbarPage';
import {FabPage} from './components/pages/FabPage';
import {FabDialPage} from './components/pages/FabDialPage';
import {LoginScreenPage} from './components/pages/LoginScreenPage';
import {VirtualListPage} from './components/pages/VirtualListPage';
import {PhotoBrowserPage} from './components/pages/PhotoBrowserPage';
import {ModalsPage} from './components/pages/ModalsPage';
import {TimelineVerticalPage} from './components/pages/TimelineVerticalPage';
import {TimelineHorizontalPage} from './components/pages/TimelineHorizontalPage';
import {TimelineCalendarPage} from './components/pages/TimelineCalendarPage';
import {DynamicRoutePage} from './components/pages/DynamicRoutePage';

import {NestedRoutesPage} from './components/pages/NestedRoutesPage';
import {NestedRoutesTabsPage} from'./components/pages/NestedRoutesTabsPage';
import {NestedRoutesTabbarPage} from'./components/pages/NestedRoutesTabbarPage';
import {Tab1} from './components/nested-routes/tabs/Tab1';
import {Tab2} from './components/nested-routes/tabs/Tab2';
import {Tab3} from './components/nested-routes/tabs/Tab3';
import {Tab3AlternateContent} from './components/nested-routes/tabs/Tab3AlternateContent';
import {TabbarTab1} from './components/nested-routes/tabs/TabbarTab1';
import {TabbarTab2} from './components/nested-routes/tabs/TabbarTab2';
import {TabbarTab3} from './components/nested-routes/tabs/TabbarTab3';
import {TabbarTab3AlternateContent} from './components/nested-routes/tabs/TabbarTab3AlternateContent';

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
}, {
    path: '/messages/',
    component: MessagesPage
}, {
    path: '/bars/',
    component: BarsPage
}, {
    path: '/bars-tabbar/',
    component: BarsTabbarPage
}, {
    path: '/bars-tabbar-labels/',
    component: BarsTabbarLabelsPage
}, {
    path: '/bars-hide/',
    component: BarsHidePage
}, {
    path: '/bars-subnavbar/',
    component: BarsSubnavbarPage
}, {
    path: '/fab/',
    component: FabPage
}, {
    path: '/fab-dial/',
    component: FabDialPage
}, {
    path: '/login-screen/',
    component: LoginScreenPage
}, {
    path: '/virtual-list/',
    component: VirtualListPage
}, {
    path: '/photo-browser/',
    component: PhotoBrowserPage
}, {
    path: '/nested-routes/',
    component: NestedRoutesPage
}, {
    path: '/nested-routes/tabs/',
    component: NestedRoutesTabsPage,
    tabs: [{
        path: '/',
        tabId: 'tab1',
        component: Tab1
    }, {
        path: '/tab-2/',
        tabId: 'tab2',
        component: Tab2
    }, {
        path: '/tab-3/',
        tabId: 'tab3',
        routes: [{
            path: '/',
            component: Tab3            
        }, {
            path: '/alternate-content/',
            component: Tab3AlternateContent
        }]
    }]
  }, {
    path: '/nested-routes/tabbar/',
    component: NestedRoutesTabbarPage,
    tabs: [{
        path: '/',
        tabId: 'tab1',
        component: TabbarTab1
    }, {
        path: '/tab-2/',
        tabId: 'tab2',
        component: TabbarTab2
    }, {
        path: '/tab-3/',
        tabId: 'tab3',
        routes: [{
            path: '/',
            component: TabbarTab3
        }, {
            path: '/alternate-content/',
            component: TabbarTab3AlternateContent
        }]
    }]
  }, {
    path: '/modals/',
    component: ModalsPage
}, {
    path: '/timeline-vertical/',
    component: TimelineVerticalPage    
}, {
    path: '/timeline-horizontal/',
    component: TimelineHorizontalPage
}, {
    path: '/timeline-calendar/',
    component: TimelineCalendarPage    
}, {
    path: '/user/:id/posts/:post_id/',
    component: DynamicRoutePage    
}];