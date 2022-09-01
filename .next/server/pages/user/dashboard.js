"use strict";
(() => {
var exports = {};
exports.id = 894;
exports.ids = [894];
exports.modules = {

/***/ 2077:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Button({ text , customCSS , icon , disabled , setOpenTrackSpending  }) {
    const handleClick = ()=>{
        if (!setOpenTrackSpending) {
            return;
        } else {
            setOpenTrackSpending(true);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        className: `disabled:bg-neutral-500/50 disabled:text-neutral-400 disabled:cursor-default w-full px-4 py-2 text-white bg-red-500 hover:bg-red-500/50 transition rounded-lg ${customCSS}`,
        disabled: disabled,
        onClick: ()=>handleClick(),
        children: [
            icon && icon,
            text
        ]
    });
};


/***/ }),

/***/ 1312:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./context/creditcards.js
var creditcards = __webpack_require__(6305);
// EXTERNAL MODULE: ./context/signedUser.js
var context_signedUser = __webpack_require__(5208);
// EXTERNAL MODULE: ./context/currentTab.js
var currentTab = __webpack_require__(6464);
;// CONCATENATED MODULE: external "react-plaid-link"
const external_react_plaid_link_namespaceObject = require("react-plaid-link");
;// CONCATENATED MODULE: external "@heroicons/react/solid"
const solid_namespaceObject = require("@heroicons/react/solid");
;// CONCATENATED MODULE: ./function/createLink.js

const CreateLinkToken = async ()=>{
    // TODO, First, create a link token, and store to local storage for future use
    const response = await fetch(`${"https://localhost:3001"}/api/create_link_token`, {
        method: "POST"
    });
    // Error handling
    if (!response.ok) {
        console.log("vro, something is wrong");
        return;
    }
    const data = await response.json();
    if (data) {
        if (data.error != null) {
            console.log("vro something else is wrong", data.error);
            return;
        }
        localStorage.setItem("link_token", data.link_token);
    }
};

;// CONCATENATED MODULE: ./components/PlaidButton.js







const PlaidButton = ({ text , customCSS , removeOldItem  })=>{
    const { signedUser  } = (0,external_react_.useContext)(context_signedUser/* UserContext */.S);
    const { 0: linkToken , 1: setLinkToken  } = (0,external_react_.useState)(null);
    const { item , setItem , bankAccounts , setBankAccounts  } = (0,external_react_.useContext)(creditcards/* ItemsContext */.c);
    const domain = "https://localhost:3001";
    (0,external_react_.useEffect)(()=>{
        let mounted = true;
        CreateLinkToken();
        if (mounted) {
            setLinkToken(window.localStorage.getItem("link_token"));
        }
        console.log("infinitelooptest");
        return ()=>{
            mounted = false;
        };
    }, []);
    const openPlaid = async ()=>{
        if (removeOldItem) {
            const deleteItemResponse = await fetch(`${"https://localhost:3001"}/account/delete-item`, {
                method: "DELETE",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id: removeOldItem
                })
            });
            const { code , error  } = await deleteItemResponse.json();
            switch(code){
                case 200:
                    open();
                    break;
            }
            return;
        }
        open();
    };
    const { open , ready  } = (0,external_react_plaid_link_namespaceObject.usePlaidLink)({
        token: linkToken,
        onSuccess: (public_token, metadata)=>{
            // TODO, logic for successfully adding a bank account
            const setAccessToken = async ()=>{
                const response = await fetch(`${"https://localhost:3001"}/api/set_access_token`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
                    },
                    body: `public_token=${public_token}`
                });
                const data = await response.json();
                // TODO, prepare item token
                const newItem = {
                    userId: signedUser.userId,
                    access_token: data.access_token,
                    item_id: data.item_id
                };
                // TODO, add created item into database
                const postItemsResponse = await fetch(`${"https://localhost:3001"}/account/create-item`, {
                    method: "POST",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(newItem)
                });
                const { code , returningId  } = await postItemsResponse.json();
                switch(code){
                    // TODO, if all is successful adding into DB, add object into items array.
                    case 201:
                        // const getItemResponse = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/item/${data.access_token}`, {
                        //   method:"GET",
                        // })
                        // const getBalanceResponse = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/balance/${data.access_token}`, {
                        //   method:"GET",
                        // })
                        // const {institution} = await getItemResponse.json()
                        // const {accounts} = await getBalanceResponse.json()
                        // setBankAccounts(oldArray => [...oldArray, {
                        //   id:returningId,
                        //   institution: institution.name,
                        //   accounts:accounts
                        // }])
                        console.log("yo bro success man");
                        break;
                }
            };
            setAccessToken();
        },
        onExit: (err, metadata)=>{
            console.log(err);
            console.log("yo bro pleaseee fix this issue!!!");
        }
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
        onClick: ()=>openPlaid(),
        className: `px-4 py-3 font-medium text-white transition bg-red-500 rounded-md hover:bg-red-500/75 disabled:bg-gray-500 disabled:text-white flex items-center justify-center gap-x-3
      ${customCSS}
    `,
        disabled: !ready,
        children: [
            text,
            /*#__PURE__*/ jsx_runtime_.jsx(solid_namespaceObject.PlusIcon, {
                className: "w-5 h-5"
            })
        ]
    });
};
/* harmony default export */ const components_PlaidButton = (PlaidButton);

;// CONCATENATED MODULE: ./components/CreditCards.js






function CreditCards({ selected  }) {
    const { bankAccounts , setBankAccounts , setTransactions , setDisplayTransactions , setTransactionsId  } = (0,external_react_.useContext)(creditcards/* ItemsContext */.c);
    const { tab , setTab  } = (0,external_react_.useContext)(currentTab/* TabContext */.q);
    const viewTransactions = async (access_token, accountId)=>{
        const endDate = new Date();
        let endDateFormat = endDate.toISOString().substring(0, 10);
        const startDate = new Date(endDate.setMonth(endDate.getMonth() - 6));
        let startDateFormat = startDate.toISOString().substring(0, 10);
        // TODO, fetch transactions of account that was clicked
        const getTransactionsResponse = await fetch(`${"https://localhost:3001"}/api/transactions/${access_token}/${startDateFormat}/${endDateFormat}`, {
            method: "GET"
        });
        const { transactions  } = await getTransactionsResponse.json();
        // TODO, filter out selected card to display the right transactions
        const selectedCardTransactions = transactions.filter((transaction)=>transaction.account_id == accountId);
        // TODO, add total balance to prepare next section
        bankAccounts.forEach((account, index)=>{
            const accountIdPos = account.accounts?.findIndex((acc)=>acc.account_id === accountId);
            if (accountIdPos == -1 || accountIdPos === undefined) {
                return;
            } else {
                const addTransactions = [
                    ...bankAccounts
                ];
                addTransactions[index].accounts[accountIdPos] = {
                    ...addTransactions[index].accounts[accountIdPos],
                    transactions: selectedCardTransactions
                };
                setBankAccounts(addTransactions);
            }
        });
        // TODO, switch to next page
        setTransactionsId(accountId);
        setTab("Transactions");
        setDisplayTransactions(true);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `absolute inset-0 h-full p-10 bg-neutral-900 ${tab} overflow-y-scroll removeScrollbar`,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "w-full mb-24",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "text-4xl font-semibold text-white",
                        children: "Accounts"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "mt-2 text-neutral-400",
                        children: "View all accounts you have linked with us."
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "w-full h-full",
                children: [
                    bankAccounts.map((bankAccount)=>/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                            children: bankAccount.error && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "my-24",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "mb-2 text-sm font-medium text-neutral-400",
                                        children: "Accounts that need extra attention."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "grid grid-cols-1 gap-16 p-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 bg-neutral-700/10 rounded-xl",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex flex-col items-start justify-center w-full grid-cols-1 px-4 py-6 transition rounded-lg bg-neutral-800 hover:shadow-md",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    className: "mb-3 text-xl text-neutral-400",
                                                    children: bankAccount.institution
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "mb-5 text-sm text-neutral-600",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: "text-neutral-400",
                                                            children: "This account requires extra attention."
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            className: "text-xs",
                                                            children: [
                                                                "Error: ",
                                                                bankAccount.error
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(components_PlaidButton, {
                                                    text: bankAccount.error == "ITEM_LOGIN_REQUIRED" && "Relogin",
                                                    customCSS: "w-full",
                                                    removeOldItem: bankAccount.id
                                                })
                                            ]
                                        }, bankAccount.error)
                                    })
                                ]
                            })
                        })),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "my-24",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "mb-2 text-sm font-medium text-neutral-400",
                                children: "Credit Cards"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "grid grid-cols-1 gap-16 p-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 bg-neutral-700/10 rounded-xl",
                                children: bankAccounts.map((bankAccount)=>/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                        children: !bankAccount.error && /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                            children: bankAccount.accounts.map((acc)=>/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                                    children: acc.subtype == "credit card" && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "w-full grid-cols-1 px-4 py-6 transition rounded-lg shadow-xl bg-neutral-800",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                                className: "text-2xl font-medium text-white",
                                                                children: acc.official_name
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "mt-2",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                    className: "flex flex-col text-xl text-neutral-400",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "text-sm text-gray-200",
                                                                            children: "Total Balance"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "font-medium text-red-400",
                                                                            children: acc.balances?.current.toLocaleString("en-us", {
                                                                                style: "currency",
                                                                                currency: acc.balances.iso_currency_code
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                                className: "w-full px-4 py-2 mt-4 font-medium text-white transition bg-red-500 rounded-lg hover:bg-red-500/75",
                                                                onClick: ()=>viewTransactions(bankAccount.accessToken, acc.account_id),
                                                                children: "View Account"
                                                            })
                                                        ]
                                                    }, acc.account_id)
                                                }))
                                        })
                                    }))
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "my-24",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "mb-2 text-sm font-medium text-neutral-400",
                                children: "Checking Accounts"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "grid grid-cols-1 gap-16 p-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 bg-neutral-700/10 rounded-xl",
                                children: bankAccounts.map((bankAccount)=>/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                        children: !bankAccount.error && /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                            children: bankAccount.accounts.map((acc)=>/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                                    children: acc.subtype == "checking" && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "w-full grid-cols-1 px-4 py-6 transition rounded-lg shadow-xl bg-neutral-800",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                                className: "text-2xl font-medium text-white",
                                                                children: acc.official_name
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "mt-2",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                    className: "flex flex-col text-xl text-neutral-400",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "text-sm text-gray-200",
                                                                            children: "Total Balance"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "font-medium text-red-400",
                                                                            children: acc.balances?.current.toLocaleString("en-us", {
                                                                                style: "currency",
                                                                                currency: acc.balances.iso_currency_code
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                                className: "w-full px-4 py-2 mt-4 font-medium text-white transition bg-red-500 rounded-lg hover:bg-red-500/75",
                                                                onClick: ()=>viewTransactions(bankAccount.accessToken, acc.account_id),
                                                                children: "View Account"
                                                            })
                                                        ]
                                                    }, acc.account_id)
                                                }))
                                        })
                                    }))
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_PlaidButton, {
                        customCSS: "fixed bottom-5 right-5 h-16 rounded-xl w-16 text-neutral-900 hover:bg-red-600/50 hover:text-white py-4 bg-red-600 shadow-xl"
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./context/themePreference.js
var themePreference = __webpack_require__(7609);
;// CONCATENATED MODULE: ./components/UserProfile.js





const settingsLinks = [
    {
        name: "Settings",
        link: "#"
    },
    {
        name: "Sign Out",
        link: "#"
    }
];
function UserProfile() {
    const { signedUser  } = (0,external_react_.useContext)(context_signedUser/* UserContext */.S);
    const { theme  } = (0,external_react_.useContext)(themePreference/* ThemeContext */.N);
    const { 0: expand , 1: setExpand  } = (0,external_react_.useState)(false);
    const expandRef = (0,external_react_.useRef)();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `hidden w-full max-w-xs mt-10 ml-auto ${theme === "dark" ? "bg-neutral-700/20" : "bg-neutral-200"} rounded-xl lg:block`,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: `
       flex relative items-center justify-center flex-col  p-4 transition rounded-lg h-26`,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col items-center justify-center p-4 rounded-xl",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col xl:flex-row gap-x-2",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: `hidden text-xl font-medium ${theme === "dark" ? "text-white" : "text-neutral-900"} lg:block sm:text-sm md:text-md lg:text-lg`,
                                children: signedUser?.firstName
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: `hidden text-xl font-medium ${theme === "dark" ? "text-white" : "text-neutral-900"} lg:block sm:text-sm md:text-md lg:text-lg`,
                                children: signedUser?.lastName
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: `hidden text-xs ${theme === "dark" ? "text-neutral-300/75" : "text-neutral-600/75"} lg:block md:text-sm lg:text-base`,
                        children: signedUser?.email
                    })
                ]
            })
        })
    });
};

