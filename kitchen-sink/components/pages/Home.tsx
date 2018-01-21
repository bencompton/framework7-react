import * as React from 'react';
import { Page, Navbar, NavRight, Searchbar, List, ListItem, Icon, BlockTitle, Link } from 'framework7-react';

export const Home = () => (
    <Page>
        <Navbar title="Framework7">
            <NavRight>
                <Link className="searchbar-enable" data-searchbar=".searchbar-components" iconIfIos="f7:search_strong" iconIfMd="material:search"></Link>
            </NavRight>
            <Searchbar className="searchbar-components" searchContainer=".components-list" searchIn="a" expandable />
        </Navbar>

        <List className="searchbar-hide-on-search">
            <ListItem title="About Framework7" link="/about/" mediaSlot={<Icon icon="icon-f7"></Icon>} />
        </List>

        <BlockTitle className="searchbar-found">Components</BlockTitle>
        <List className="components-list searchbar-found">
            <ListItem link="/accordion/" title="Accordion" mediaSlot={<Icon icon="icon-f7"></Icon>} />
            <ListItem link="/action-sheet/" title="Action Sheet" mediaSlot={<Icon icon="icon-f7"></Icon>} />
            <ListItem link="/autocomplete/" title="Autocomplete" mediaSlot={<Icon icon="icon-f7"></Icon>} />
            <ListItem link="/badge/" title="Badge" mediaSlot={<Icon icon="icon-f7"></Icon>} />
            <ListItem link="/buttons/" title="Buttons" mediaSlot={<Icon icon="icon-f7"></Icon>} />
            <ListItem link="/calendar/" title="Calendar / Date Picker" mediaSlot={<Icon icon="icon-f7"></Icon>} />
            <ListItem link="/cards/" title="Cards" mediaSlot={<Icon icon="icon-f7"></Icon>} />
            <ListItem link="/checkbox/" title="Checkbox" mediaSlot={<Icon icon="icon-f7"></Icon>} />
            <ListItem link="/chips/" title="Chips/Tags" mediaSlot={<Icon icon="icon-f7"></Icon>} />
            <ListItem link="/contacts-list/" title="Contacts List" mediaSlot={<Icon icon="icon-f7"></Icon>} />
            <ListItem link="/content-block/" title="Content Block" mediaSlot={<Icon icon="icon-f7"></Icon>} />
            <ListItem link="/data-table/" title="Data Table" mediaSlot={<Icon icon="icon-f7"></Icon>} />
            <ListItem link="/dialog/" title="Dialog" mediaSlot={<Icon icon="icon-f7"></Icon>} />
            <ListItem link="/fab/" title="FAB" mediaSlot={<Icon icon="icon-f7"></Icon>} />
            <ListItem link="/fab-morph/" title="FAB Morph" mediaSlot={<Icon icon="icon-f7"></Icon>} />
            <ListItem link="/form-storage/" title="Form Storage" mediaSlot={<Icon icon="icon-f7"></Icon>} />
            <ListItem link="/icons/" title="Icons" mediaSlot={<Icon icon="icon-f7"></Icon>} />
            <ListItem link="/infinite-scroll/" title="Infinite Scroll" mediaSlot={<Icon icon="icon-f7"></Icon>} />
            <ListItem link="/inputs/" title="Inputs" mediaSlot={<Icon icon="icon-f7"></Icon>} />
            <ListItem link="/grid/" title="Grid / Layout Grid" mediaSlot={<Icon icon="icon-f7"></Icon>} />
            <ListItem link="/lazy-load/" title="Lazy Load" mediaSlot={<Icon icon="icon-f7"></Icon>} />
            <ListItem link="/list/" title="List View" mediaSlot={<Icon icon="icon-f7"></Icon>} />
            <ListItem link="/login-screen/" title="Login Screen" mediaSlot={<Icon icon="icon-f7"></Icon>} />
            <ListItem link="/messages/" title="Messages" mediaSlot={<Icon icon="icon-f7"></Icon>} />
            <ListItem link="/navbar/" title="Navbar" mediaSlot={<Icon icon="icon-f7"></Icon>} />
            <ListItem link="/notifications/" title="Notifications" mediaSlot={<Icon icon="icon-f7"></Icon>} />
            <ListItem link="/panel/" title="Panel / Side Panels" mediaSlot={<Icon icon="icon-f7"></Icon>} />
            <ListItem link="/picker/" title="Picker" mediaSlot={<Icon icon="icon-f7"></Icon>} />
            <ListItem link="/photo-browser/" title="Photo Browser" mediaSlot={<Icon icon="icon-f7"></Icon>} />
            <ListItem link="/popup/" title="Popup" mediaSlot={<Icon icon="icon-f7"></Icon>} />
            <ListItem link="/popover/" title="Popover" mediaSlot={<Icon icon="icon-f7"></Icon>} />
            <ListItem link="/preloader/" title="Preloader" mediaSlot={<Icon icon="icon-f7"></Icon>} />
            <ListItem link="/progressbar/" title="Progress Bar" mediaSlot={<Icon icon="icon-f7"></Icon>} />
            <ListItem link="/pull-to-refresh/" title="Pull To Refresh" mediaSlot={<Icon icon="icon-f7"></Icon>} />
            <ListItem link="/radio/" title="Radio" mediaSlot={<Icon icon="icon-f7"></Icon>} />
            <ListItem link="/range/" title="Range Slider" mediaSlot={<Icon icon="icon-f7"></Icon>} />
            <ListItem link="/searchbar/" title="Searchbar" mediaSlot={<Icon icon="icon-f7"></Icon>} />
            <ListItem link="/searchbar-expandable/" title="Searchbar Expandable" mediaSlot={<Icon icon="icon-f7"></Icon>} />
            <ListItem link="/sheet-modal/" title="Sheet Modal" mediaSlot={<Icon icon="icon-f7"></Icon>} />
            <ListItem link="/smart-select/" title="Smart Select" mediaSlot={<Icon icon="icon-f7"></Icon>} />
            <ListItem link="/sortable/" title="Sortable List" mediaSlot={<Icon icon="icon-f7"></Icon>} />
            <ListItem link="/statusbar/" title="Statusbar" mediaSlot={<Icon icon="icon-f7"></Icon>} />
            <ListItem link="/subnavbar/" title="Subnavbar" mediaSlot={<Icon icon="icon-f7"></Icon>} />
            <ListItem link="/swipeout/" title="Swipeout (Swipe To Delete)" mediaSlot={<Icon icon="icon-f7"></Icon>} />
            <ListItem link="/swiper/" title="Swiper Slider" mediaSlot={<Icon icon="icon-f7"></Icon>} />
            <ListItem link="/tabs/" title="Tabs" mediaSlot={<Icon icon="icon-f7"></Icon>} />
            <ListItem link="/timeline/" title="Timeline" mediaSlot={<Icon icon="icon-f7"></Icon>} />
            <ListItem link="/toast/" title="Toast" mediaSlot={<Icon icon="icon-f7"></Icon>} />
            <ListItem link="/toggle/" title="Toggle" mediaSlot={<Icon icon="icon-f7"></Icon>} />
            <ListItem link="/toolbar-tabbar/" title="Toolbar & Tabbar" mediaSlot={<Icon icon="icon-f7"></Icon>} />
            <ListItem link="/virtual-list/" title="Virtual List" mediaSlot={<Icon icon="icon-f7"></Icon>} />
        </List>
        <List className="searchbar-not-found">
            <ListItem title="Nothing found" />
        </List>
        <BlockTitle className="searchbar-hide-on-search">Themes</BlockTitle>
        <List className="searchbar-hide-on-search">
            <ListItem title="iOS Theme" external link="./index.html?theme=ios" />
            <ListItem title="Material (MD) Theme" external link="./index.html?theme=md" />
            <ListItem title="Color Themes" link="/color-themes/" />
        </List>
    </Page>
);