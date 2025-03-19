"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
    [940],
    {
        5480: (e, t, n) => {
            n.r(t),
                n.d(t, {
                    assets: () => d,
                    contentTitle: () => c,
                    default: () => p,
                    frontMatter: () => i,
                    metadata: () => r,
                    toc: () => a,
                });
            const r = JSON.parse(
                '{"id":"developers/intro","title":"Starter guide","description":"Let\'s discover open weather vision in a few minutes!","source":"@site/docs/developers/intro.md","sourceDirName":"developers","slug":"/developers/intro","permalink":"/docs/docs/developers/intro","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"developersSidebar"}'
            );
            var s = n(4848),
                o = n(8453);
            const i = { sidebar_position: 1 },
                c = "Starter guide",
                d = {},
                a = [];
            function u(e) {
                const t = {
                    h1: "h1",
                    header: "header",
                    p: "p",
                    strong: "strong",
                    ...(0, o.R)(),
                    ...e.components,
                };
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsx)(t.header, {
                            children: (0, s.jsx)(t.h1, {
                                id: "starter-guide",
                                children: "Starter guide",
                            }),
                        }),
                        "\n",
                        (0, s.jsxs)(t.p, {
                            children: [
                                "Let's discover ",
                                (0, s.jsx)(t.strong, {
                                    children: "open weather vision",
                                }),
                                " in a few minutes!",
                            ],
                        }),
                    ],
                });
            }
            function p(e = {}) {
                const { wrapper: t } = { ...(0, o.R)(), ...e.components };
                return t
                    ? (0, s.jsx)(t, { ...e, children: (0, s.jsx)(u, { ...e }) })
                    : u(e);
            }
        },
        8453: (e, t, n) => {
            n.d(t, { R: () => i, x: () => c });
            var r = n(6540);
            const s = {},
                o = r.createContext(s);
            function i(e) {
                const t = r.useContext(o);
                return r.useMemo(
                    function () {
                        return "function" == typeof e ? e(t) : { ...t, ...e };
                    },
                    [t, e]
                );
            }
            function c(e) {
                let t;
                return (
                    (t = e.disableParentContext
                        ? "function" == typeof e.components
                            ? e.components(s)
                            : e.components || s
                        : i(e.components)),
                    r.createElement(o.Provider, { value: t }, e.children)
                );
            }
        },
    },
]);
