import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { selectCurrentOrder } from "../features/order/orderSlice";
import { useEffect } from "react";
import { resetCartAsync } from "../features/cart/cartSlice";
import { selectLoggedInUser } from "../features/auth/authSlice";

const OrderSuccessPage = () => {
    const order = useSelector(selectCurrentOrder);
    const user = useSelector(selectLoggedInUser);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(resetCartAsync(user.id));
    }, [user.id, dispatch])

    return (
        <>
            {!order && <Navigate to={'/'} replace={true} />}
            <div className="bg-white min-h-screen px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
                <div className="max-w-max mx-auto">

                    <main className="sm:flex">
                        <div className="sm:ml-6">
                            <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                                <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                                    Order successfully placed
                                </h1>
                                <p className="mt-2 text-base text-gray-500">
                                    Order Number #{order?.id}
                                </p>
                                <p className="mt-1 text-base text-gray-500">
                                    You can check your order in My Account
                                </p>
                            </div>
                            <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                                <Link
                                    to={'/'}
                                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Go back home
                                </Link>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}

export default OrderSuccessPage;