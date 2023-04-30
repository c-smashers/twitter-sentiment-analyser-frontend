import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-800 pt-4 pb-8 xl:pt-8">
            <div className="max-w-screen-lg px-4 mx-auto text-gray-400 xl:max-w-screen-xl sm:px-6 md:px-8 dark:text-gray-300">
                <ul className="flex flex-wrap justify-center pb-8 text-lg font-light">
                    <li className="w-1/2 md:w-1/3 lg:w-1/3">
                        <div className="text-center">
                            <h2 className="text-gray-500 dark:text-gray-200 text-md uppercase mb-4">
                                Contacts
                            </h2>
                            <ul>
                                <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                                    <a href="https://github.com/c-smashers" target="_blank">
                                        Github
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <div className="text-center pt-10 m-10 sm:pt-12 font-light flex items-center justify-center">
                    Created by C-Smashers
                </div>
            </div>
        </footer>
    )
}

export default Footer