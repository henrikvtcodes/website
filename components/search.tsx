import { FiSearch } from "react-icons/fi";
import { Fragment, useState, useRef, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  InstantSearch,
  Index,
  SearchBox,
  Hits,
  Configure,
} from "react-instantsearch-dom";
import cn from "classnames";
import qs from "qs";

import { algolia } from "utils/search";
import searchStyles from "styles/search.module.css";

const SearchButton = () => {
  const router = useRouter();
  const currentPage = router.asPath;
  let isHome: boolean = currentPage === ("/" || "");
  let isHidden = currentPage.includes("/search") && !isHome;

  return (
    <Link href={`${router.asPath}?searchQuery=""`} passHref>
      <a className={cn(isHidden ? "hidden transition-transform ease-out" : "")}>
        <button className="text-gray-600 dark:text-gray-400 p-1 sm:px-3 sm:py-2 rounded-lg self-end hover:bg-gray-200 dark:hover:bg-zinc-800 transition-all">
          <FiSearch size={20} />
        </button>
      </a>
    </Link>
  );
};

const ModalSearchInput = () => {
  const router = useRouter();

  const handleInputChange = (e: any) => {
    let formValue = e.target.value;
    // prettier-ignore
    if (formValue.length !> 2) { return }

    // router.push(
    //   `${router.asPath}?searchQuery=${formValue}`,
    //   `/search?query=${formValue}`,
    //   { shallow: true }
    // );
  };

  return (
    <input
      type="text"
      id="search-input"
      className={searchStyles.search}
      onChange={handleInputChange}
      autoComplete="off"
      autoCorrect="off"
      autoCapitalize="none"
      spellCheck="false"
      // defaultValue={router.query.query}
    >
      {" "}
      Search{" "}
    </input>
  );
};

const PageSearchInput = () => {
  const [hits, setHits] = useState([]);
};

const DEBOUNCE_TIME = 400;

const SearchModal = () => {
  const router = useRouter();

  return (
    <Transition.Root show={!!router.query.searchQuery} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={() => router.back()}
      >
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-zinc-700 bg-opacity-90 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-zinc-900 rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-content sm:p-6">
              <div>
                <div className="mt-3 text-center sm:mt-5">
                  <InstantSearch
                    indexName="instant_search"
                    searchClient={algolia}
                  >
                    <SearchBox className={searchStyles.search} />

                    <div className="mb-4">
                      <Index indexName="instant_search">
                        <h2 className="text-left Whitney text-2xl">
                          Blog Posts
                        </h2>
                        <Configure hitsPerPage={8} />
                        <Hits />
                      </Index>
                    </div>

                    <div className="mb-2">
                      <Index indexName="instant_search_price_desc">
                        <h2 className="text-left Whitney text-2xl ">
                          Projects
                        </h2>
                        <Configure hitsPerPage={8} />
                        <Hits />
                      </Index>
                    </div>
                  </InstantSearch>
                </div>
              </div>
              <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense"></div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export { SearchButton, SearchModal };
