'use strict';
(self.webpackChunkpage = self.webpackChunkpage || []).push([
  [176],
  {
    7176: function (e, t, n) {
      n.r(t);
      var s = n(2791),
        i = n(1979),
        a = n(4507),
        l = n(4830),
        r = n(9529),
        o = n(890),
        c = n(7047),
        d = n(7621),
        h = n(9504),
        u = n(1889),
        m = n(7391),
        x = n(5228),
        p = n(3896),
        Z = n(3466),
        j = n(3464),
        g = n(4454),
        b = n(6151),
        f = n(625),
        v = n(4070),
        S = n(6999),
        w = n(9593),
        P = n(9276),
        k = n(184);
      const y = /^\w+$/,
        I = (0, i.Z)({ palette: { mode: 'dark' } });
      l.Z.addLocale(w.Z);
      const $ = (e, t) => (y.test ? t : e);
      function T(e) {
        const { children: t, value: n, index: s, ...i } = e;
        return (0, k.jsx)('div', {
          role: 'tabpanel',
          hidden: n !== s,
          id: `simple-tabpanel-${s}`,
          'aria-labelledby': `simple-tab-${s}`,
          ...i,
          children:
            n === s &&
            (0, k.jsx)(P.Z, {
              sx: { p: 3 },
              children: (0, k.jsx)(o.Z, { children: t }),
            }),
        });
      }
      function C(e) {
        return {
          id: `simple-tab-${e}`,
          'aria-controls': `simple-tabpanel-${e}`,
        };
      }
      t.default = () => {
        const e = new Date();
        e.setDate(e.getDate() - 1);
        const t = e.toISOString().slice(0, 16),
          [n, i] = (0, s.useState)(''),
          [l, w] = (0, s.useState)(''),
          [P, y] = (0, s.useState)(''),
          [L, D] = (0, s.useState)(t),
          [W, A] = (0, s.useState)(!1),
          [_, F] = (0, s.useState)(!1),
          [O, U] = (0, s.useState)(!1),
          [M, z] = (0, s.useState)(!0),
          [B, N] = (0, s.useState)(!1),
          [Y, R] = (0, s.useState)(null),
          [q, H] = (0, s.useState)(null),
          [J, E] = s.useState(0);
        (0, s.useEffect)(() => {
          document.title = 'LsCo Software - ModStats';
        }, []);
        const Q = () => {
            H(null);
          },
          G = (e, t, n, s) => {
            const i = e.target.value.trim();
            t(i), n(!!i && !s.test(i));
          },
          K = Intl.DateTimeFormat().resolvedOptions().timeZone,
          V = () => {
            const e = new Date();
            return new Date(e.toLocaleString('en-US', { timeZone: K }))
              .toISOString()
              .slice(0, 16);
          },
          X = () => {
            const e = new Date();
            e.setFullYear(e.getFullYear() - 1);
            return new Date(e.toLocaleString('en-US', { timeZone: K }))
              .toISOString()
              .slice(0, 16);
          };
        return (0, k.jsxs)(s.Fragment, {
          children: [
            (0, k.jsxs)(x.Z, {
              value: J,
              onChange: (e, t) => {
                E(t);
              },
              centered: !0,
              sx: {
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                maxWidth: 400,
                margin: '0 auto',
                borderRadius: 4,
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
              },
              children: [
                (0, k.jsx)(p.Z, { label: 'Stats', ...C(0) }),
                (0, k.jsx)(p.Z, { label: 'Add Channels', ...C(1) }),
              ],
            }),
            (0, k.jsx)(T, {
              value: J,
              index: 0,
              children: (0, k.jsx)(S.Z, {
                title: 'Twitch ModStats',
                description:
                  "You can request the channel moderator's statistics.",
                children: (0, k.jsxs)(u.ZP, {
                  container: !0,
                  spacing: 3,
                  children: [
                    (0, k.jsx)(u.ZP, {
                      item: !0,
                      xs: 12,
                      sm: 4,
                      children: (0, k.jsx)(a.Z, {
                        theme: I,
                        children: (0, k.jsx)(m.Z, {
                          fullWidth: !0,
                          autoFocus: !0,
                          id: 'channel-input',
                          label: 'Channel',
                          type: 'text',
                          variant: 'outlined',
                          placeholder: 'channel',
                          helperText: W
                            ? n.trim() && !/^(?!_)\w+$/.test(n)
                              ? "The channel doesn't conform to the pattern."
                              : W
                            : 'Tracked channel',
                          InputLabelProps: { shrink: !0 },
                          value: n,
                          required: !0,
                          onChange: (e) => G(e, i, A, /^(?!_)\w+$/),
                          error: W,
                        }),
                      }),
                    }),
                    (0, k.jsx)(u.ZP, {
                      item: !0,
                      xs: 12,
                      sm: 4,
                      children: (0, k.jsx)(a.Z, {
                        theme: I,
                        children: (0, k.jsx)(m.Z, {
                          fullWidth: !0,
                          id: 'channel-input',
                          label: 'User',
                          type: 'text',
                          variant: 'outlined',
                          placeholder: 'Moderator',
                          helperText: O
                            ? P.trim() && !/^(?!_)\w+$/.test(P)
                              ? "The user doesn't conform to the pattern."
                              : O
                            : 'Channel Moderator',
                          InputLabelProps: { shrink: !0 },
                          value: P,
                          onChange: (e) => G(e, y, U, /^(?!_)\w+$/),
                          error: O,
                        }),
                      }),
                    }),
                    (0, k.jsx)(u.ZP, {
                      item: !0,
                      xs: 12,
                      sm: 4,
                      children: (0, k.jsxs)(a.Z, {
                        theme: I,
                        children: [
                          (0, k.jsx)(m.Z, {
                            fullWidth: !0,
                            id: 'time-input',
                            type: 'datetime-local',
                            variant: 'outlined',
                            disabled: M,
                            value: L,
                            onChange: (e) => {
                              const t = e.target.value;
                              D(t), N(!1), (t < X() || t > V()) && N(!0);
                            },
                            inputProps: {
                              min: X().slice(0, 10),
                              max: V().slice(0, 10),
                            },
                            InputProps: {
                              startAdornment: (0, k.jsx)(Z.Z, {
                                position: 'start',
                                children: (() => {
                                  const e =
                                    Intl.DateTimeFormat().resolvedOptions()
                                      .timeZone;
                                  return Intl.DateTimeFormat('en-US', {
                                    timeZoneName: 'short',
                                    timeZone: e,
                                  })
                                    .format(new Date())
                                    .split(', ')[1];
                                })(),
                              }),
                            },
                            error: B,
                            helperText: B ? 'Invalid time' : null,
                          }),
                          (0, k.jsx)(j.Z, {
                            sx: { m: 1 },
                            control: (0, k.jsx)(g.Z, {
                              checked: !M,
                              onChange: () => {
                                z((e) => !e);
                              },
                              size: 'small',
                            }),
                            label: 'Statistics start',
                          }),
                        ],
                      }),
                    }),
                    Y && (0, k.jsx)(u.ZP, { item: !0, xs: 12, children: Y }),
                    (0, k.jsx)(u.ZP, {
                      item: !0,
                      xs: 12,
                      children: (0, k.jsx)(b.Z, {
                        variant: 'contained',
                        fullWidth: !0,
                        onClick: async () => {
                          let e = !1;
                          const t = { channel: !1, user: !1, time: !1 };
                          if (
                            ((n && !W) ||
                              (n
                                ? /^(?!_)\w+$/.test(n) ||
                                  (t.channel =
                                    "The channel doesn't conform to the pattern.")
                                : (t.channel = 'Channel must be specified'),
                              (e = !0)),
                            O &&
                              (/^(?!_)\w+$/.test(P) ||
                                (t.user =
                                  "The user doesn't conform to the pattern."),
                              (e = !0)),
                            M ||
                              ((B || L < X() || L > V()) &&
                                ((t.time = !0), (e = !0))),
                            e)
                          )
                            return A(t.channel), U(t.user), void N(t.time);
                          if (!localStorage.getItem('login'))
                            return (
                              R(null),
                              void H(
                                "You must verify your Twitch account. Click on 'Log In' Button"
                              )
                            );
                          R(
                            (0, k.jsx)(c.Z, {
                              variant: 'rounded',
                              animation: 'pulse',
                              width: '100%',
                              height: 25,
                            })
                          );
                          const s = await fetch(
                              `https://api.devlsco.github.io/modstats/${n}${
                                P ? `/${P}` : ''
                              }${
                                M ? '' : `?time=${new Date(L).toISOString()}`
                              }`,
                              {
                                headers: {
                                  Authorization: `${
                                    JSON.parse(localStorage.getItem('login'))
                                      .access_token
                                  }`,
                                },
                              }
                            ),
                            i = await (null === s || void 0 === s
                              ? void 0
                              : s.json());
                          if (!s.ok)
                            return (
                              R(null),
                              H(
                                i.message ||
                                  'An error occurred while fetching the API. Try again later'
                              )
                            );
                          R(
                            (0, k.jsx)(k.Fragment, {
                              children: (0, k.jsx)(d.Z, {
                                raised: !0,
                                children: (0, k.jsxs)(h.Z, {
                                  children: [
                                    (0, k.jsxs)(o.Z, {
                                      sx: { fontSize: 14, mb: 2.5 },
                                      color: 'text.main',
                                      gutterBottom: !0,
                                      children: [
                                        'All statistics by ',
                                        i.user
                                          ? $(i.user.login, i.user.displayName)
                                          : 'all mods',
                                        ' in #',
                                        $(
                                          i.channel.login,
                                          i.channel.displayName
                                        ),
                                        ' since',
                                        ' ',
                                        'Beginning' === i.time
                                          ? i.time
                                          : (0, k.jsx)(r.Z, {
                                              date: new Date(i.time),
                                              locale: 'en-US',
                                            }),
                                        '.',
                                      ],
                                    }),
                                    (0, k.jsx)(a.Z, {
                                      theme: I,
                                      children: (0, k.jsxs)(u.ZP, {
                                        container: !0,
                                        spacing: 4,
                                        alignItems: 'center',
                                        children: [
                                          (0, k.jsx)(u.ZP, {
                                            item: !0,
                                            xs: 12,
                                            sm: 6,
                                            children: (0, k.jsx)(m.Z, {
                                              fullWidth: !0,
                                              label: 'Bans',
                                              type: 'text',
                                              variant: 'outlined',
                                              InputLabelProps: { shrink: !0 },
                                              value: i.actions.bans,
                                              disabled: !0,
                                            }),
                                          }),
                                          (0, k.jsx)(u.ZP, {
                                            item: !0,
                                            xs: 12,
                                            sm: 6,
                                            children: (0, k.jsx)(m.Z, {
                                              fullWidth: !0,
                                              label: 'Unbans',
                                              type: 'text',
                                              variant: 'outlined',
                                              InputLabelProps: { shrink: !0 },
                                              value: i.actions.unbans,
                                              disabled: !0,
                                            }),
                                          }),
                                          (0, k.jsx)(u.ZP, {
                                            item: !0,
                                            xs: 12,
                                            sm: 4,
                                            children: (0, k.jsx)(m.Z, {
                                              fullWidth: !0,
                                              label: 'Timeouts',
                                              type: 'text',
                                              variant: 'outlined',
                                              InputLabelProps: { shrink: !0 },
                                              value: i.actions.timeouts,
                                              disabled: !0,
                                            }),
                                          }),
                                          (0, k.jsx)(u.ZP, {
                                            item: !0,
                                            xs: 12,
                                            sm: 4,
                                            children: (0, k.jsx)(m.Z, {
                                              fullWidth: !0,
                                              label: 'Untimeouts',
                                              type: 'text',
                                              variant: 'outlined',
                                              InputLabelProps: { shrink: !0 },
                                              value: i.actions.untimeouts,
                                              disabled: !0,
                                            }),
                                          }),
                                          (0, k.jsx)(u.ZP, {
                                            item: !0,
                                            xs: 12,
                                            sm: 4,
                                            children: (0, k.jsx)(m.Z, {
                                              fullWidth: !0,
                                              label: 'Deletes',
                                              type: 'text',
                                              variant: 'outlined',
                                              InputLabelProps: { shrink: !0 },
                                              value: i.actions.deletes,
                                              disabled: !0,
                                            }),
                                          }),
                                          (0, k.jsx)(u.ZP, {
                                            item: !0,
                                            xs: 12,
                                            sm: 12,
                                            children: (0, k.jsx)(m.Z, {
                                              fullWidth: !0,
                                              label: 'Total',
                                              type: 'text',
                                              variant: 'outlined',
                                              InputLabelProps: { shrink: !0 },
                                              value: i.actions.total,
                                              disabled: !0,
                                            }),
                                          }),
                                          i.rank &&
                                            (0, k.jsxs)(u.ZP, {
                                              item: !0,
                                              xs: 12,
                                              sm: 12,
                                              children: ['Mod Rank: ', i.rank],
                                            }),
                                          i.ranking &&
                                            (0, k.jsx)(u.ZP, {
                                              item: !0,
                                              xs: 12,
                                              sm: 12,
                                              children: (0, k.jsx)(m.Z, {
                                                fullWidth: !0,
                                                multiline: !0,
                                                rows: 10,
                                                label: 'Mod Ranking',
                                                type: 'text',
                                                variant: 'outlined',
                                                InputLabelProps: { shrink: !0 },
                                                value: i.ranking
                                                  .map(
                                                    (e, t) =>
                                                      `${t + 1}.${
                                                        t + 1 < 10 ? '  ' : ''
                                                      } ${e.name}: ${
                                                        e.modActions
                                                      }`
                                                  )
                                                  .join('\n'),
                                                disabled: !0,
                                              }),
                                            }),
                                          i.last_action &&
                                            (0, k.jsxs)(u.ZP, {
                                              item: !0,
                                              xs: 12,
                                              sm: 12,
                                              children: [
                                                'Last Action: ',
                                                (0, k.jsx)(r.Z, {
                                                  date: new Date(i.last_action),
                                                  locale: 'en-US',
                                                }),
                                              ],
                                            }),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            })
                          );
                        },
                        children: 'Queries',
                      }),
                    }),
                  ],
                }),
              }),
            }),
            (0, k.jsx)(T, {
              value: J,
              index: 1,
              children: (0, k.jsx)(S.Z, {
                title: 'Twitch ModStats',
                description: 'Here you can add a new channel.',
                children: (0, k.jsxs)(u.ZP, {
                  container: !0,
                  spacing: 3,
                  children: [
                    (0, k.jsx)(u.ZP, {
                      item: !0,
                      xs: 12,
                      children: (0, k.jsx)(a.Z, {
                        theme: I,
                        children: (0, k.jsx)(m.Z, {
                          fullWidth: !0,
                          autoFocus: !0,
                          id: 'channel-input',
                          label: 'Add Channel',
                          type: 'text',
                          variant: 'outlined',
                          placeholder: 'channel',
                          helperText: _
                            ? l.trim() && !/^(?!_)\w+$/.test(l)
                              ? "The channel doesn't conform to the pattern."
                              : _
                            : '',
                          InputLabelProps: { shrink: !0 },
                          value: l,
                          onChange: (e) => G(e, w, F, /^(?!_)\w+$/),
                          error: _,
                        }),
                      }),
                    }),
                    (0, k.jsx)(u.ZP, {
                      item: !0,
                      xs: 12,
                      children: (0, k.jsx)(b.Z, {
                        variant: 'contained',
                        fullWidth: !0,
                        onClick: async () => {
                          let e = !1;
                          const t = { channel: !1 };
                          if (
                            ((l && !_) ||
                              (l
                                ? /^(?!_)\w+$/.test(l) ||
                                  (t.channel =
                                    "The channel doesn't conform to the pattern.")
                                : (t.channel = 'Channel must be specified'),
                              (e = !0)),
                            e)
                          )
                            return void F(t.channel);
                          if (!localStorage.getItem('login'))
                            return (
                              R(null),
                              void H(
                                "You must verify your Twitch account. Click on 'Log In' Button"
                              )
                            );
                          R(
                            (0, k.jsx)(c.Z, {
                              variant: 'rounded',
                              animation: 'pulse',
                              width: '100%',
                              height: 25,
                            })
                          );
                          const n = await fetch(
                              `https://api.devlsco.github.io/modstats/${l}`,
                              {
                                method: 'POST',
                                headers: {
                                  Authorization: `${
                                    JSON.parse(localStorage.getItem('login'))
                                      .access_token
                                  }`,
                                },
                              }
                            ),
                            s = await (null === n || void 0 === n
                              ? void 0
                              : n.json());
                          if (!n.ok)
                            return (
                              R(null),
                              H(
                                s.message ||
                                  'An error occurred while fetching the API. Try again later'
                              )
                            );
                          R(
                            (0, k.jsx)(o.Z, {
                              children:
                                'The channel has been added successfully.',
                            })
                          );
                        },
                        children: 'Add',
                      }),
                    }),
                    (0, k.jsx)(u.ZP, {
                      item: !0,
                      xs: 12,
                      children:
                        Y &&
                        (0, k.jsx)(u.ZP, { item: !0, xs: 12, children: Y }),
                    }),
                  ],
                }),
              }),
            }),
            (0, k.jsx)(a.Z, {
              theme: I,
              children: (0, k.jsx)(f.Z, {
                open: q,
                autoHideDuration: 5e3,
                onClose: Q,
                children: (0, k.jsx)(v.Z, {
                  onClose: Q,
                  severity: 'error',
                  sx: { width: '100%' },
                  children: q,
                }),
              }),
            }),
          ],
        });
      };
    },
    9276: function (e, t, n) {
      const s = (0, n(3814).Z)();
      t.Z = s;
    },
  },
]);
//# sourceMappingURL=176.cf8001e2.chunk.js.map
