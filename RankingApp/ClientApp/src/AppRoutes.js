import { Home } from "./components/Home";
import RankItems from "./components/RankItems";
import ProductList from "./components/ProductList";
import FocusInput from "./components/FocusInput";
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
    },{
        path: '/focus-input',
        element: <FocusInput />
    }
    


];
export default AppRoutes;
