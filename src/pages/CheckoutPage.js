import { Fragment, useState } from 'react'
import { Dialog, Tab, Transition } from '@headlessui/react'
import { TrashIcon, XMarkIcon } from '@heroicons/react/24/outline'

const currencies = ['CAD', 'USD', 'AUD', 'EUR', 'GBP']

const navigation = {
    categories: [
        {
            name: 'Women',
            featured: [
                {
                    name: 'New Arrivals',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
                    imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
                },
                {
                    name: 'Basic Tees',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
                    imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
                },
                {
                    name: 'Accessories',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-03.jpg',
                    imageAlt: 'Model wearing minimalist watch with black wristband and white watch face.',
                },
                {
                    name: 'Carry',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-04.jpg',
                    imageAlt: 'Model opening tan leather long wallet with credit card pockets and cash pouch.',
                },
            ],
        },
        {
            name: 'Men',
            featured: [
                {
                    name: 'New Arrivals',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-01.jpg',
                    imageAlt: 'Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.',
                },
                {
                    name: 'Basic Tees',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-02.jpg',
                    imageAlt: 'Model wearing light heather gray t-shirt.',
                },
                {
                    name: 'Accessories',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-03.jpg',
                    imageAlt:
                        'Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body.',
                },
                {
                    name: 'Carry',
                    href: '#',
                    imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-04.jpg',
                    imageAlt: 'Model putting folded cash into slim card holder olive leather wallet with hand stitching.',
                },
            ],
        },
    ],
    pages: [
        { name: 'Company', href: '#' },
        { name: 'Stores', href: '#' },
    ],
}

const products = [
    {
        id: 1,
        title: 'Basic Tee',
        href: '#',
        price: '$32.00',
        color: 'Black',
        size: 'Large',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/checkout-page-02-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
    },
    // More products...
]