;// CONCATENATED MODULE: ./components/AccountsList.js







function AccountsList() {
    const { tab , setTab , subLink , setSublink  } = (0,external_react_.useContext)(currentTab/* TabContext */.q);
    const { theme  } = (0,external_react_.useContext)(themePreference/* ThemeContext */.N);
    const tabs = [
        {
            name: "Overview",
            func: ()=>{
                setTab("Overview");
            },
            icon: /*#__PURE__*/ jsx_runtime_.jsx(solid_namespaceObject.HomeIcon, {
                className: "w-7 h-7"
            })
        },
        {
            name: "Accounts",
            func: ()=>{
                setTab("Accounts");
            },
            icon: /*#__PURE__*/ jsx_runtime_.jsx(solid_namespaceObject.UserIcon, {
                className: "w-7 h-7"
            })
        },
        {
            name: "Settings",
            func: ()=>{
                setTab("Settings");
            },
            icon: /*#__PURE__*/ jsx_runtime_.jsx(solid_namespaceObject.CogIcon, {
                className: " w-7 h-7"
            }),
            subLink: [
                {
                    name: "Profile",
                    func: ()=>{
                        setSublink("Profile");
                    },
                    icon: /*#__PURE__*/ jsx_runtime_.jsx(solid_namespaceObject.UserIcon, {
                        className: "w-5 h-5 "
                    })
                },
                {
                    name: "Accounts",
                    func: ()=>{
                        setSublink("Accounts");
                    },
                    icon: /*#__PURE__*/ jsx_runtime_.jsx(solid_namespaceObject.CollectionIcon, {
                        className: "w-5 h-5 "
                    })
                }, 
            ]
        }, 
    ];
    console.log(tab);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "relative w-full h-full max-w-xs mt-8 mb-10 ml-auto lg:mt-0",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                children: tabs.map((currentTab, index)=>/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                        children: currentTab.name === tab ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                            className: `items-center justify-center block p-3 my-4 text-base font-medium text-white list-none lg:p-4 lg:items-start rounded-xl ${theme === "dark" ? "bg-neutral-900/50" : "bg-neutral-100"} gap-x-3`,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                    className: "flex items-center text-red-500 gap-x-3 ",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            className: "mx-auto lg:mx-0",
                                            children: [
                                                currentTab.icon,
                                                " "
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "hidden lg:block",
                                            children: currentTab.name
                                        })
                                    ]
                                }),
                                currentTab.subLink?.map((link, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        className: `items-center text-sm justify-start p-3 my-4 flex font-medium list-none lg:p-4 lg:items-start rounded-xl  cursor-pointer gap-x-3 
                ${theme === "dark" && subLink === link.name ? "text-red-500 bg-neutral-800 cursor-auto" : "bg-neutral-700/20 "}
                ${theme === "light" && subLink === link.name ? "text-red-500 bg-white cursor-auto" : " bg-gray-100  "}
                `,
                                        onClick: link.func,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "mx-auto lg:mx-0",
                                                children: link.icon
                                            }),
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "hidden lg:block",
                                                children: link.name
                                            })
                                        ]
                                    }, index))
                            ]
                        }, index) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                            onClick: currentTab.func,
                            className: `flex items-center justify-center p-3 my-4 text-base font-medium text-white list-none cursor-pointer lg:justify-start lg:p-4 rounded-xl ${theme === "dark" ? "hover:bg-neutral-900/50" : "hover:bg-neutral-100"} gap-x-3`,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: `mx-auto ${theme === "dark" ? "text-neutral-400" : "text-neutral-900"} lg:mx-0`,
                                    children: currentTab.icon
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: `hidden lg:block ${theme === "dark" ? "text-white" : "text-neutral-900"}`,
                                    children: currentTab.name
                                })
                            ]
                        })
                    }))
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                className: `absolute bottom-0 flex items-center justify-start w-full p-4 list-none cursor-pointer rounded-xl ${theme === "dark" ? "hover:text-red-500 text-neutral-200 hover:bg-neutral-900/50" : "hover:text-red-500 text-neutral-900 hover:bg-neutral-200"} gap-x-3`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(solid_namespaceObject.LogoutIcon, {
                        className: "mx-auto w-7 h-7 lg:mx-0"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "hidden lg:block",
                        children: "Sign out"
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: ./components/Button.js
var Button = __webpack_require__(2077);
;// CONCATENATED MODULE: ./components/TimeFilter.js




const TimeFilter = ({ setTimeframe , timeframe , display  })=>{
    const { tab  } = (0,external_react_.useContext)(currentTab/* TabContext */.q);
    const filters = [
        "6 months",
        "12 months",
        "24 months",
        "YTD"
    ];
    const { 0: currentFilter , 1: setCurrentFilter  } = (0,external_react_.useState)(timeframe);
    const { 0: displayFilters , 1: setDisplayFilters  } = (0,external_react_.useState)(false);
    const handleFilterChange = (filter)=>{
        setDisplayFilters(!displayFilters);
        setCurrentFilter(filter);
    };
    (0,external_react_.useEffect)(()=>{
        setTimeframe(currentFilter);
        return ()=>{};
    }, [
        currentFilter
    ]);
    (0,external_react_.useEffect)(()=>{
        setTimeframe("6 months");
        setCurrentFilter("6 months");
    }, [
        tab
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-wrap w-full gap-3 my-2",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                className: "flex items-center justify-center px-4 py-2 text-xs font-medium text-white list-none transition cursor-pointer sm:text-sm bg-neutral-400/25 rounded-xl hover:bg-neutral-500/50 gap-x-2",
                onClick: ()=>setDisplayFilters(!displayFilters),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "flex items-center justify-center gpa-x-3",
                        children: currentFilter
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: `${displayFilters ? "rotate-0" : "rotate-180"} transition`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(solid_namespaceObject.ChevronLeftIcon, {
                            className: "w-5 h-5"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex gap-x-3",
                children: filters.map((filter, index)=>/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                        children: filter != currentFilter && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: `${displayFilters ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} px-4 py-2 text-sm font-medium text-white list-none transition cursor-pointer bg-neutral-800/50 rounded-xl hover:bg-neutral-700`,
                            onClick: ()=>handleFilterChange(filter),
                            children: filter
                        })
                    }))
            })
        ]
    });
};
/* harmony default export */ const components_TimeFilter = (TimeFilter);

