import { useDispatch, useSelector } from "react-redux"
import { Link, Navigate } from "react-router-dom"
import { checkUserAsync, selectAuthError, selectUser } from "../authSlice"
import { useForm } from "react-hook-form";

const Login = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const error = useSelector(selectAuthError);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        dispatch(checkUserAsync({ email: data.email, password: data.password }));
    }
    
    return (
        <>
            {user && <Navigate to={`/`} replace={true} />}
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-10 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Login in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form noValidate
                        className="space-y-6"
                        method="POST"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div>
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Email address
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    {...register("email", {
                                        required: "email is required",
                                        pattern: {
                                            value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                                            message: "email not valid",
                                        },
                                    })}
                                    type="email"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.email && (
                                    <div className="flex items-center justify-between">
                                        <p className="text-red-500 block text-sm font-medium leading-6">
                                            {errors.email.message}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    {...register("password", {
                                        required: "password is required",
                                        pattern: {
                                            value:
                                                /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
                                            message: `- at least 8 characters\n
                                      - must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number\n
                                      - Can contain special characters`,
                                        },
                                    })}
                                    type="password"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.password && (
                                    <div className="flex items-center justify-between">
                                        <p className="text-red-500 block text-sm font-medium leading-6">
                                            {errors.password.message}
                                        </p>
                                    </div>
                                )}
                                {error && (
                                    <div className="flex items-center justify-between">
                                        <p className="text-red-500 block text-sm font-medium leading-6">
                                            {error.message}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Login in
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Not have a account ?{' '}
                        <Link to={'/signup'} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Create a new account
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Login