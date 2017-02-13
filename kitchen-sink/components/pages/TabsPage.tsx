import * as React from 'react';
import {Page, Navbar, ContentBlock, Subnavbar, Tabs, Tab, ButtonsSegmented, Button} from 'framework7-react';


export const TabsPage = () => {
    return (
        <Page withSubnavbar>
            <Navbar backLink="Back" title="Tabs" sliding>
                <Subnavbar sliding>
                    <ButtonsSegmented>
                        <Button tabLink="#tab1" active>Tab 1</Button>
                        <Button tabLink="#tab2">Tab 2</Button>
                        <Button tabLink="#tab3">Tab 3</Button>
                        <Button tabLink="#tab4">Tab 4</Button>
                    </ButtonsSegmented>
                </Subnavbar>
            </Navbar>

            <Tabs>
                <Tab id="tab1" active>
                    <ContentBlock>
                        <p>Tab 1</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure odio dolor, soluta reprehenderit, corporis officia earum corrupti amet ea aspernatur praesentium, distinctio ipsa atque officiis. Recusandae ab error, atque natus.</p>
                        <p>Quibusdam repellendus, repudiandae nulla commodi ut nemo eum, quia dolorum dicta voluptate reprehenderit. Omnis, temporibus iure quia ad sit incidunt similique et quaerat dicta delectus aspernatur, unde illo cum ipsam?</p>
                        <p>Officia alias inventore soluta illo, omnis tempore obcaecati at, harum impedit nemo enim, iure fugit est explicabo commodi ipsam distinctio architecto voluptatum reprehenderit, aperiam dolorem praesentium repellendus repudiandae ducimus saepe.</p>
                        <p>Autem ullam tempore suscipit consectetur, odit soluta. Neque quasi mollitia culpa autem, quis ab nostrum non distinctio illo magni perspiciatis et consequuntur possimus aliquam reprehenderit reiciendis praesentium consectetur, voluptas obcaecati?</p>
                        <p>Quae repellendus aut iste provident consectetur inventore voluptatibus, saepe ad dolorem voluptatum recusandae praesentium animi harum officiis error nulla ullam nobis? Mollitia possimus voluptatum pariatur omnis quibusdam, quidem recusandae velit.</p>
                    </ContentBlock>
                </Tab>
                <Tab id="tab2">
                    <ContentBlock>
                        <p>Tab 2</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure odio dolor, soluta reprehenderit, corporis officia earum corrupti amet ea aspernatur praesentium, distinctio ipsa atque officiis. Recusandae ab error, atque natus.</p>
                        <p>Quibusdam repellendus, repudiandae nulla commodi ut nemo eum, quia dolorum dicta voluptate reprehenderit. Omnis, temporibus iure quia ad sit incidunt similique et quaerat dicta delectus aspernatur, unde illo cum ipsam?</p>
                        <p>Officia alias inventore soluta illo, omnis tempore obcaecati at, harum impedit nemo enim, iure fugit est explicabo commodi ipsam distinctio architecto voluptatum reprehenderit, aperiam dolorem praesentium repellendus repudiandae ducimus saepe.</p>
                        <p>Autem ullam tempore suscipit consectetur, odit soluta. Neque quasi mollitia culpa autem, quis ab nostrum non distinctio illo magni perspiciatis et consequuntur possimus aliquam reprehenderit reiciendis praesentium consectetur, voluptas obcaecati?</p>
                        <p>Quae repellendus aut iste provident consectetur inventore voluptatibus, saepe ad dolorem voluptatum recusandae praesentium animi harum officiis error nulla ullam nobis? Mollitia possimus voluptatum pariatur omnis quibusdam, quidem recusandae velit.</p>
                    </ContentBlock>
                </Tab>
                <Tab id="tab3">
                    <ContentBlock>
                        <p>Tab 3</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure odio dolor, soluta reprehenderit, corporis officia earum corrupti amet ea aspernatur praesentium, distinctio ipsa atque officiis. Recusandae ab error, atque natus.</p>
                        <p>Quibusdam repellendus, repudiandae nulla commodi ut nemo eum, quia dolorum dicta voluptate reprehenderit. Omnis, temporibus iure quia ad sit incidunt similique et quaerat dicta delectus aspernatur, unde illo cum ipsam?</p>
                        <p>Officia alias inventore soluta illo, omnis tempore obcaecati at, harum impedit nemo enim, iure fugit est explicabo commodi ipsam distinctio architecto voluptatum reprehenderit, aperiam dolorem praesentium repellendus repudiandae ducimus saepe.</p>
                        <p>Autem ullam tempore suscipit consectetur, odit soluta. Neque quasi mollitia culpa autem, quis ab nostrum non distinctio illo magni perspiciatis et consequuntur possimus aliquam reprehenderit reiciendis praesentium consectetur, voluptas obcaecati?</p>
                        <p>Quae repellendus aut iste provident consectetur inventore voluptatibus, saepe ad dolorem voluptatum recusandae praesentium animi harum officiis error nulla ullam nobis? Mollitia possimus voluptatum pariatur omnis quibusdam, quidem recusandae velit.</p>
                    </ContentBlock>
                </Tab>
                <Tab id="tab4">
                    <ContentBlock>
                        <p>Tab 4</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure odio dolor, soluta reprehenderit, corporis officia earum corrupti amet ea aspernatur praesentium, distinctio ipsa atque officiis. Recusandae ab error, atque natus.</p>
                        <p>Quibusdam repellendus, repudiandae nulla commodi ut nemo eum, quia dolorum dicta voluptate reprehenderit. Omnis, temporibus iure quia ad sit incidunt similique et quaerat dicta delectus aspernatur, unde illo cum ipsam?</p>
                        <p>Officia alias inventore soluta illo, omnis tempore obcaecati at, harum impedit nemo enim, iure fugit est explicabo commodi ipsam distinctio architecto voluptatum reprehenderit, aperiam dolorem praesentium repellendus repudiandae ducimus saepe.</p>
                        <p>Autem ullam tempore suscipit consectetur, odit soluta. Neque quasi mollitia culpa autem, quis ab nostrum non distinctio illo magni perspiciatis et consequuntur possimus aliquam reprehenderit reiciendis praesentium consectetur, voluptas obcaecati?</p>
                        <p>Quae repellendus aut iste provident consectetur inventore voluptatibus, saepe ad dolorem voluptatum recusandae praesentium animi harum officiis error nulla ullam nobis? Mollitia possimus voluptatum pariatur omnis quibusdam, quidem recusandae velit.</p>
                    </ContentBlock>
                </Tab>
            </Tabs>
        </Page>
    );
}
