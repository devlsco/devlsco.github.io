(self.webpackChunkpage = self.webpackChunkpage || []).push([
  [235],
  {
    8823: function (e, t, n) {
      'use strict';
      n.r(t);
      var i = n(2791),
        a = n(1484),
        r = n(1979),
        l = n(4507),
        s = n(890),
        o = n(1889),
        u = n(8096),
        c = n(7133),
        d = n(765),
        g = n(3464),
        h = n(1419),
        m = n(7391),
        v = n(3466),
        x = n(6377),
        p = n(8870),
        b = n(3044),
        w = n(7047),
        f = n(6151),
        j = n(6999),
        Z = n(1223),
        y = n.n(Z),
        S = n(184);
      const N = (0, r.Z)({ palette: { mode: 'dark' } }),
        I = new (y().Client)({});
      I.connect();
      const C = [
        '62809083',
        '19264788',
        '711348782',
        '100135110',
        '237719657',
        '1564983',
        '46209051',
        '105166207',
      ];
      function k(e, t) {
        if (t >= e.length) return e;
        const n = e.slice();
        let i = e.length;
        for (; i > 0; ) {
          const e = Math.floor(Math.random() * i);
          i--;
          const t = n[i];
          (n[i] = n[e]), (n[e] = t);
        }
        return n.slice(0, t);
      }
      t.default = () => {
        const [e, t] = (0, i.useState)([]),
          [n, r] = (0, i.useState)({
            name: localStorage.getItem('login')
              ? JSON.parse(localStorage.getItem('login')).login
              : '',
            login: localStorage.getItem('login')
              ? JSON.parse(localStorage.getItem('login')).login
              : '',
            id: localStorage.getItem('login')
              ? JSON.parse(localStorage.getItem('login')).id
              : null,
            avatarUrl: localStorage.getItem('login')
              ? JSON.parse(localStorage.getItem('login')).profile_image_url
              : null,
          }),
          [Z, y] = (0, i.useState)('active-users'),
          [P, T] = (0, i.useState)(1),
          [A, O] = (0, i.useState)(5),
          [$, _] = (0, i.useState)((0, a.R_)({ minLength: 10 })),
          [L, E] = (0, i.useState)(null),
          [J, R] = (0, i.useState)(null),
          [U, F] = (0, i.useState)([]),
          [W, D] = (0, i.useState)(!1);
        return (
          (0, i.useEffect)(() => {
            !1 === W && I.removeAllListeners();
          }, [W]),
          (0, i.useEffect)(() => {
            (document.title = 'LsCo Software - Giveaways'),
              localStorage.getItem('login') ||
                (E('Log in to get started.'), R(null));
          }, []),
          (0, i.useEffect)(() => {
            !(async function () {
              if (W) {
                if (!localStorage.getItem('login'))
                  return E(null), D(!1), void R('Log in to get started.');
                if (!n.id)
                  return E(null), D(!1), void R('You must specify a channel.');
                if (
                  isNaN(A) ||
                  !(
                    Number.isInteger(Number(A)) &&
                    Number(A) >= 1 &&
                    Number(A) <= 10
                  )
                )
                  return (
                    E(null),
                    D(!1),
                    void R(
                      "The value for 'Active Timeout' must be an integer between 1 and 10."
                    )
                  );
                if (
                  !(
                    Number.isInteger(Number(P)) &&
                    Number(P) >= 1 &&
                    Number(P) <= 50
                  )
                )
                  return (
                    E(null),
                    D(!1),
                    void R(
                      "The value for 'Draw Users' must be an integer between 1 and 50."
                    )
                  );
                if (!$.trim().length)
                  return (
                    E(null), D(!1), void R('You have not entered a keyword.')
                  );
                R(null),
                  E(
                    `${
                      [...new Set(U.map((e) => e['user-id']))].length
                    } Chatters logged in`
                  );
              }
            })();
          }, [U, W, A, n, P, $]),
          (0, S.jsx)(j.Z, {
            title: 'Giveaways',
            description: 'Reward viewers of any channel with giveaways.',
            children: (0, S.jsxs)(o.ZP, {
              container: !0,
              spacing: 2,
              alignItems: 'stretch',
              children: [
                (0, S.jsx)(o.ZP, {
                  item: !0,
                  xs: 12,
                  sm: 8,
                  children: (0, S.jsxs)(o.ZP, {
                    container: !0,
                    spacing: 2,
                    alignItems: 'center',
                    children: [
                      (0, S.jsx)(o.ZP, {
                        item: !0,
                        xs: 4,
                        children: (0, S.jsxs)(u.Z, {
                          children: [
                            (0, S.jsx)(c.Z, {
                              id: 'giveaway-type-label',
                              children: 'Giveaway Type',
                            }),
                            (0, S.jsxs)(d.Z, {
                              row: !0,
                              'aria-labelledby': 'giveaway-type-label',
                              name: 'giveaway-type',
                              value: Z,
                              onChange: (e) => {
                                y(e.target.value);
                              },
                              children: [
                                (0, S.jsx)(g.Z, {
                                  value: 'active-users',
                                  control: (0, S.jsx)(h.Z, {}),
                                  label: 'Active Chatter',
                                }),
                                (0, S.jsx)(g.Z, {
                                  value: 'keyword',
                                  control: (0, S.jsx)(h.Z, {}),
                                  label: 'Keyword',
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, S.jsxs)(o.ZP, {
                        item: !0,
                        xs: 8,
                        children: [
                          J &&
                            (0, S.jsx)(s.Z, {
                              variant: 'body2',
                              style: { color: 'red', textAlign: 'center' },
                              children: J,
                            }),
                          L &&
                            (0, S.jsx)(s.Z, {
                              variant: 'body2',
                              style: { textAlign: 'center' },
                              children: L,
                            }),
                        ],
                      }),
                      (0, S.jsxs)(l.Z, {
                        theme: N,
                        children: [
                          (0, S.jsxs)(o.ZP, {
                            item: !0,
                            xs: 12,
                            children: [
                              (0, S.jsxs)(c.Z, {
                                component: 'h2',
                                children: ['Number of winners: ', Number(P)],
                              }),
                              (0, S.jsx)(m.Z, {
                                autoFocus: !0,
                                fullWidth: !0,
                                type: 'number',
                                id: 'winners-number',
                                value: P,
                                onChange: (e) => T(e.target.value),
                                InputProps: {
                                  startAdornment: (0, S.jsx)(v.Z, {
                                    position: 'start',
                                    children: 'Draw users',
                                  }),
                                },
                                variant: 'outlined',
                              }),
                            ],
                          }),
                          (0, S.jsxs)(o.ZP, {
                            item: !0,
                            xs: 12,
                            children: [
                              (0, S.jsxs)(c.Z, {
                                component: 'h2',
                                children: [
                                  'Eligible active users within the past ',
                                  Number(A),
                                  ' minute(s) to win',
                                ],
                              }),
                              (0, S.jsx)(m.Z, {
                                autoFocus: !0,
                                fullWidth: !0,
                                type: 'number',
                                id: 'active-users-timeout',
                                value: A,
                                onChange: (e) => O(e.target.value),
                                InputProps: {
                                  startAdornment: (0, S.jsx)(v.Z, {
                                    position: 'start',
                                    children: 'Active Timeout',
                                  }),
                                },
                                variant: 'outlined',
                              }),
                            ],
                          }),
                          (0, S.jsx)(o.ZP, {
                            item: !0,
                            xs: 12,
                            children:
                              'keyword' === Z &&
                              (0, S.jsxs)(S.Fragment, {
                                children: [
                                  (0, S.jsx)(c.Z, {
                                    component: 'h2',
                                    children:
                                      'Keyword for eligibility (case insensitive)',
                                  }),
                                  (0, S.jsx)(m.Z, {
                                    fullWidth: !0,
                                    autoFocus: !0,
                                    id: 'keyword-input',
                                    value: $,
                                    onChange: (e) => _(e.target.value),
                                    InputProps: {
                                      startAdornment: (0, S.jsx)(v.Z, {
                                        position: 'start',
                                        children: 'Keyword',
                                      }),
                                    },
                                    variant: 'outlined',
                                  }),
                                ],
                              }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, S.jsx)(o.ZP, {
                  item: !0,
                  xs: 12,
                  sm: 4,
                  children: (0, S.jsxs)(o.ZP, {
                    container: !0,
                    spacing: 2,
                    children: [
                      (0, S.jsx)(o.ZP, {
                        item: !0,
                        xs: 12,
                        sm: 12,
                        children: (0, S.jsx)(l.Z, {
                          theme: N,
                          children: (0, S.jsx)(x.Z, {
                            options: e,
                            value: n,
                            getOptionLabel: (e) => e.name,
                            isOptionEqualToValue: (e, t) => e.name === t.name,
                            onChange: (e, t) => {
                              r(t);
                            },
                            renderInput: (e) =>
                              (0, S.jsx)(m.Z, {
                                ...e,
                                fullWidth: !0,
                                id: 'channel-input',
                                label: 'Channel',
                                variant: 'outlined',
                                onChange: (e) => {
                                  (async (e) => {
                                    if (!localStorage.getItem('login'))
                                      return t([]);
                                    if ('' !== e.trim())
                                      try {
                                        const n = await fetch(
                                          `https://api.twitch.tv/helix/search/channels?query=${e}&first=25`,
                                          {
                                            headers: {
                                              Authorization: `Bearer ${
                                                JSON.parse(
                                                  localStorage.getItem('login')
                                                ).access_token
                                              }`,
                                              'Client-ID': JSON.parse(
                                                localStorage.getItem('login')
                                              ).client_id,
                                            },
                                          }
                                        );
                                        if (n.ok) {
                                          const e = await n.json();
                                          t(
                                            e.data.map((e) => ({
                                              name: e.display_name,
                                              login: e.broadcaster_login,
                                              id: e.id,
                                              avatarUrl:
                                                e.thumbnail_url.replace(
                                                  '300x300',
                                                  '50x50'
                                                ),
                                            }))
                                          );
                                        } else t([]);
                                      } catch (n) {
                                        console.error(n), t([]);
                                      }
                                    else t([]);
                                  })(e.target.value);
                                },
                              }),
                            renderOption: (e, t) =>
                              (0, S.jsx)('li', {
                                ...e,
                                children: (0, S.jsxs)(p.Z, {
                                  display: 'flex',
                                  alignItems: 'center',
                                  children: [
                                    (0, S.jsx)(b.Z, {
                                      src: t.avatarUrl,
                                      alt: t.name,
                                      sx: {
                                        width: 25,
                                        height: 25,
                                        marginRight: 1,
                                      },
                                    }),
                                    t.name,
                                  ],
                                }),
                              }),
                          }),
                        }),
                      }),
                      (0, S.jsx)(o.ZP, {
                        item: !0,
                        xs: 12,
                        sm: 12,
                        children: n
                          ? (0, S.jsx)('iframe', {
                              style: {
                                backgroundColor: 'transparent',
                                border: '0px solid',
                                width: '100%',
                                height: '400px',
                                borderRadius: '5px',
                              },
                              id: 'twitch-chat-embed',
                              title: 'Twitch Chat',
                              src: `https://www.twitch.tv/embed/${n.login}/chat?darkpopout&parent=devlsco.github.io`,
                            })
                          : (0, S.jsx)(w.Z, {
                              variant: 'rounded',
                              width: '100%',
                              height: 400,
                            }),
                      }),
                      (0, S.jsx)(o.ZP, {
                        item: !0,
                        xs: 12,
                        sm: 12,
                        children: (0, S.jsx)(f.Z, {
                          fullWidth: !0,
                          variant: 'outlined',
                          onClick: async () =>
                            W
                              ? (I.getChannels().includes(n.login) &&
                                  (await I.part(n.login)),
                                U.length < 1
                                  ? (E(null),
                                    D(!1),
                                    void R('No user has registered.'))
                                  : (D(!1),
                                    E(
                                      (0, S.jsxs)(i.Fragment, {
                                        children: [
                                          (0, S.jsxs)(s.Z, {
                                            variant: 'h4',
                                            children: [
                                              'Giveaway ended - ',
                                              P,
                                              ' user(s) won!',
                                            ],
                                          }),
                                          (0, S.jsx)('br', {}),
                                          (0, S.jsxs)(s.Z, {
                                            variant: 'h4',
                                            children: [
                                              'Users:',
                                              ' ',
                                              k(
                                                [
                                                  ...new Set(
                                                    U.map((e) => e.username)
                                                  ),
                                                ],
                                                P
                                              )
                                                .map((e, t) => `${t + 1}. ${e}`)
                                                .join(', '),
                                            ],
                                          }),
                                        ],
                                      })
                                    ),
                                    F([]),
                                    void R(null)))
                              : localStorage.getItem('login')
                              ? n.id
                                ? isNaN(A) ||
                                  !(
                                    Number.isInteger(Number(A)) &&
                                    Number(A) >= 1 &&
                                    Number(A) <= 10
                                  )
                                  ? (E(null),
                                    D(!1),
                                    void R(
                                      "The value for 'Active Timeout' must be an integer between 1 and 10."
                                    ))
                                  : Number.isInteger(Number(P)) &&
                                    Number(P) >= 1 &&
                                    Number(P) <= 50
                                  ? $.trim().length
                                    ? (F([]),
                                      I.getChannels().includes(n.login) ||
                                        (await I.join(n.login)),
                                      I.on('message', (e, t, i) => {
                                        const a = new RegExp(
                                          `(?<!\\S)(${$})(?!\\S)`
                                        );
                                        if (
                                          !C.includes(t['user-id']) &&
                                          !t.username.match(/^.+bot$/i) &&
                                          t['room-id'] === n.id
                                        )
                                          switch (Z) {
                                            case 'active-users':
                                              return (
                                                F((e) => [...e, t]),
                                                void setTimeout(() => {
                                                  F((e) =>
                                                    e.filter(
                                                      (e) => e.id !== t.id
                                                    )
                                                  );
                                                }, 6e4 * Number(A))
                                              );
                                            case 'keyword':
                                              if (!a.test(i)) return;
                                              return void (
                                                a.test(i) &&
                                                (F((e) => [...e, t]),
                                                setTimeout(() => {
                                                  F((e) =>
                                                    e.filter(
                                                      (e) => e.id !== t.id
                                                    )
                                                  );
                                                }, 6e4 * Number(A)))
                                              );
                                            default:
                                              return;
                                          }
                                      }),
                                      void D(!0))
                                    : (E(null),
                                      D(!1),
                                      void R('You have not entered a keyword.'))
                                  : (E(null),
                                    D(!1),
                                    void R(
                                      "The value for 'Draw Users' must be an integer between 1 and 50."
                                    ))
                                : (E(null),
                                  D(!1),
                                  void R('You must specify a channel.'))
                              : (E(null),
                                D(!1),
                                void R('Log in to get started.')),
                          children: W ? 'Roll it!' : 'Start',
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          })
        );
      };
    },
    5042: function () {},
    2604: function () {},
    8726: function () {},
  },
]);
//# sourceMappingURL=235.ba9c3f09.chunk.js.map
