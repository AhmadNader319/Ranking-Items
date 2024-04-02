import { Home } from "./components/Home";
import RankItems from "./components/RankItems";
import ProductList from "./components/ProductList";
const AppRoutes = [
    {
        index: true,
        element: <Home />
    },
    {
        path: '/rank-items',
        element: <RankItems />
    },{
        path: '/product-items',
        element: <ProductList />
    }

];
export default AppRoutes;