;// CONCATENATED MODULE: ./components/TransactionItem.js

const TransactionItem = ({ transaction , display , index  })=>{
    const formatDate = (e)=>{
        // TODO, return formatted date for a better user experience
        const months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];
        if (!e) {
            return;
        }
        // TODO, split the given date, usually in the format yyyy-mm-dd
        const splitDate = e.split("-");
        const month = months[parseInt(splitDate[1]) - 1];
        const year = splitDate[0];
        const day = splitDate[2];
        return {
            month,
            year,
            day
        };
    };
    const handleAmount = (amount)=>{
        // TODO, this function is for ux design purposes
        // TODO, checking has a weird thing where transactions that are deposits return as negative.
        // handle the error by flipping the false/true returns
        if (Math.sign(amount) === -1) {
            if (display.subtype === "checking") {
                return false;
            }
            return true;
        } else {
            if (display.subtype === "checking") {
                return true;
            }
            return false;
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "w-full my-6",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                className: "my-2 text-sm font-light text-neutral-600",
                children: [
                    formatDate(transaction.date).month,
                    " ",
                    formatDate(transaction.date).day,
                    " ",
                    formatDate(transaction.date).year
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `flex-col-reverse items-start gap-y-2 flex sm:items-center sm:justify-between px-4 py-3 ${handleAmount(transaction.amount) ? "bg-red-400 bg-opacity-[3%]" : "bg-green-200 bg-opacity-[3%]"} rounded-xl`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "flex-1 text-xs font-medium text-white sm:text-sm",
                        children: transaction.merchant_name || transaction.name
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: `flex-1 text-right ${handleAmount(transaction.amount) ? "text-red-500" : "text-green-500"}`,
                        children: display.subtype === "checking" ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                            children: (transaction.amount * -1).toLocaleString("en-us", {
                                style: "currency",
                                currency: transaction.iso_currency_code
                            })
                        }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                            children: transaction.amount.toLocaleString("en-us", {
                                style: "currency",
                                currency: transaction.iso_currency_code
                            })
                        })
                    })
                ]
            })
        ]
    }, index);
};
/* harmony default export */ const components_TransactionItem = (TransactionItem);

;// CONCATENATED MODULE: ./components/Categories.js




const Categories = ({ category , display  })=>{
    const { 0: userLocale , 1: setUserLocale  } = (0,external_react_.useState)();
    const { 0: renderAmount , 1: setRenderAmount  } = (0,external_react_.useState)(3);
    const getTransactionTotals = (category)=>{
        let total = 0;
        let currencyCode = "USD";
        category.transactions.forEach((transaction)=>{
            total += transaction.amount;
            currencyCode = transaction.iso_currency_code;
        });
        return {
            total,
            currencyCode
        };
    };
    (0,external_react_.useEffect)(()=>{
        // TODO, figure out the users language preference, used to format the currency display.
        const navigator = navigator?.languages && navigator?.languages.length ? navigator?.languages[0] : navigator?.language;
        setUserLocale(navigator || "en-us");
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "w-full",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "mt-10 text-sm font-medium text-red-400",
                children: category.category
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `
      w-full h-auto p-6 mt-2 bg-neutral-800/20 rounded-xl
      ${category.transactions.length > 3 && "hover:bg-neutral-800/60 cursor-pointer"}
      `,
                onClick: ()=>category.transactions.length > 3 && setRenderAmount(renderAmount === 3 ? 1000 : 3),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            className: "text-xl font-medium text-neutral-400",
                            children: [
                                "Total Spendature:",
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                    className: "text-white",
                                    children: [
                                        " ",
                                        getTransactionTotals(category).total.toLocaleString(userLocale, {
                                            style: "currency",
                                            currency: getTransactionTotals(category).currencyCode
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "mt-6 text-lg font-medium text-white",
                                children: "View all your expenses:"
                            }),
                            category.transactions.map((transaction, index)=>/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                    children: index < renderAmount && /*#__PURE__*/ jsx_runtime_.jsx(components_TransactionItem, {
                                        display: display,
                                        transaction: transaction,
                                        index: index
                                    }, index)
                                }))
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_Categories = (Categories);

;// CONCATENATED MODULE: ./function/getTransactions.js
const getTransactions = async (timeframe, access_token, accountId)=>{
    const endDate = new Date();
    let endDateFormat = endDate.toISOString().substring(0, 10);
    const startDate = new Date(endDate.setMonth(endDate.getMonth() - timeframe));
    console.log(timeframe);
    let startDateFormat = startDate.toISOString().substring(0, 10);
    console.log(startDateFormat);
    // TODO, fetch transactions of account that was clicked
    const getTransactionsResponse = await fetch(`${"https://localhost:3001"}/api/transactions/${access_token}/${startDateFormat}/${endDateFormat}`, {
        method: "GET"
    });
    const { transactions  } = await getTransactionsResponse.json();
    // TODO, filter out selected card to display the right transactions
    const selectedCardTransactions = transactions.filter((transaction)=>transaction.account_id == accountId);
    return selectedCardTransactions;
};

;// CONCATENATED MODULE: ./components/Sortby.js



const Sortby = ({ setSortBy , timeframe , display  })=>{
    const { 0: sortValue , 1: setSortValue  } = (0,external_react_.useState)("Newest to Oldest");
    const { 0: openModal , 1: setOpenModal  } = (0,external_react_.useState)(false);
    const handleSort = ()=>{
        console.log("work ?");
        setSortValue(sortValue === "Newest to Oldest" ? "Oldest to Newest" : "Newest to Oldest");
        setSortBy(sortValue);
    };
    (0,external_react_.useEffect)(()=>{
        setSortValue("Newest to Oldest");
        setSortBy(sortValue);
        console.log("infinitelooptest");
        return ()=>{};
    }, [
        display
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "inline-block text-white list-none bg-red-600 rounded-xl",
        onClick: ()=>setOpenModal(!openModal),
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                className: "flex w-full gap-3 px-4 py-2 text-sm transition cursor-pointer rounded-xl",
                children: [
                    sortValue,
                    /*#__PURE__*/ jsx_runtime_.jsx(solid_namespaceObject.ChevronDownIcon, {
                        className: "w-5 h-5"
                    })
                ]
            }),
            openModal && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "rounded-full",
                children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    className: "flex gap-3 px-4 py-4 text-sm transition cursor-pointer rounded-bl-xl rounded-br-xl bg-red-700/90 hover:bg-red-800/50",
                    onClick: ()=>handleSort(),
                    children: sortValue === "Newest to Oldest" ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                        children: "Oldest to Newest"
                    }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                        children: "Newest to Oldest"
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const components_Sortby = (Sortby);

;// CONCATENATED MODULE: ./components/Slider.js


const Slider = ({ display , setDisplayAmount  })=>{
    const handleChange = (e)=>{
        setDisplayAmount(e.target.value);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "w-full p-6 my-2 bg-neutral-800/50 rounded-xl gap-y-6",
        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
            type: "range",
            className: "w-full bg-gray-500 rounded-lg outline-none appearance-none cursor-pointer range-lg dark:bg-gray-700",
            step: "0.01",
            defaultValue: display.balances?.current,
            min: display.accLiability?.minimum_payment_amount,
            max: display.balances?.current,
            onChange: (e)=>setDisplayAmount(e.target.value)
        })
    });
};
/* harmony default export */ const components_Slider = (Slider);

;// CONCATENATED MODULE: ./components/CreditLiabilityBox.js


const CreditLiabilityBox = ({ displayAmount , userLocale , display , penalty  })=>{
    const formatDate = (e)=>{
        // TODO, return formatted date for a better user experience
        const months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];
        if (!e) {
            return;
        }
        // TODO, split the given date, usually in the format yyyy-mm-dd
        const splitDate = e.split("-");
        const month = months[parseInt(splitDate[1]) - 1];
        const year = splitDate[0];
        const day = splitDate[2];
        return {
            month,
            year,
            day
        };
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "w-full col-span-4 p-6 bg-red-600/70 rounded-xl",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "text-base font-medium text-neutral-300",
                children: displayAmount == display.balances?.current ? "Total Balance" : parseInt(displayAmount) === display.accLiability?.minimum_payment_amount ? "Minimum Payment" : "Custom Amount"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "text-3xl font-medium text-white",
                children: parseFloat(displayAmount).toLocaleString(userLocale, {
                    style: "currency",
                    currency: display.balances?.iso_currency_code || "USD"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                className: "flex flex-col items-start justify-start mt-2 mb-4 xl:items-center xl:justify-between xl:flex-row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: " text-neutral-300",
                        children: displayAmount != display.balances?.current ? "Estimated Penalty Charges" : `Statement Balance as of ${formatDate(display.accLiability?.last_statement_issue_date).month} ${formatDate(display.accLiability?.last_statement_issue_date).day} ${formatDate(display.accLiability?.last_statement_issue_date).year}`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "text-lg font-medium text-neutral-100 ",
                        children: displayAmount != display.balances?.current ? parseFloat(penalty).toLocaleString(userLocale, {
                            style: "currency",
                            currency: display.balances?.iso_currency_code || "USD"
                        }) : display.accLiability?.last_statement_balance.toLocaleString(userLocale, {
                            style: "currency",
                            currency: display.balances?.iso_currency_code || "USD"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                className: "mt-2 text-sm text-neutral-300",
                children: [
                    display.accLiability?.minimum_payment_amount.toLocaleString(userLocale, {
                        style: "currency",
                        currency: display.balances?.iso_currency_code || "USD"
                    }),
                    " minimum payment due on ",
                    formatDate(display.accLiability?.next_payment_due_date).month,
                    " ",
                    formatDate(display.accLiability?.next_payment_due_date).day
                ]
            })
        ]
    });
};
/* harmony default export */ const components_CreditLiabilityBox = (CreditLiabilityBox);

