import React, { useState } from "react";

const Tables: React.FC = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [isNotificationsMenuOpen, setIsNotificationsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const toggleSideMenu = () => setIsSideMenuOpen(!isSideMenuOpen);
  const toggleNotificationsMenu = () =>
    setIsNotificationsMenuOpen(!isNotificationsMenuOpen);
  const toggleProfileMenu = () => setIsProfileMenuOpen(!isProfileMenuOpen);

  return (
    <div
      className={`flex h-screen bg-gray-50 dark:bg-gray-900 ${
        isSideMenuOpen ? "overflow-hidden" : ""
      }`}
    >

            <div className="w-full mb-8 overflow-hidden rounded-lg shadow-xs">
              <div className="w-full overflow-x-auto">
                <table className="w-full whitespace-no-wrap">
                  <thead>
                    <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                      <th className="px-4 py-3">Book ID</th>
                      <th className="px-4 py-3">Book Title</th>
                      <th className="px-4 py-3">Author</th>
                      <th className="px-4 py-3">Genre</th>
                      <th className="px-4 py-3">Publication Date</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                    <tr className="text-gray-700 dark:text-gray-400">
                      <td className="px-4 py-3 text-sm">1</td> {/* Book ID */}
                      <td className="px-4 py-3">
                        <div className="flex items-center text-sm">
                          <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                            <img
                              className="object-cover w-full h-full rounded-full"
                              src="https://images.unsplash.com/photo-1570612861542-284f4c12e75f"
                              alt="Avatar"
                              loading="lazy"
                            />
                            <div
                              className="absolute inset-0 rounded-full shadow-inner"
                              aria-hidden="true"
                            ></div>
                          </div>
                          <div>
                            <p className="font-semibold">The Hunger Games</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm">Suzzane Collins</td>
                      <td className="px-4 py-3 text-sm">Mystery</td>
                      <td className="px-4 py-3 text-sm">6/10/2020</td>
                    </tr>
                    <tr className="text-gray-700 dark:text-gray-400">
                      <td className="px-4 py-3 text-sm">2</td> {/* Book ID */}
                      <td className="px-4 py-3">
                        <div className="flex items-center text-sm">
                          <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                            <img
                              className="object-cover w-full h-full rounded-full"
                              src="https://images.unsplash.com/photo-1570612861542-284f4c12e75f"
                              alt="Avatar"
                              loading="lazy"
                            />
                            <div
                              className="absolute inset-0 rounded-full shadow-inner"
                              aria-hidden="true"
                            ></div>
                          </div>
                          <div>
                            <p className="font-semibold">Catching Fire</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm">Suzzane Collins</td>
                      <td className="px-4 py-3 text-sm">Adventure</td>
                      <td className="px-4 py-3 text-sm">9/1/2013</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
  );
};

export default Tables;