const paymentMethods = [
    { id: 'credit-card', title: 'Credit card' },
    { id: 'paypal', title: 'PayPal' },
    { id: 'etransfer', title: 'eTransfer' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function CheckoutPage() {
    const [open, setOpen] = useState(false)

    return (
        <div className="bg-gray-50">
            {/* Mobile menu */}
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 flex z-40 lg:hidden" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <Transition.Child
                        as={Fragment}
                        enter="transition ease-in-out duration-300 transform"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition ease-in-out duration-300 transform"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full"
                    >
                        <div className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
                            <div className="px-4 pt-5 pb-2 flex">
                                <button
                                    type="button"
                                    className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                                    onClick={() => setOpen(false)}
                                >
                                    <span className="sr-only">Close menu</span>
                                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                            </div>

                            {/* Links */}
                            <Tab.Group as="div" className="mt-2">
                                <div className="border-b border-gray-200">
                                    <Tab.List className="-mb-px flex px-4 space-x-8">
                                        {navigation.categories.map((category) => (
                                            <Tab
                                                key={category.name}
                                                className={({ selected }) =>
                                                    classNames(
                                                        selected ? 'text-indigo-600 border-indigo-600' : 'text-gray-900 border-transparent',
                                                        'flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium'
                                                    )
                                                }
                                            >
                                                {category.name}
                                            </Tab>
                                        ))}
                                    </Tab.List>
                                </div>
                                <Tab.Panels as={Fragment}>
                                    {navigation.categories.map((category) => (
                                        <Tab.Panel key={category.name} className="px-4 py-6 space-y-12">
                                            <div className="grid grid-cols-2 gap-x-4 gap-y-10">
                                                {category.featured.map((item) => (
                                                    <div key={item.name} className="group relative">
                                                        <div className="aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75">
                                                            <img src={item.imageSrc} alt={item.imageAlt} className="object-center object-cover" />
                                                        </div>
                                                        <a href={item.href} className="mt-6 block text-sm font-medium text-gray-900">
                                                            <span className="absolute z-10 inset-0" aria-hidden="true" />
                                                            {item.name}
                                                        </a>
                                                        <p aria-hidden="true" className="mt-1 text-sm text-gray-500">
                                                            Shop now
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </Tab.Panel>
                                    ))}
                                </Tab.Panels>
                            </Tab.Group>

                            <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                                {navigation.pages.map((page) => (
                                    <div key={page.name} className="flow-root">
                                        <a href={page.href} className="-m-2 p-2 block font-medium text-gray-900">
                                            {page.name}
                                        </a>
                                    </div>
                                ))}
                            </div>

                            <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                                <div className="flow-root">
                                    <a href="#" className="-m-2 p-2 block font-medium text-gray-900">
                                        Create an account
                                    </a>
                                </div>
                                <div className="flow-root">
                                    <a href="#" className="-m-2 p-2 block font-medium text-gray-900">
                                        Sign in
                                    </a>
                                </div>
                            </div>

                            <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                                {/* Currency selector */}
                                <form>
                                    <div className="inline-block">
                                        <label htmlFor="mobile-currency" className="sr-only">
                                            Currency
                                        </label>
                                        <div className="-ml-2 group relative border-transparent rounded-md focus-within:ring-2 focus-within:ring-white">
                                            <select
                                                id="mobile-currency"
                                                name="currency"
                                                className="bg-none border-transparent rounded-md py-0.5 pl-2 pr-5 flex items-center text-sm font-medium text-gray-700 group-hover:text-gray-800 focus:outline-none focus:ring-0 focus:border-transparent"
                                            >
                                                {currencies.map((currency) => (
                                                    <option key={currency}>{currency}</option>
                                                ))}
                                            </select>
                                            <div className="absolute right-0 inset-y-0 flex items-center pointer-events-none">
                                                <svg
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 20 20"
                                                    className="w-5 h-5 text-gray-500"
                                                >
                                                    <path
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="1.5"
                                                        d="M6 8l4 4 4-4"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </Transition.Child>
                </Dialog>
            </Transition.Root>

            <main className="max-w-7xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto lg:max-w-none">
                    <h1 className="sr-only">Checkout</h1>

                    <form className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
                        <div>
                            <div>
                                <h2 className="text-lg font-medium text-gray-900">Contact information</h2>

                                <div className="mt-4">
                                    <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                        Email address
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="email"
                                            id="email-address"
                                            name="email-address"
                                            autoComplete="email"
                                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10 border-t border-gray-200 pt-10">
                                <h2 className="text-lg font-medium text-gray-900">Shipping information</h2>

                                <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                                    <div>
                                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                            First name
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                type="text"
                                                id="first-name"
                                                name="first-name"
                                                autoComplete="given-name"
                                                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                            Last name
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                type="text"
                                                id="last-name"
                                                name="last-name"
                                                autoComplete="family-name"
                                                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                                            Company
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                type="text"
                                                name="company"
                                                id="company"
                                                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                                            Address
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                type="text"
                                                name="address"
                                                id="address"
                                                autoComplete="street-address"
                                                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label htmlFor="apartment" className="block text-sm font-medium text-gray-700">
                                            Apartment, suite, etc.
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                type="text"
                                                name="apartment"
                                                id="apartment"
                                                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                            City
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                type="text"
                                                name="city"
                                                id="city"
                                                autoComplete="address-level2"
                                                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                            Country
                                        </label>
                                        <div className="mt-1">
                                            <select
                                                id="country"
                                                name="country"
                                                autoComplete="country-name"
                                                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            >
                                                <option>United States</option>
                                                <option>Canada</option>
                                                <option>Mexico</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                                            State / Province
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                type="text"
                                                name="region"
                                                id="region"
                                                autoComplete="address-level1"
                                                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                                            Postal code
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                type="text"
                                                name="postal-code"
                                                id="postal-code"
                                                autoComplete="postal-code"
                                                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                            Phone
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                type="text"
                                                name="phone"
                                                id="phone"
                                                autoComplete="tel"
                                                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Payment */}
                            <div className="mt-10 border-t border-gray-200 pt-10">
                                <h2 className="text-lg font-medium text-gray-900">Payment</h2>

                                <fieldset className="mt-4">
                                    <legend className="sr-only">Payment type</legend>
                                    <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                                        {paymentMethods.map((paymentMethod, paymentMethodIdx) => (
                                            <div key={paymentMethod.id} className="flex items-center">
                                                {paymentMethodIdx === 0 ? (
                                                    <input
                                                        id={paymentMethod.id}
                                                        name="payment-type"
                                                        type="radio"
                                                        defaultChecked
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                    />
                                                ) : (
                                                    <input
                                                        id={paymentMethod.id}
                                                        name="payment-type"
                                                        type="radio"
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                    />
                                                )}

                                                <label htmlFor={paymentMethod.id} className="ml-3 block text-sm font-medium text-gray-700">
                                                    {paymentMethod.title}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </fieldset>

                                <div className="mt-6 grid grid-cols-4 gap-y-6 gap-x-4">
                                    <div className="col-span-4">
                                        <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">
                                            Card number
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                type="text"
                                                id="card-number"
                                                name="card-number"
                                                autoComplete="cc-number"
                                                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-span-4">
                                        <label htmlFor="name-on-card" className="block text-sm font-medium text-gray-700">
                                            Name on card
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                type="text"
                                                id="name-on-card"
                                                name="name-on-card"
                                                autoComplete="cc-name"
                                                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-span-3">
                                        <label htmlFor="expiration-date" className="block text-sm font-medium text-gray-700">
                                            Expiration date (MM/YY)
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                type="text"
                                                name="expiration-date"
                                                id="expiration-date"
                                                autoComplete="cc-exp"
                                                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">
                                            CVC
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                type="text"
                                                name="cvc"
                                                id="cvc"
                                                autoComplete="csc"
                                                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Order summary */}
                        <div className="mt-10 lg:mt-0">
                            <h2 className="text-lg font-medium text-gray-900">Order summary</h2>

                            <div className="mt-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                                <h3 className="sr-only">Items in your cart</h3>
                                <ul role="list" className="divide-y divide-gray-200">
                                    {products.map((product) => (
                                        <li key={product.id} className="flex py-6 px-4 sm:px-6">
                                            <div className="flex-shrink-0">
                                                <img src={product.imageSrc} alt={product.imageAlt} className="w-20 rounded-md" />
                                            </div>

                                            <div className="ml-6 flex-1 flex flex-col">
                                                <div className="flex">
                                                    <div className="min-w-0 flex-1">
                                                        <h4 className="text-sm">
                                                            <a href={product.href} className="font-medium text-gray-700 hover:text-gray-800">
                                                                {product.title}
                                                            </a>
                                                        </h4>
                                                        <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                                        <p className="mt-1 text-sm text-gray-500">{product.size}</p>
                                                    </div>

                                                    <div className="ml-4 flex-shrink-0 flow-root">
                                                        <button
                                                            type="button"
                                                            className="-m-2.5 bg-white p-2.5 flex items-center justify-center text-gray-400 hover:text-gray-500"
                                                        >
                                                            <span className="sr-only">Remove</span>
                                                            <TrashIcon className="h-5 w-5" aria-hidden="true" />
                                                        </button>
                                                    </div>
                                                </div>

                                                <div className="flex-1 pt-2 flex items-end justify-between">
                                                    <p className="mt-1 text-sm font-medium text-gray-900">{product.price}</p>

                                                    <div className="ml-4">
                                                        <label htmlFor="quantity" className="sr-only">
                                                            Quantity
                                                        </label>
                                                        <select
                                                            id="quantity"
                                                            name="quantity"
                                                            className="rounded-md border border-gray-300 text-base font-medium text-gray-700 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                        >
                                                            <option value={1}>1</option>
                                                            <option value={2}>2</option>
                                                            <option value={3}>3</option>
                                                            <option value={4}>4</option>
                                                            <option value={5}>5</option>
                                                            <option value={6}>6</option>
                                                            <option value={7}>7</option>
                                                            <option value={8}>8</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                                <dl className="border-t border-gray-200 py-6 px-4 space-y-6 sm:px-6">
                                    <div className="flex items-center justify-between">
                                        <dt className="text-sm">Subtotal</dt>
                                        <dd className="text-sm font-medium text-gray-900">$64.00</dd>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <dt className="text-sm">Shipping</dt>
                                        <dd className="text-sm font-medium text-gray-900">$5.00</dd>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <dt className="text-sm">Taxes</dt>
                                        <dd className="text-sm font-medium text-gray-900">$5.52</dd>
                                    </div>
                                    <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                                        <dt className="text-base font-medium">Total</dt>
                                        <dd className="text-base font-medium text-gray-900">$75.52</dd>
                                    </div>
                                </dl>

                                <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                                    <button
                                        type="submit"
                                        className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                                    >
                                        Confirm order
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </main>

        </div>
    )
}
