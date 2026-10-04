"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var link_1 = require("next/link");
var Mainnews = function (_a) {
    var news = _a.news;
    var mainNews = news[0], othersNews = news.slice(1);
    // If there is no news
    if (!mainNews) {
        return (React.createElement("div", { className: "text-center py-10" },
            React.createElement("p", { className: "text-base-content/60" }, "No news available.")));
    }
    return (React.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-4 mt-5 mx-auto" },
        React.createElement("div", { className: "lg:col-span-2 card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 border border-base-200 rounded-2xl overflow-hidden group" },
            React.createElement(link_1["default"], { href: "/news/" + mainNews.id },
                React.createElement("figure", { className: "relative h-64 sm:h-80 w-full overflow-hidden bg-base-200" },
                    React.createElement(image_1["default"], { src: mainNews.imageUrl, alt: mainNews.imageAlt ||
                            mainNews.title ||
                            'Main news image', fill: true, className: "object-cover group-hover:scale-105 transition-transform duration-500 ease-out", priority: true })),
                React.createElement("div", { className: "card-body p-6 gap-3" },
                    React.createElement("div", null,
                        React.createElement("span", { className: "inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider text-red-500 bg-red-50 rounded-full" }, mainNews.category)),
                    React.createElement("h2", { className: "card-title text-2xl font-bold text-base-content group-hover:text-red-500 transition-colors duration-200 line-clamp-2 leading-snug" }, mainNews.title),
                    React.createElement("p", { className: "text-sm text-base-content/70 line-clamp-3 leading-relaxed" }, mainNews.description)))),
        React.createElement("div", { className: "flex flex-col divide-y divide-base-200 bg-base-100 p-4 border border-base-200 rounded-2xl shadow-sm" },
            React.createElement("h3", { className: "text-lg font-bold pb-3 text-base-content border-b border-base-200" }, "Top Stories"),
            React.createElement("div", { className: "divide-y divide-base-200" }, othersNews.slice(0, 5).map(function (post) { return (React.createElement(link_1["default"], { key: post.id, href: "/news/" + post.id, className: "block" },
                React.createElement("div", { className: "py-4 first:pt-3 last:pb-0 group/item cursor-pointer" },
                    React.createElement("span", { className: "inline-block px-2.5 py-0.5 mb-2 text-[10px] font-bold uppercase tracking-wider text-red-500 bg-red-50 rounded-full" }, post.category),
                    React.createElement("h4", { className: "text-base font-semibold text-base-content group-hover/item:text-red-500 transition-colors duration-200 line-clamp-2 leading-snug" }, post.title)))); })))));
};
exports["default"] = Mainnews;