;// CONCATENATED MODULE: ./components/CheckingInfoBox.js


const CheckingInfoBox = ({ displayAmount , display , userLocale  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "w-full col-span-4 p-6 bg-red-600/70 rounded-xl",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "text-base font-medium text-neutral-200",
                children: "Available balance"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "text-2xl font-medium text-white",
                children: parseFloat(displayAmount).toLocaleString(userLocale, {
                    style: "currency",
                    currency: display.balances?.iso_currency_code || "USD"
                })
            })
        ]
    });
};
/* harmony default export */ const components_CheckingInfoBox = (CheckingInfoBox);

;// CONCATENATED MODULE: ./components/TotalEarnedBox.js


const TotalEarnedBox = ({ display , timeframe , userLocale  })=>{
    const { 0: totalEarned , 1: setTotalEarned  } = (0,external_react_.useState)(0);
    (0,external_react_.useEffect)(()=>{
        setTotalEarned(0);
        const getIncomeEarned = ()=>{
            if (display != null) {
                switch(timeframe){
                    case "6 months":
                        // TODO, get payemnts, when plaid returns transactions for checking, negatives usually means payments for some odd reason.
                        const getPayments = display?.transactions?.filter((transaction)=>Math.sign(transaction.amount) === -1);
                        // TODO, add filtered transactions to total variable.
                        let total = 0;
                        getPayments?.forEach((payment)=>{
                            total += payment.amount * -1;
                        });
                        setTotalEarned(total.toFixed(2));
                        break;
                    case "12 months":
                        // TODO, get payemnts, when plaid returns transactions for checking, negatives usually means payments for some odd reason.
                        const getPayments12Month = display?.twelveMonthTransactions?.filter((transaction)=>Math.sign(transaction.amount) === -1);
                        // TODO, add filtered transactions to total variable.
                        let total12Month = 0;
                        getPayments12Month?.forEach((payment)=>{
                            total12Month += payment.amount * -1;
                        });
                        setTotalEarned(total12Month.toFixed(2));
                        break;
                    case "24 months":
                        // TODO, get payemnts, when plaid returns transactions for checking, negatives usually means payments for some odd reason.
                        const getPayments24Month = display?.twentyFourMonthTransactions?.filter((transaction)=>Math.sign(transaction.amount) === -1);
                        // TODO, add filtered transactions to total variable.
                        let total24Month = 0;
                        getPayments24Month?.forEach((payment)=>{
                            total24Month += payment.amount * -1;
                        });
                        setTotalEarned(total24Month.toFixed(2));
                        break;
                    case "YTD":
                        // TODO, get payemnts, when plaid returns transactions for checking, negatives usually means payments for some odd reason.
                        const getPaymentsYTD = display?.ytdTransactions?.filter((transaction)=>Math.sign(transaction.amount) === -1);
                        // TODO, add filtered transactions to total variable.
                        let totalYTD = 0;
                        getPaymentsYTD?.forEach((payment)=>{
                            totalYTD += payment.amount * -1;
                        });
                        setTotalEarned(totalYTD.toFixed(2));
                        break;
                }
            }
        };
        getIncomeEarned();
        console.log("infinitelooptest");
        return ()=>{};
    }, [
        timeframe,
        display
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `
    ${display.subtype === "credit card" && "col-span-4 p-6 bg-indigo-600 rounded-xl xl:col-span-4"}
    ${display.subtype === "checking" && "col-span-4 p-6 bg-indigo-600 rounded-xl xl:col-span-2"}
    `,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "text-neutral-300 ",
                children: "Total earned"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-2xl font-medium text-white",
                children: parseFloat(totalEarned).toLocaleString(userLocale, {
                    style: "currency",
                    currency: display.balances?.iso_currency_code || "USD"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                className: "mt-2 text-sm text-neutral-300/75",
                children: [
                    "Within ",
                    /*#__PURE__*/ jsx_runtime_.jsx("b", {
                        children: timeframe
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_TotalEarnedBox = (TotalEarnedBox);

;// CONCATENATED MODULE: ./components/TotalSpendBox.js



const TotalSpendBox = ({ display , timeframe , userLocale , setOpenTrackSpending  })=>{
    const { 0: totalSpend , 1: setTotalSpend  } = (0,external_react_.useState)(0);
    const handleClick = ()=>{
        setOpenTrackSpending(true);
    };
    (0,external_react_.useEffect)(()=>{
        setTotalSpend(0);
        const getSpending = ()=>{
            if (display != null) {
                switch(timeframe){
                    case "6 months":
                        const getSpending = display?.transactions?.filter((transaction)=>Math.sign(transaction.amount) === 1);
                        let total = 0;
                        getSpending?.forEach((payment)=>{
                            total += payment.amount * -1;
                        });
                        setTotalSpend(total.toFixed(2));
                        break;
                    case "12 months":
                        const getSpending12Month = display?.twelveMonthTransactions?.filter((transaction)=>Math.sign(transaction.amount) === 1);
                        let twelveMonthTotal = 0;
                        getSpending12Month?.forEach((payment)=>{
                            twelveMonthTotal += payment.amount * -1;
                        });
                        setTotalSpend(twelveMonthTotal.toFixed(2));
                        break;
                    case "YTD":
                        const getSpendingYTD = display?.ytdTransactions?.filter((transaction)=>Math.sign(transaction.amount) === 1);
                        let ytdTransactionsTotal = 0;
                        getSpendingYTD?.forEach((payment)=>{
                            ytdTransactionsTotal += payment.amount * -1;
                        });
                        setTotalSpend(ytdTransactionsTotal.toFixed(2));
                        break;
                    case "24 months":
                        const getSpending24Month = display?.twentyFourMonthTransactions?.filter((transaction)=>Math.sign(transaction.amount) === 1);
                        let twentyFourMonthTotal = 0;
                        getSpending24Month?.forEach((payment)=>{
                            twentyFourMonthTotal += payment.amount * -1;
                        });
                        setTotalSpend(twentyFourMonthTotal.toFixed(2));
                        break;
                }
            }
        };
        getSpending();
        console.log("infinitelooptest");
        return ()=>{};
    }, [
        timeframe,
        display
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `
      ${display.subtype === "credit card" && "col-span-4 p-6 bg-sky-600 rounded-xl xl:col-span-4"}
      ${display.subtype === "checking" && "col-span-4 p-6 bg-sky-600 rounded-xl xl:col-span-2"}
      `,
        onClick: ()=>handleClick(),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "text-neutral-300 text-",
                children: "Total Spent"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-2xl font-medium text-white",
                children: parseFloat(totalSpend).toLocaleString(userLocale, {
                    style: "currency",
                    currency: display.balances?.iso_currency_code || "USD"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                className: "mt-2 text-sm text-neutral-300/75",
                children: [
                    "Within ",
                    /*#__PURE__*/ jsx_runtime_.jsx("b", {
                        children: timeframe
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_TotalSpendBox = (TotalSpendBox);

;// CONCATENATED MODULE: ./components/Transactions.js
















function Transactions() {
    const { transactions , bankAccounts , transactionsId , setBankAccounts  } = (0,external_react_.useContext)(creditcards/* ItemsContext */.c);
    const { tab , setTab  } = (0,external_react_.useContext)(currentTab/* TabContext */.q);
    const { 0: displayAmount , 1: setDisplayAmount  } = (0,external_react_.useState)(0);
    const { 0: penalty , 1: setPenalty  } = (0,external_react_.useState)(0);
    const { 0: userLocale , 1: setUserLocale  } = (0,external_react_.useState)();
    const { 0: categories , 1: setCategories  } = (0,external_react_.useState)();
    const { 0: renderAmount , 1: setRenderAmount  } = (0,external_react_.useState)(3);
    const { 0: openTrackSpending , 1: setOpenTrackSpending  } = (0,external_react_.useState)(false);
    const { 0: display , 1: setDisplay  } = (0,external_react_.useState)(null);
    const { 0: timeframe , 1: setTimeframe  } = (0,external_react_.useState)("6 months");
    const { 0: sortBy , 1: setSortBy  } = (0,external_react_.useState)();
    console.log(bankAccounts);
    // TODO, use effect is used to handle the display for this component. 
    // It depends on the transactionsId state which is being set on the credit cards
    // page when a user decides to view more information.
    (0,external_react_.useEffect)(()=>{
        let pos;
        bankAccounts.forEach((bankAccount, bankIndex)=>{
            if (!bankAccount.accounts) {
                return;
            }
            pos = bankAccount.accounts?.findIndex((acc)=>acc.account_id === transactionsId);
            // TODO, if a match is found, stop searching and set the display data
            if (pos != -1) {
                setDisplay(bankAccounts[bankIndex].accounts[pos]);
                setDisplayAmount(bankAccounts[bankIndex]?.accounts[pos]?.balances?.current);
            }
        });
        return ()=>{};
    }, [
        transactionsId
    ]);
    // TODO, use effect is used to handle users interests if they decide to do a custom payment amount through the slider.
    (0,external_react_.useEffect)(()=>{
        // TODO, error handling, this is if the user chooses to view their checkings.
        if (!display?.accLiability) return;
        // TODO, if minium penalty is 0, set penalty to 0, you cannot get charged penalties if your minimum is 0
        // 0 minimum means no statement to pay.
        if (display.accLiability.minimum_payment_amount === 0) {
            setPenalty(0);
            return;
        }
        // TODO, cannot display penalties if custom amount is greater than the statement balance.
        if (displayAmount >= display?.accLiability?.last_statement_balance) {
            setPenalty(0);
            return;
        }
        // TODO, figure out penalty charges through users APR, if APR is not found, use default of 29.99%
        const apr = display.accLiability?.aprs.filter((apr)=>apr.apr_type === "purchase_apr") || 29.99;
        const penalty = (apr[0]?.apr_percentage || 29.99 / 100).toFixed(4) / 12 * display.balances?.current - (apr[0]?.apr_percentage || 29.99 / 100).toFixed(4) / 12 * displayAmount;
        setPenalty(penalty.toFixed(2));
    }, [
        displayAmount
    ]);
    //TODO, use effect is used to determine users language preference
    (0,external_react_.useEffect)(()=>{
        let isMounted = true;
        // TODO, figure out the users language preference, used to format the currency display.
        const navigator = navigator?.languages && navigator?.languages.length ? navigator?.languages[0] : navigator?.language;
        if (isMounted) {
            setUserLocale(navigator || "en-us");
        }
        // TODO, cleanup function
        return ()=>{
            isMounted = false;
        };
    }, []);
    // TODO, used effect is used to filter out transactions for the categories section. Only runs when the display state changes
    (0,external_react_.useEffect)(()=>{
        let filterCategories = [];
        // TODO, check if object has data in it, else, don't run
        if (display != null) {
            // TODO, for each transaction, push a category that isn't already inside the 
            // array, if array contains category, add transaction to the correct category.
            switch(timeframe){
                case "6 months":
                    display?.transactions?.forEach((transaction)=>{
                        if (!filterCategories.some((obj)=>obj.category === transaction.category[1])) {
                            // TODO, create new array adding the category name and the transactions
                            const obj = {
                                category: transaction.category[1] || transaction.category[0],
                                transactions: [
                                    transaction
                                ]
                            };
                            filterCategories.push(obj);
                            setCategories(filterCategories);
                        } else {
                            // TODO, if cateogory name already exists, add the current transaction to that array. 
                            const pos = filterCategories.findIndex((obj)=>obj.category === transaction.category[1]);
                            filterCategories[pos].transactions.push(transaction);
                            setCategories(filterCategories);
                        }
                    });
                    break;
                case "12 months":
                    display?.twelveMonthTransactions?.forEach((transaction)=>{
                        if (!filterCategories.some((obj)=>obj.category === transaction.category[1])) {
                            // TODO, create new array adding the category name and the transactions
                            const obj = {
                                category: transaction.category[1] || transaction.category[0],
                                transactions: [
                                    transaction
                                ]
                            };
                            filterCategories.push(obj);
                            setCategories(filterCategories);
                        } else {
                            // TODO, if cateogory name already exists, add the current transaction to that array. 
                            const pos = filterCategories.findIndex((obj)=>obj.category === transaction.category[1]);
                            filterCategories[pos].transactions.push(transaction);
                            setCategories(filterCategories);
                        }
                    });
                    break;
                case "24 months":
                    display?.twentyFourMonthTransactions?.forEach((transaction)=>{
                        if (!filterCategories.some((obj)=>obj.category === transaction.category[1])) {
                            // TODO, create new array adding the category name and the transactions
                            const obj = {
                                category: transaction.category[1] || transaction.category[0],
                                transactions: [
                                    transaction
                                ]
                            };
                            filterCategories.push(obj);
                            setCategories(filterCategories);
                        } else {
                            // TODO, if cateogory name already exists, add the current transaction to that array. 
                            const pos = filterCategories.findIndex((obj)=>obj.category === transaction.category[1]);
                            filterCategories[pos].transactions.push(transaction);
                            setCategories(filterCategories);
                        }
                    });
                    break;
                case "YTD":
                    display?.ytdTransactions?.forEach((transaction)=>{
                        if (!filterCategories.some((obj)=>obj.category === transaction.category[1])) {
                            // TODO, create new array adding the category name and the transactions
                            const obj = {
                                category: transaction.category[1] || transaction.category[0],
                                transactions: [
                                    transaction
                                ]
                            };
                            filterCategories.push(obj);
                            setCategories(filterCategories);
                        } else {
                            // TODO, if cateogory name already exists, add the current transaction to that array. 
                            const pos = filterCategories.findIndex((obj)=>obj.category === transaction.category[1]);
                            filterCategories[pos].transactions.push(transaction);
                            setCategories(filterCategories);
                        }
                    });
                    break;
            }
        }
    }, [
        display
    ]);
    // TODO, change transactions once user has changed the filter value. Default is '6 Months'
    (0,external_react_.useEffect)(()=>{
        switch(timeframe){
            // TODO, 6 months is default transactions, do not alter anything. 
            case "6 months":
                return;
            case "YTD":
                bankAccounts.forEach(async (account, bankAccountIndex)=>{
                    const accountIdPos = account.accounts?.findIndex((acc)=>acc.account_id === display.account_id);
                    // TODO, check if an id is found, if not return 
                    if (accountIdPos == -1 || accountIdPos === undefined) {
                        return;
                    } else {
                        // TODO, check if object already exists, do not run getTransactions multiple times
                        if (bankAccounts[bankAccountIndex].accounts[accountIdPos].hasOwnProperty("ytdTransactions")) {
                            return;
                        } else {
                            // TODO, if an object is not found, create the object and store in bank accounts.
                            let today = new Date().getMonth() + 1;
                            let monthsTillJan = 0;
                            // TODO, figure out how many months is it from the current month to January. 
                            while(today > 1){
                                monthsTillJan += 1;
                                today--;
                            }
                            // TODO, get transactions from the new data and store into bankAccounts state
                            const ytdTransactions = await getTransactions(monthsTillJan, bankAccounts[bankAccountIndex].accessToken, transactionsId);
                            const addYtd = [
                                ...bankAccounts
                            ];
                            addYtd[bankAccountIndex].accounts[accountIdPos] = {
                                ...addYtd[bankAccountIndex].accounts[accountIdPos],
                                ytdTransactions: ytdTransactions
                            };
                            await setBankAccounts(addYtd);
                            // TODO, cause state to rerender
                            setDisplay(bankAccounts[bankAccountIndex].accounts[accountIdPos]);
                        }
                    }
                });
                break;
            case "12 months":
                bankAccounts.forEach(async (account, bankAccountIndex)=>{
                    const accountIdPos = account.accounts?.findIndex((acc)=>acc.account_id === display.account_id);
                    // TODO, check if an id is found, if not return 
                    if (accountIdPos == -1 || accountIdPos === undefined) {
                        return;
                    } else {
                        // TODO, check if object already exists, do not run getTransactions multiple times
                        if (bankAccounts[bankAccountIndex].accounts[accountIdPos].hasOwnProperty("twelveMonthTransactions")) {
                            return;
                        } else {
                            // TODO, get transactions from the new data and store into bankAccounts state
                            const twelveMonthTransactions = await getTransactions(12, bankAccounts[bankAccountIndex].accessToken, transactionsId);
                            const addTwelveMonth = [
                                ...bankAccounts
                            ];
                            addTwelveMonth[bankAccountIndex].accounts[accountIdPos] = {
                                ...addTwelveMonth[bankAccountIndex].accounts[accountIdPos],
                                twelveMonthTransactions: twelveMonthTransactions
                            };
                            await setBankAccounts(addTwelveMonth);
                            // TODO, cause state to rerender
                            setDisplay(bankAccounts[bankAccountIndex].accounts[accountIdPos]);
                        }
                    }
                });
                break;
            case "24 months":
                bankAccounts.forEach(async (account, bankAccountIndex)=>{
                    const accountIdPos = account.accounts?.findIndex((acc)=>acc.account_id === display.account_id);
                    // TODO, check if an id is found, if not return 
                    if (accountIdPos == -1 || accountIdPos === undefined) {
                        return;
                    } else {
                        // TODO, check if object already exists, do not run getTransactions multiple times
                        if (bankAccounts[bankAccountIndex].accounts[accountIdPos].hasOwnProperty("twentyFourMonthTransactions")) {
                            return;
                        } else {
                            // TODO, get transactions from the new data and store into bankAccounts state
                            const twentyFourMonthTransactions = await getTransactions(24, bankAccounts[bankAccountIndex].accessToken, transactionsId);
                            const addTwentyFourMonth = [
                                ...bankAccounts
                            ];
                            addTwentyFourMonth[bankAccountIndex].accounts[accountIdPos] = {
                                ...addTwentyFourMonth[bankAccountIndex].accounts[accountIdPos],
                                twentyFourMonthTransactions: twentyFourMonthTransactions
                            };
                            await setBankAccounts(addTwentyFourMonth);
                            // TODO, cause state to rerender
                            setDisplay(bankAccounts[bankAccountIndex].accounts[accountIdPos]);
                        }
                    }
                });
                break;
        }
        return ()=>{};
    }, [
        timeframe
    ]);
    // TODO, this useeffect handles filtering from old to new / vice versa
    (0,external_react_.useEffect)(()=>{
        if (display != null) {
            const sortTransactions = ()=>{
                // TODO, based on timeframe, sort transactions accordingly
                switch(timeframe){
                    case "6 months":
                        // TODO, check the sortby value.
                        if (sortBy === "Newest to Oldest") {
                            const NewToOld = display?.transactions?.sort(function(a, b) {
                                return new Date(b.date) - new Date(a.date);
                            });
                            // TODO, reference current display
                            const displayArr = display;
                            // TODO, replace current display transactions with reversed transactions
                            displayArr.transactions = NewToOld;
                            setDisplay(displayArr);
                        } else {
                            const OldToNew = display?.transactions?.sort(function(a, b) {
                                return new Date(a.date) - new Date(b.date);
                            });
                            // TODO, reference current display
                            const displayArr1 = display;
                            // TODO, replace current display transactions with reversed transactions
                            displayArr1.transactions = OldToNew;
                            setDisplay(displayArr1);
                        }
                        break;
                    case "YTD":
                        // TODO, check the sortby value.
                        if (sortBy === "Newest to Oldest") {
                            const NewToOld1 = display?.ytdTransactions?.sort(function(a, b) {
                                return new Date(b.date) - new Date(a.date);
                            });
                            // TODO, reference current display
                            const displayArr2 = display;
                            // TODO, replace current display transactions with reversed transactions
                            displayArr2.transactions = NewToOld1;
                            setDisplay(displayArr2);
                        } else {
                            const OldToNew1 = display?.ytdTransactions?.sort(function(a, b) {
                                return new Date(a.date) - new Date(b.date);
                            });
                            // TODO, reference current display
                            const displayArr3 = display;
                            // TODO, replace current display transactions with reversed transactions
                            displayArr3.transactions = OldToNew1;
                            setDisplay(displayArr3);
                        }
                        break;
                    case "12 months":
                        // TODO, check the sortby value.
                        if (sortBy === "Newest to Oldest") {
                            const NewToOld2 = display?.twelveMonthTransactions?.sort(function(a, b) {
                                return new Date(b.date) - new Date(a.date);
                            });
                            // TODO, reference current display
                            const displayArr4 = display;
                            // TODO, replace current display transactions with reversed transactions
                            displayArr4.transactions = NewToOld2;
                            setDisplay(displayArr4);
                        } else {
                            const OldToNew2 = display?.twelveMonthTransactions?.sort(function(a, b) {
                                return new Date(a.date) - new Date(b.date);
                            });
                            // TODO, reference current display
                            const displayArr5 = display;
                            // TODO, replace current display transactions with reversed transactions
                            displayArr5.transactions = OldToNew2;
                            setDisplay(displayArr5);
                        }
                        break;
                    case "24 months":
                        // TODO, check the sortby value.
                        if (sortBy === "Newest to Oldest") {
                            const NewToOld3 = display?.twentyFourMonthTransactions?.sort(function(a, b) {
                                return new Date(b.date) - new Date(a.date);
                            });
                            // TODO, reference current display
                            const displayArr6 = display;
                            // TODO, replace current display transactions with reversed transactions
                            displayArr6.transactions = NewToOld3;
                            setDisplay(displayArr6);
                        } else {
                            const OldToNew3 = display?.twentyFourMonthTransactions?.sort(function(a, b) {
                                return new Date(a.date) - new Date(b.date);
                            });
                            // TODO, reference current display
                            const displayArr7 = display;
                            // TODO, replace current display transactions with reversed transactions
                            displayArr7.transactions = OldToNew3;
                            setDisplay(displayArr7);
                        }
                        break;
                }
            };
            sortTransactions();
        }
        return ()=>{};
    }, [
        sortBy,
        timeframe
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `absolute top-0 bottom-0 left-0 right-0 h-full px-4  rounded-xl bg-neutral-900 ${tab === "Transactions" ? "translate-x-0" : "translate-x-full"} transition duration-300 ease-in-out`,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "grid w-full h-full overflow-y-scroll xl:grid-cols-2 gap-x-6 removeScrollbar",
            children: display != null && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "w-full py-10 ",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                        className: "flex items-center justify-start text-2xl font-semibold text-white sm:text-3xl lg:text-4xl gap-x-3",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                onClick: ()=>setTab("View Accounts"),
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(solid_namespaceObject.ArrowSmLeftIcon, {
                                                    className: "w-12 h-12 text-red-500 transition cursor-pointer hover:text-red-500/75"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "text-xl sm:text-3xl lg:text-4xl",
                                                children: display?.official_name
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "mt-2 text-neutral-400",
                                        children: "View all your most recent transactions."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: `grid w-full grid-cols-4 gap-3 my-2 xl:grid-cols-4 rounded-xl`,
                                children: [
                                    display.accLiability ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(components_CreditLiabilityBox, {
                                            display: display,
                                            displayAmount: displayAmount,
                                            userLocale: userLocale,
                                            penalty: penalty
                                        })
                                    }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(components_CheckingInfoBox, {
                                            displayAmount: displayAmount,
                                            userLocale: userLocale,
                                            display: display
                                        })
                                    }),
                                    display.subtype === "credit card" ? /*#__PURE__*/ jsx_runtime_.jsx(components_TotalSpendBox, {
                                        display: display,
                                        timeframe: timeframe,
                                        userLocale: userLocale,
                                        setOpenTrackSpending: setOpenTrackSpending
                                    }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(components_TotalSpendBox, {
                                                display: display,
                                                timeframe: timeframe,
                                                userLocale: userLocale,
                                                setOpenTrackSpending: setOpenTrackSpending
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(components_TotalEarnedBox, {
                                                display: display,
                                                timeframe: timeframe,
                                                userLocale: userLocale
                                            })
                                        ]
                                    })
                                ]
                            }),
                            display.accLiability && /*#__PURE__*/ jsx_runtime_.jsx(components_Slider, {
                                display: display,
                                setDisplayAmount: setDisplayAmount
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "mt-16 mb-2",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "mb-2 text-2xl font-semibold text-white",
                                        children: "Transactions"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(components_Sortby, {
                                        setSortBy: setSortBy,
                                        timeframe: timeframe,
                                        display: display
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(components_TimeFilter, {
                                        setTimeframe: setTimeframe,
                                        timeframe: timeframe,
                                        display: display
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "p-6 mb-10 rounded-xl bg-neutral-800/50",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "flex flex-col items-start justify-between gap-6 lg:flex-row"
                                    }),
                                    timeframe === "6 months" && /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                        children: display.transactions?.map((transaction, index)=>/*#__PURE__*/ jsx_runtime_.jsx(components_TransactionItem, {
                                                display: display,
                                                transaction: transaction,
                                                index: index
                                            }, index))
                                    }),
                                    timeframe === "YTD" && /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                        children: display?.ytdTransactions?.map((transaction, index)=>/*#__PURE__*/ jsx_runtime_.jsx(components_TransactionItem, {
                                                display: display,
                                                transaction: transaction,
                                                index: index
                                            }, index))
                                    }),
                                    timeframe === "12 months" && /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                        children: display?.twelveMonthTransactions?.map((transaction, index)=>/*#__PURE__*/ jsx_runtime_.jsx(components_TransactionItem, {
                                                display: display,
                                                transaction: transaction,
                                                index: index
                                            }, index))
                                    }),
                                    timeframe === "24 months" && /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                        children: display?.twentyFourMonthTransactions?.map((transaction, index)=>/*#__PURE__*/ jsx_runtime_.jsx(components_TransactionItem, {
                                                display: display,
                                                transaction: transaction,
                                                index: index
                                            }, index))
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `xl:bg-black/0  xl:block 
            z-20 ${openTrackSpending ? "bg-black/50" : "bg-black-0"} transition
            fixed inset-0 pointer-events-none
            `,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: `
                xl:w-[50%] xl:h-full px-6 rounded-xl xl:block xl:py-6
                overflow-y-scroll
                removeScrollbar
                absolute top-0 right-0 bottom-0  bg-neutral-900 w-[80%] sm:w-[70%] py-24 pointer-events-auto
                ${openTrackSpending ? "translate-x-0 xl:translate-x-0" : "translate-x-full xl:translate-x-0"}
                transition
                `,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "absolute top-0 right-0 mt-6 mr-6 text-xl xl:hidden",
                                    onClick: ()=>setOpenTrackSpending(!openTrackSpending),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(solid_namespaceObject.XIcon, {
                                        className: "w-8 h-8 text-red-500 transition cursor-pointer hover:text-red-500/50"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: "flex items-center justify-start text-2xl font-semibold text-white sm:text-3xl lg:text-4xl gap-x-3",
                                    children: "Track your spending"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "mt-2 text-gray-400",
                                    children: "Track all your spendature through categories."
                                }),
                                categories?.map((category)=>/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                        children: category.category != "Credit Card" && category.category != "Credit" && category.category != "Payroll" && category.category != "Deposit" && category.category != "Withdrawal" && category.category != "Refund" && /*#__PURE__*/ jsx_runtime_.jsx(components_Categories, {
                                            category: category,
                                            display: display
                                        })
                                    }))
                            ]
                        })
                    })
                ]
            })
        })
    });
};

