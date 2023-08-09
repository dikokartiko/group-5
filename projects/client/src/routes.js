// import Auth
import SignIn from "views/Auth/SignIn";
import ForgotPassword from "views/Auth/ForgotPassword";
import ResetPassword from "views/Auth/ResetPassword";

// import Admin
import DashboardAdmin from "views/Dashboard/Dashboard";
import CashierAdmin from "views/Dashboard/Cashier";
import ProductAdmin from "views/Dashboard/Product";
import ProductCategoryAdmin from "views/Dashboard/Product_Category";
import SalesReportAdmin from "views/Dashboard/Sales_Report";

// import Cashier
import DashboardCashier from "views/Cashier/Dashboard";
import ProductCashier from "views/Cashier/Product";
import ProfileCashier from "views/Cashier/Profile";
import TransactionCashier from "views/Cashier/Transaction";

import {
  HomeIcon,
  StatsIcon,
  CartIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
} from "components/Icons/Icons";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "mainMenu",
    routesComponent: "admin",
    icon: <HomeIcon color="inherit" />,
    component: DashboardAdmin,
    layout: "/admin",
  },
  {
    path: "/cashier",
    name: "Cashier",
    rtlName: "mainMenu",
    routesComponent: "admin",
    icon: <PersonIcon color="inherit" />,
    component: CashierAdmin,
    layout: "/admin",
  },
  {
    path: "/product",
    name: "Product",
    rtlName: "mainMenu",
    routesComponent: "admin",
    icon: <CartIcon color="inherit" />,
    component: ProductAdmin,
    layout: "/admin",
  },
  {
    path: "/productCategory",
    name: "Product Category",
    rtlName: "mainMenu",
    routesComponent: "admin",
    icon: <CreditIcon color="inherit" />,
    component: ProductCategoryAdmin,
    layout: "/admin",
  },
  {
    path: "/salesReport",
    name: "Sales Report",
    rtlName: "mainMenu",
    routesComponent: "admin",
    icon: <StatsIcon color="inherit" />,
    component: SalesReportAdmin,
    layout: "/admin",
  },
  {
    path: "/signin",
    name: "SignIn",
    component: SignIn,
    rtlName: "authRoutes",
    layout: "/auth",
  },
  {
    path: "/forgotPassword",
    component: ForgotPassword,
    rtlName: "authRoutes",
    layout: "/auth",
  },
  {
    path: "/resetPassword/:token",
    component: ResetPassword,
    rtlName: "authRoutes",
    layout: "/auth",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "mainMenu",
    routesComponent: "cashier",
    icon: <HomeIcon color="inherit" />,
    component: DashboardCashier,
    layout: "/cashier",
  },
  {
    path: "/transaction",
    name: "Transaction",
    rtlName: "mainMenu",
    routesComponent: "cashier",
    icon: <CartIcon color="inherit" />,
    component: TransactionCashier,
    layout: "/cashier",
  },
];
export default dashRoutes;
