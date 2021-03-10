
import EditItemComponent from './components/EditItemComponent'

import ProductComponent from "./components/ProductComponent";

const routes = [
    {
        path: '/',
        component: ProductComponent,

    },
    {
        name:'EditItemComponent',
        path: '/edititemcomponent',
        component: EditItemComponent,
    }
];

export default routes;