;// CONCATENATED MODULE: external "jsonwebtoken"
const external_jsonwebtoken_namespaceObject = require("jsonwebtoken");
;// CONCATENATED MODULE: ./function/getUserItems.js
// const https = require('https')
const getUserItems = async (userId)=>{
    const getItemsResponse = await fetch(`${"https://localhost:3001"}/account/get-items/${userId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    const { code , message , accounts  } = await getItemsResponse.json();
    switch(code){
        case 404:
            return "idk bro some fat ass error going on rn";
        case 200:
            return accounts;
    }
};

;// CONCATENATED MODULE: ./function/getItemInfo.js
const https = __webpack_require__(5687);
const getItemInfo = async (userAccounts)=>{
    const accountInfo = await Promise.all(userAccounts.map(async (account)=>{
        const getItemResponse = await fetch(`${"https://localhost:3001"}/api/item/${account.access_token}`, {
            method: "GET",
            // FOR DEV TESTING PURPOSES
            agent: new https.Agent({
                rejectUnauthorized: false
            })
        });
        const getBalanceResponse = await fetch(`${"https://localhost:3001"}/api/balance/${account.access_token}`, {
            method: "GET"
        });
        const { institution  } = await getItemResponse.json();
        const { accounts , error  } = await getBalanceResponse.json();
        console.log(error);
        return await {
            id: account.id || null,
            accessToken: account.access_token || null,
            institution: institution.name || null,
            accounts: accounts || null,
            error: error ? error.error_code : null
        };
    }));
    return accountInfo;
};

;// CONCATENATED MODULE: ./function/getAccountLiabilities.js
const getAccountLiabilities_https = __webpack_require__(5687);
const getAccountLiabilities = async (accounts)=>{
    const accountLiabilities = await Promise.all(accounts.map(async (account)=>{
        const getLiabilities = await fetch(`${"https://localhost:3001"}/api/liabilities/${account.access_token}`, {
            method: "GET"
        });
        const { error , liabilities  } = await getLiabilities.json();
        if (error) {
            return error;
        } else {
            return liabilities;
        }
    }));
    return accountLiabilities;
};

;// CONCATENATED MODULE: ./components/ProfileSettings.js



const inputs = [
    {
        id: 1,
        type: "text",
        label: "First Name",
        name: "firstName",
        placeholder: "First Name"
    },
    {
        id: 2,
        type: "text",
        label: "Last Name",
        name: "lastName",
        placeholder: "Last Name"
    },
    {
        id: 3,
        type: "email",
        label: "Email",
        name: "email",
        placeholder: "Email"
    }, 
];
const ProfileSettings = ()=>{
    const { 0: values , 1: setValues  } = (0,external_react_.useState)({
        firstName: "",
        lastName: "",
        email: ""
    });
    const onChange = (e)=>{
        const { name , value  } = e.target;
        setValues((prevState)=>({
                ...prevState,
                [name]: value
            }));
    };
    const isEmpty = ()=>{
        if (values.firstName === "" && values.lastName === "" && values.email === "") {
            return true;
        } else {
            return false;
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "w-full h-auto pb-24",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "text-2xl font-medium text-white",
                children: "Personal Information"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                className: "flex flex-col pb-16",
                children: [
                    inputs.map(({ id , label , ...inputAttrs })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-col items-start justify-center my-6",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                    className: "mb-2 text-sm text-neutral-400",
                                    children: label
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    ...inputAttrs,
                                    className: "w-full p-4 text-red-200 border-none outline-none focus:outline-none bg-neutral-800 rounded-xl outline-0",
                                    onChange: onChange
                                })
                            ]
                        }, id)),
                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                        text: "Save changes",
                        customCSS: "w-40 ml-auto mt-2",
                        disabled: isEmpty()
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "text-2xl font-medium text-white",
                children: "Delete my account"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "max-w-xl mt-2 text-sm sm:text-base text-neutral-400",
                children: "All of your data will be deleted, personal information as well as bank information will be wiped. If you disable your account, you information will still be stored but you won't be allowed back into our site untill you have logged in and reconfirmed your password."
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex mt-12 gap-x-5",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                        text: "Disable my account",
                        customCSS: "w-52"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "text-sm text-red-400",
                        children: "Delete my account"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_ProfileSettings = (ProfileSettings);

;// CONCATENATED MODULE: ./components/Settings.js




const Settings = ()=>{
    const { tab , subLink  } = (0,external_react_.useContext)(currentTab/* TabContext */.q);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `absolute top-0 overflow-y-scroll bottom-0 left-0 right-0 h-full p-10 bg-neutral-900 ${tab === "Settings" ? "translate-x-0" : "translate-x-full"} transition duration-300 ease-in-out removeScrollbar`,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "w-full",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                        className: "text-4xl font-semibold text-white",
                        children: [
                            subLink,
                            " settings."
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "mt-2 text-neutral-400",
                        children: "View all your account information. "
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-full h-full py-24",
                children: /*#__PURE__*/ jsx_runtime_.jsx(components_ProfileSettings, {})
            })
        ]
    });
};
/* harmony default export */ const components_Settings = (Settings);

;// CONCATENATED MODULE: ./components/Overview.js







const Overview = ()=>{
    const { bankAccounts , setBankAccounts  } = (0,external_react_.useContext)(creditcards/* ItemsContext */.c);
    const { signedUser  } = (0,external_react_.useContext)(context_signedUser/* UserContext */.S);
    const { tab  } = (0,external_react_.useContext)(currentTab/* TabContext */.q);
    const { 0: debtDueSoon , 1: setDebtDueSoon  } = (0,external_react_.useState)();
    const { 0: totalDebt , 1: setTotalDebt  } = (0,external_react_.useState)();
    const { 0: userLocale , 1: setUserLocale  } = (0,external_react_.useState)("en-us");
    //TODO, use effect is used to determine users language preference
    (0,external_react_.useEffect)(()=>{
        let isMounted = true;
        // TODO, figure out the users language preference, used to format the currency display.
        const navigator = navigator?.languages && navigator?.languages.length ? navigator?.languages[0] : navigator?.language;
        if (isMounted) {
            setUserLocale(navigator || "en-us");
        }
        console.log("infinitelooptest");
        // TODO, cleanup function
        return ()=>{
            isMounted = false;
        };
    }, []);
    // TODO, use effect is used to set a total debt. 
    (0,external_react_.useEffect)(()=>{
        (()=>{
            let total = 0;
            bankAccounts.forEach((bankAccount)=>{
                bankAccount.accounts?.map((account)=>{
                    if (account.subtype != "credit card") {
                        return;
                    }
                    total += account.balances.current;
                });
            });
            setTotalDebt(total);
        })();
        console.log("infinitelooptest");
    }, [
        bankAccounts
    ]);
    // TODO, use effect is used to display a card that is being due soon. Preferebly those that have a statement balance on them.
    (0,external_react_.useEffect)(()=>{
        (()=>{
            const creditCardsLiability = [];
            bankAccounts.forEach((bankAccount)=>{
                // TODO, only display accounts that are credit cards
                bankAccount.accounts?.map((account)=>{
                    if (account.subtype != "credit card") {
                        return;
                    }
                    // TODO, get how many days are left till the user has to pay.
                    const today = new Date();
                    const dueDate = new Date(account.accLiability.next_payment_due_date);
                    if (account.accLiability.minimum_payment_amount === 0) {
                        dueDate.setMonth(dueDate.getMonth() + 1);
                    }
                    const differenceInTime = dueDate.getTime() - today.getTime();
                    const differenceInDays = differenceInTime / (1000 * 3600 * 24);
                    if (differenceInDays < 0) {
                        return;
                    }
                    console.log(account);
                    // TODO, create an object displaying necessary information.
                    const cardObj = {
                        account: account,
                        due: account.balances.current,
                        statement: account.accLiability.last_statement_balance - account.accLiability.last_payment_amount,
                        minimumDue: account.accLiability.minimum_payment_amount,
                        daysTillDue: parseInt(differenceInDays),
                        dueDate: account.accLiability.next_payment_due_date,
                        currencyCode: account.balances.iso_currency_code
                    };
                    creditCardsLiability.push(cardObj);
                    console.log(cardObj);
                });
            });
            // TODO, sort credit cards by which card is due first.
            creditCardsLiability.sort((a, b)=>parseInt(a.daysTillDue) - parseFloat(b.daysTillDue));
            setDebtDueSoon(creditCardsLiability);
            console.log("infinitelooptest");
        })();
    }, [
        bankAccounts.length
    ]);
    // SPENDING BY MONTH, INTEGRATE SOON IDK
    (0,external_react_.useEffect)(()=>{
        let accounts = [];
        const trackSpending = async ()=>{
            bankAccounts.forEach((bankAccount)=>{
                bankAccount.accounts?.forEach((account)=>{
                    accounts.push(account);
                });
            });
        };
        trackSpending();
        console.log("infinitelooptest");
    }, [
        bankAccounts.length
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `absolute inset-0 h-full px-10 py-16 z-20 bg-neutral-900 overflow-y-scroll removeScrollbar ${tab === "Overview" ? "translate-x-0" : "translate-x-full"} transition`,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "w-full mb-24",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                        className: "text-2xl font-semibold text-white md:text-3xl xl:text-4xl",
                        children: [
                            "Hi, ",
                            signedUser.firstName,
                            ", welcome back!"
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "mt-2 text-neutral-400",
                        children: "Let's give you a quick overview of your current week."
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "w-full h-full",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "grid grid-cols-6 gap-6 ",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "relative w-full col-span-6 p-6 shadow-xl lg:col-span-2 bg-zinc-800 rounded-xl",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(solid_namespaceObject.CashIcon, {
                                        className: "mb-2 text-white w-14 h-14"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                        className: "text-3xl font-medium text-white",
                                        children: totalDebt?.toLocaleString(userLocale, {
                                            style: "currency",
                                            currency: "USD"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "mt-1 text-sm text-neutral-400",
                                        children: "Total credit card debt"
                                    })
                                ]
                            }),
                            debtDueSoon?.length != 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "relative w-full col-span-6 p-6 shadow-xl lg:col-span-4 bg-zinc-800 rounded-xl",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(solid_namespaceObject.CreditCardIcon, {
                                        className: "mb-2 text-white w-14 h-14"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "text-xl font-medium text-white",
                                        children: debtDueSoon?.length > 1 ? "Debts are due soon" : "A debt is due soon."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "grid w-full grid-cols-1 gap-6 p-4 my-2 sm:grid-cols-2 bg-zinc-900 rounded-xl",
                                        children: debtDueSoon?.map((debt, index)=>/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                                children: index != 3 && /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                                    children: debt?.due > 0 && debt.daysTillDue < 30 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: `${index === 0 ? "sm:col-span-2 bg-neutral-500 p-4 rounded-xl" : "sm:col-span-1 bg-neutral-600/50 rounded-xl p-4"}`,
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                className: "flex flex-wrap items-center justify-start gap-2 text-xs",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "font-medium text-neutral-300",
                                                                        children: debt.account.name
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                        className: "text-neutral-300",
                                                                        children: [
                                                                            "*",
                                                                            debt.account.mask
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                className: "mt-4 text-sm text-neutral-300/75",
                                                                children: debt.minimumDue != 0 ? "Statement balance" : "Total balance"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                className: "text-2xl font-medium text-white",
                                                                children: debt.minimumDue != 0 ? debt.statement?.toLocaleString(userLocale, {
                                                                    style: "currency",
                                                                    currency: debt.currencyCode
                                                                }) : debt.due.toLocaleString(userLocale, {
                                                                    style: "currency",
                                                                    currency: debt.currencyCode
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                className: "mt-4 text-sm text-neutral-300/75",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        children: "You have "
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                        className: "font-medium text-white",
                                                                        children: [
                                                                            debt.daysTillDue,
                                                                            " "
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "font-medium text-white",
                                                                        children: debt.daysTillDue === 1 ? "day " : "days "
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        children: "left to pay this off."
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                })
                                            }))
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "pb-24",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "mt-24 mb-2 text-sm font-medium text-neutral-400",
                                children: "Accounts needed extra action."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "grid grid-cols-1 gap-16 p-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 bg-neutral-700/10 rounded-xl ",
                                children: bankAccounts.map((bankAccount)=>/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                        children: bankAccount.error && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex flex-col items-start justify-center w-full grid-cols-1 px-4 py-6 transition rounded-lg bg-neutral-800 hover:shadow-md",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    className: "mb-3 text-xl text-neutral-400",
                                                    children: bankAccount.institution
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "mb-5 text-sm text-neutral-600",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: "text-neutral-400",
                                                            children: "This account requires extra attention."
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            className: "text-xs",
                                                            children: [
                                                                "Error: ",
                                                                bankAccount.error
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(components_PlaidButton, {
                                                    text: bankAccount.error == "ITEM_LOGIN_REQUIRED" && "Relogin",
                                                    customCSS: "w-full",
                                                    removeOldItem: bankAccount.id
                                                })
                                            ]
                                        }, bankAccount.error)
                                    }))
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_Overview = (Overview);

;// CONCATENATED MODULE: ./function/getAccountTransactions.js
const getAccountTransactions_https = __webpack_require__(5687);
const getAccountTransactions = async (accounts)=>{
    const accountTransactions = await Promise.all(accounts.map(async (account)=>{
        console.log(account);
        // TODO, figure out how many months is it from the current month to January. 
        let today = new Date().getMonth() + 1;
        let monthsTillJan = 0;
        while(today > 1){
            monthsTillJan += 1;
            today--;
        }
        // Get todays date
        const endDate = new Date();
        let endDateFormat = endDate.toISOString().substring(0, 10);
        // Subtract new date with monthsTillJan variable YTD transactions
        const startDate = new Date(endDate.setMonth(endDate.getMonth() - monthsTillJan));
        let startDateFormat = startDate.toISOString().substring(0, 10);
        // TODO, fetch transactions of account that was clicked
        const getTransactionsResponse = await fetch(`${process.env.DOMAIN}/api/transactions/${account.access_token}/${startDateFormat}/${endDateFormat}`, {
            method: "GET",
            agent: new getAccountTransactions_https.Agent({
                rejectUnauthorized: false
            })
        });
        const { transactions  } = await getTransactionsResponse.json();
        try {
            return transactions;
        } catch (e) {
            return e;
        }
    }));
    return accountTransactions;
};

;// CONCATENATED MODULE: ./function/verifyToken.js
const verifyToken_https = __webpack_require__(5687);
const verifyToken = async ()=>{
    const verifyToken = await fetch(`${process.env.DOMAIN}/cookie/verify`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        agent: new verifyToken_https.Agent({
            rejectUnauthorized: false
        })
    });
    console.log(verifyToken);
};

;// CONCATENATED MODULE: ./pages/user/dashboard.js


















function Home({ currentUser  }) {
    console.log(currentUser);
    const { setSignedUser , signedUser  } = (0,external_react_.useContext)(context_signedUser/* UserContext */.S);
    const { tab  } = (0,external_react_.useContext)(currentTab/* TabContext */.q);
    const { theme  } = (0,external_react_.useContext)(themePreference/* ThemeContext */.N);
    const { bankAccounts , setBankAccounts  } = (0,external_react_.useContext)(creditcards/* ItemsContext */.c);
    const { 0: loading , 1: setLoading  } = (0,external_react_.useState)(true);
    setSignedUser(currentUser);
    (0,external_react_.useEffect)(()=>{
        if (currentUser) {
            setLoading(true);
            const loader = async ()=>{
                const userAccounts = await getUserItems(currentUser.userId);
                const userAccountsInfo = await getItemInfo(userAccounts);
                const accountsLiabilities = await getAccountLiabilities(userAccounts);
                // TODO, format items, bankaccounts, and bank account liabilities into one object
                // NOTE, if theres an easier way of doing this pls redo
                let formatAccounts = [];
                // TODO, add to formatAccounts arr.
                userAccountsInfo.forEach((userAccount)=>{
                    formatAccounts.push(userAccount);
                });
                // TODO, loop accountsLiabilities
                accountsLiabilities.forEach((accountLiability)=>{
                    if (accountLiability.accounts) {
                        // TODO, loop through format accounts, and check if theres a match
                        formatAccounts.forEach((account, formatAccountIndex)=>{
                            accountLiability.liabilities?.credit?.forEach((accLiability)=>{
                                // TODO, if theres a match between account ids, get the position number
                                const pos = account.accounts?.findIndex((account)=>account.account_id === accLiability.account_id);
                                if (pos === undefined) {
                                    return;
                                }
                                // TODO, set new found information into array, positions formataccoutns using the formataccount index, and 
                                // the accounts with  the new found position
                                formatAccounts[formatAccountIndex].accounts[pos] = {
                                    ...formatAccounts[formatAccountIndex].accounts[pos],
                                    accLiability
                                };
                            });
                        });
                    }
                });
                setBankAccounts(formatAccounts);
                setLoading(false);
            };
            loader();
        }
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: loading ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "fixed inset-0 flex items-center justify-center text-white bg-neutral-900 ",
            children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "text-3xl font-bold animate-pulse",
                children: "Loading your data"
            })
        }) : /*#__PURE__*/ jsx_runtime_.jsx("main", {
            children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: `w-full h-screen mx-auto overflow-hidden ${theme === "dark" ? "bg-neutral-900" : "bg-white"}`,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "grid w-full h-full grid-cols-6",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: `flex flex-col justify-between w-full h-full p-2 rounded-tr-xl ${theme === "dark" ? "bg-neutral-800/50" : "bg-white"} rounded-br-xl sm:p-4`,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                    className: "w-full max-w-xs mt-10 ml-auto text-3xl font-semibold text-center text-white ",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: `hidden lg:block ${theme === "dark" ? "text-white" : "text-neutral-900"}`,
                                            children: "Poshly"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: `block lg:hidden ${theme === "dark" ? "text-white" : "text-neutral-900"}`,
                                            children: "M"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(UserProfile, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx(AccountsList, {})
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "relative w-full h-full col-span-5 bg-neutral-900 rounded-tl-3xl rounded-bl-3xl removeScrollbar",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "relative h-full p-10",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(components_Overview, {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx(CreditCards, {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Transactions, {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx(components_Settings, {})
                                ]
                            })
                        })
                    ]
                })
            })
        })
    });
};
const getServerSideProps = async (context)=>{
    try {
        const cookies = context.req.headers.cookie;
        // TODO, verify HTTP cookie
        const userJWT = cookies.slice(5);
        if ((0,external_jsonwebtoken_namespaceObject.verify)(userJWT, "d5302d81e8db842d83398b4cb1655adb4d3ff9c0c516794f29f07c4518ea48253284f521c67d63f34056e350a4178672f5a1771735194b5dd3e4a7e100eec3e3")) {
            return {
                props: {
                    currentUser: (0,external_jsonwebtoken_namespaceObject.decode)(userJWT)
                }
            };
        } else {
            return {
                props: {
                    currentUser: cookies
                }
            };
        }
    } catch (e) {
        return {
            props: {
                currentUser: e
            }
        };
    }
};


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 5687:
/***/ ((module) => {

module.exports = require("https");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,664,267], () => (__webpack_exec__(1312)));
module.exports = __webpack_exports__;

})();