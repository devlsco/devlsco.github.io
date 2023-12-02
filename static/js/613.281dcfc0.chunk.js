'use strict';
(self.webpackChunkpage = self.webpackChunkpage || []).push([
  [613],
  {
    9613: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return de;
          },
        });
      var i = n(1979),
        a = n(4507),
        o = n(6999),
        r = n(2791),
        s = n(4830),
        l = n(9529),
        d = n(8870),
        c = n(4708),
        u = n(493),
        h = n(3366),
        m = n(7462),
        p = n(8182),
        g = n(4419),
        x = n(8092),
        f = n(2065),
        Z = n(7630),
        v = n(3736),
        j = n(533),
        b = n(9103),
        w = n(162),
        y = n(2071),
        S = n(6199),
        I = n(5878),
        C = n(1217);
      function P(e) {
        return (0, C.Z)('MuiListItem', e);
      }
      var A = (0, I.Z)('MuiListItem', [
          'root',
          'container',
          'focusVisible',
          'dense',
          'alignItemsFlexStart',
          'disabled',
          'divider',
          'gutters',
          'padding',
          'button',
          'secondaryAction',
          'selected',
        ]),
        k = n(4065);
      function N(e) {
        return (0, C.Z)('MuiListItemSecondaryAction', e);
      }
      (0, I.Z)('MuiListItemSecondaryAction', ['root', 'disableGutters']);
      var L = n(184);
      const $ = ['className'],
        O = (0, Z.ZP)('div', {
          name: 'MuiListItemSecondaryAction',
          slot: 'Root',
          overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [t.root, n.disableGutters && t.disableGutters];
          },
        })((e) => {
          let { ownerState: t } = e;
          return (0, m.Z)(
            {
              position: 'absolute',
              right: 16,
              top: '50%',
              transform: 'translateY(-50%)',
            },
            t.disableGutters && { right: 0 }
          );
        }),
        R = r.forwardRef(function (e, t) {
          const n = (0, v.Z)({ props: e, name: 'MuiListItemSecondaryAction' }),
            { className: i } = n,
            a = (0, h.Z)(n, $),
            o = r.useContext(S.Z),
            s = (0, m.Z)({}, n, { disableGutters: o.disableGutters }),
            l = ((e) => {
              const { disableGutters: t, classes: n } = e,
                i = { root: ['root', t && 'disableGutters'] };
              return (0, g.Z)(i, N, n);
            })(s);
          return (0,
          L.jsx)(O, (0, m.Z)({ className: (0, p.Z)(l.root, i), ownerState: s, ref: t }, a));
        });
      R.muiName = 'ListItemSecondaryAction';
      var D = R;
      const F = ['className'],
        _ = [
          'alignItems',
          'autoFocus',
          'button',
          'children',
          'className',
          'component',
          'components',
          'componentsProps',
          'ContainerComponent',
          'ContainerProps',
          'dense',
          'disabled',
          'disableGutters',
          'disablePadding',
          'divider',
          'focusVisibleClassName',
          'secondaryAction',
          'selected',
          'slotProps',
          'slots',
        ],
        z = (0, Z.ZP)('div', {
          name: 'MuiListItem',
          slot: 'Root',
          overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [
              t.root,
              n.dense && t.dense,
              'flex-start' === n.alignItems && t.alignItemsFlexStart,
              n.divider && t.divider,
              !n.disableGutters && t.gutters,
              !n.disablePadding && t.padding,
              n.button && t.button,
              n.hasSecondaryAction && t.secondaryAction,
            ];
          },
        })((e) => {
          let { theme: t, ownerState: n } = e;
          return (0, m.Z)(
            {
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              position: 'relative',
              textDecoration: 'none',
              width: '100%',
              boxSizing: 'border-box',
              textAlign: 'left',
            },
            !n.disablePadding &&
              (0, m.Z)(
                { paddingTop: 8, paddingBottom: 8 },
                n.dense && { paddingTop: 4, paddingBottom: 4 },
                !n.disableGutters && { paddingLeft: 16, paddingRight: 16 },
                !!n.secondaryAction && { paddingRight: 48 }
              ),
            !!n.secondaryAction && {
              [`& > .${k.Z.root}`]: { paddingRight: 48 },
            },
            {
              [`&.${A.focusVisible}`]: {
                backgroundColor: (t.vars || t).palette.action.focus,
              },
              [`&.${A.selected}`]: {
                backgroundColor: t.vars
                  ? `rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`
                  : (0, f.Fq)(
                      t.palette.primary.main,
                      t.palette.action.selectedOpacity
                    ),
                [`&.${A.focusVisible}`]: {
                  backgroundColor: t.vars
                    ? `rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`
                    : (0, f.Fq)(
                        t.palette.primary.main,
                        t.palette.action.selectedOpacity +
                          t.palette.action.focusOpacity
                      ),
                },
              },
              [`&.${A.disabled}`]: {
                opacity: (t.vars || t).palette.action.disabledOpacity,
              },
            },
            'flex-start' === n.alignItems && { alignItems: 'flex-start' },
            n.divider && {
              borderBottom: `1px solid ${(t.vars || t).palette.divider}`,
              backgroundClip: 'padding-box',
            },
            n.button && {
              transition: t.transitions.create('background-color', {
                duration: t.transitions.duration.shortest,
              }),
              '&:hover': {
                textDecoration: 'none',
                backgroundColor: (t.vars || t).palette.action.hover,
                '@media (hover: none)': { backgroundColor: 'transparent' },
              },
              [`&.${A.selected}:hover`]: {
                backgroundColor: t.vars
                  ? `rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`
                  : (0, f.Fq)(
                      t.palette.primary.main,
                      t.palette.action.selectedOpacity +
                        t.palette.action.hoverOpacity
                    ),
                '@media (hover: none)': {
                  backgroundColor: t.vars
                    ? `rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`
                    : (0, f.Fq)(
                        t.palette.primary.main,
                        t.palette.action.selectedOpacity
                      ),
                },
              },
            },
            n.hasSecondaryAction && { paddingRight: 48 }
          );
        }),
        G = (0, Z.ZP)('li', {
          name: 'MuiListItem',
          slot: 'Container',
          overridesResolver: (e, t) => t.container,
        })({ position: 'relative' });
      var M = r.forwardRef(function (e, t) {
          const n = (0, v.Z)({ props: e, name: 'MuiListItem' }),
            {
              alignItems: i = 'center',
              autoFocus: a = !1,
              button: o = !1,
              children: s,
              className: l,
              component: d,
              components: c = {},
              componentsProps: u = {},
              ContainerComponent: f = 'li',
              ContainerProps: { className: Z } = {},
              dense: I = !1,
              disabled: C = !1,
              disableGutters: k = !1,
              disablePadding: N = !1,
              divider: $ = !1,
              focusVisibleClassName: O,
              secondaryAction: R,
              selected: M = !1,
              slotProps: U = {},
              slots: J = {},
            } = n,
            T = (0, h.Z)(n.ContainerProps, F),
            W = (0, h.Z)(n, _),
            V = r.useContext(S.Z),
            E = r.useMemo(
              () => ({
                dense: I || V.dense || !1,
                alignItems: i,
                disableGutters: k,
              }),
              [i, V.dense, I, k]
            ),
            H = r.useRef(null);
          (0, w.Z)(() => {
            a && H.current && H.current.focus();
          }, [a]);
          const q = r.Children.toArray(s),
            B =
              q.length &&
              (0, b.Z)(q[q.length - 1], ['ListItemSecondaryAction']),
            Y = (0, m.Z)({}, n, {
              alignItems: i,
              autoFocus: a,
              button: o,
              dense: E.dense,
              disabled: C,
              disableGutters: k,
              disablePadding: N,
              divider: $,
              hasSecondaryAction: B,
              selected: M,
            }),
            K = ((e) => {
              const {
                  alignItems: t,
                  button: n,
                  classes: i,
                  dense: a,
                  disabled: o,
                  disableGutters: r,
                  disablePadding: s,
                  divider: l,
                  hasSecondaryAction: d,
                  selected: c,
                } = e,
                u = {
                  root: [
                    'root',
                    a && 'dense',
                    !r && 'gutters',
                    !s && 'padding',
                    l && 'divider',
                    o && 'disabled',
                    n && 'button',
                    'flex-start' === t && 'alignItemsFlexStart',
                    d && 'secondaryAction',
                    c && 'selected',
                  ],
                  container: ['container'],
                };
              return (0, g.Z)(u, P, i);
            })(Y),
            Q = (0, y.Z)(H, t),
            X = J.root || c.Root || z,
            ee = U.root || u.root || {},
            te = (0, m.Z)(
              { className: (0, p.Z)(K.root, ee.className, l), disabled: C },
              W
            );
          let ne = d || 'li';
          return (
            o &&
              ((te.component = d || 'div'),
              (te.focusVisibleClassName = (0, p.Z)(A.focusVisible, O)),
              (ne = j.Z)),
            B
              ? ((ne = te.component || d ? ne : 'div'),
                'li' === f &&
                  ('li' === ne
                    ? (ne = 'div')
                    : 'li' === te.component && (te.component = 'div')),
                (0, L.jsx)(S.Z.Provider, {
                  value: E,
                  children: (0, L.jsxs)(
                    G,
                    (0, m.Z)(
                      {
                        as: f,
                        className: (0, p.Z)(K.container, Z),
                        ref: Q,
                        ownerState: Y,
                      },
                      T,
                      {
                        children: [
                          (0, L.jsx)(
                            X,
                            (0, m.Z)(
                              {},
                              ee,
                              !(0, x.Z)(X) && {
                                as: ne,
                                ownerState: (0, m.Z)({}, Y, ee.ownerState),
                              },
                              te,
                              { children: q }
                            )
                          ),
                          q.pop(),
                        ],
                      }
                    )
                  ),
                }))
              : (0, L.jsx)(S.Z.Provider, {
                  value: E,
                  children: (0, L.jsxs)(
                    X,
                    (0, m.Z)(
                      {},
                      ee,
                      { as: ne, ref: Q },
                      !(0, x.Z)(X) && {
                        ownerState: (0, m.Z)({}, Y, ee.ownerState),
                      },
                      te,
                      { children: [q, R && (0, L.jsx)(D, { children: R })] }
                    )
                  ),
                })
          );
        }),
        U = n(7247);
      function J(e) {
        return (0, C.Z)('MuiListItemAvatar', e);
      }
      (0, I.Z)('MuiListItemAvatar', ['root', 'alignItemsFlexStart']);
      const T = ['className'],
        W = (0, Z.ZP)('div', {
          name: 'MuiListItemAvatar',
          slot: 'Root',
          overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [
              t.root,
              'flex-start' === n.alignItems && t.alignItemsFlexStart,
            ];
          },
        })((e) => {
          let { ownerState: t } = e;
          return (0, m.Z)(
            { minWidth: 56, flexShrink: 0 },
            'flex-start' === t.alignItems && { marginTop: 8 }
          );
        });
      var V = r.forwardRef(function (e, t) {
          const n = (0, v.Z)({ props: e, name: 'MuiListItemAvatar' }),
            { className: i } = n,
            a = (0, h.Z)(n, T),
            o = r.useContext(S.Z),
            s = (0, m.Z)({}, n, { alignItems: o.alignItems }),
            l = ((e) => {
              const { alignItems: t, classes: n } = e,
                i = {
                  root: ['root', 'flex-start' === t && 'alignItemsFlexStart'],
                };
              return (0, g.Z)(i, J, n);
            })(s);
          return (0,
          L.jsx)(W, (0, m.Z)({ className: (0, p.Z)(l.root, i), ownerState: s, ref: t }, a));
        }),
        E = n(9900),
        H = n(3044),
        q = n(1889),
        B = n(890),
        Y = n(5228),
        K = n(3896),
        Q = n(6377),
        X = n(7391),
        ee = n(6151),
        te = n(7047),
        ne = n(3400),
        ie = n(625),
        ae = n(9593);
      s.Z.addLocale(ae.Z);
      const oe = (0, i.Z)({ palette: { mode: 'dark' } }),
        re = (e, t) => (/^\w{1,25}$/.test(t) ? t : e);
      function se(e) {
        const { children: t, value: n, index: i, ...a } = e;
        return (0, L.jsx)('div', {
          role: 'tabpanel',
          hidden: n !== i,
          id: `simple-tabpanel-${i}`,
          'aria-labelledby': `simple-tab-${i}`,
          ...a,
          children:
            n === i &&
            (0, L.jsx)(d.Z, {
              sx: { p: 3 },
              children: (0, L.jsx)(B.Z, { children: t }),
            }),
        });
      }
      function le(e) {
        return {
          id: `simple-tab-${e}`,
          'aria-controls': `simple-tabpanel-${e}`,
        };
      }
      var de = () => {
        const e = (0, r.useRef)(null),
          [t, n] = (0, r.useState)([]),
          [i, s] = (0, r.useState)([]),
          [h, m] = (0, r.useState)([]),
          [p, g] = (0, r.useState)(null),
          [x, f] = (0, r.useState)(null),
          [Z, v] = (0, r.useState)(null),
          [j, b] = (0, r.useState)(null),
          [w, y] = (0, r.useState)(null),
          [S, I] = (0, r.useState)(null),
          [C, P] = (0, r.useState)(null),
          [A, k] = (0, r.useState)(null),
          [N, $] = (0, r.useState)(null),
          [O, R] = r.useState(0);
        (0, r.useEffect)(() => {
          document.title = 'LsCo Software - Admin Software';
        }, []),
          (0, r.useEffect)(() => {
            !(async function () {
              const e = JSON.parse(localStorage.getItem('login'));
              if (null === localStorage.getItem('login'))
                return window.open(window.location.origin, '_self');
              const t = await fetch('https://api.devlsco.github.io/channels', {
                  headers: { Authorization: e.access_token },
                }),
                n = await (null === t || void 0 === t ? void 0 : t.json());
              if (!t.ok)
                return void window.open(window.location.origin, '_self');
              g(n.sort((e, t) => new Date(t.joinedAt) - new Date(e.joinedAt)));
            })(),
              (async function () {
                const e = JSON.parse(localStorage.getItem('login'));
                if (null === localStorage.getItem('login'))
                  return window.open(window.location.origin, '_self');
                const t = await fetch('https://api.devlsco.github.io/admins', {
                    headers: { Authorization: e.access_token },
                  }),
                  n = await (null === t || void 0 === t ? void 0 : t.json());
                if (!t.ok)
                  return void window.open(window.location.origin, '_self');
                f(
                  n.sort(
                    (e, t) => new Date(t.grantedAt) - new Date(e.grantedAt)
                  )
                );
              })();
          }, []);
        const D = async (e) => {
            var t;
            const n = JSON.parse(localStorage.getItem('login'));
            if (!(null !== localStorage.getItem('login')))
              return window.open(window.location.origin, '_self');
            if (!e) return k('You have not specified an channel.');
            const i = await fetch(
              `https://api.devlsco.github.io/channels?id=${encodeURIComponent(
                e
              )}`,
              { method: 'DELETE', headers: { Authorization: n.access_token } }
            );
            if (!i.ok)
              return k(
                null !== (t = a.message) && void 0 !== t
                  ? t
                  : 'An error has occurred. Try again later'
              );
            const a = await i.json();
            return g(p.filter((t) => t.id !== e)), $(a.message);
          },
          F = async (e) => {
            var t;
            const n = JSON.parse(localStorage.getItem('login'));
            if (!(null !== localStorage.getItem('login')))
              return window.open(window.location.origin, '_self');
            if (!e) return k('You have not specified an admin.');
            const i = await fetch(
              `https://api.devlsco.github.io/admins?id=${encodeURIComponent(
                e
              )}`,
              { method: 'DELETE', headers: { Authorization: n.access_token } }
            );
            if (!i.ok)
              return k(
                null !== (t = a.message) && void 0 !== t
                  ? t
                  : 'An error has occurred. Try again later'
              );
            const a = await i.json();
            return f(x.filter((t) => t.id !== e)), $(a.message);
          },
          _ = async (e) => {
            if (!localStorage.getItem('login')) return n([]);
            if (e.trim()) {
              const t = await fetch(
                  `https://api.twitch.tv/helix/search/channels?query=${e}&first=25`,
                  {
                    headers: {
                      Authorization:
                        'Bearer ' +
                        JSON.parse(localStorage.getItem('login')).access_token,
                      'Client-ID': JSON.parse(localStorage.getItem('login'))
                        .client_id,
                    },
                  }
                ),
                i = await t.json();
              t.ok
                ? n(
                    i.data.map((e) => ({
                      name: e.display_name,
                      id: e.id,
                      avatarUrl: e.thumbnail_url.replace('300x300', '50x50'),
                    }))
                  )
                : n([]);
            } else n([]);
          };
        return (0, L.jsxs)(o.Z, {
          title: 'Admin Software',
          description: 'Bot management tools.',
          style: { margin: 10 },
          children: [
            (0, L.jsxs)(d.Z, {
              sx: { width: '100%' },
              children: [
                (0, L.jsx)(d.Z, {
                  sx: { borderBottom: 1, borderColor: 'divider' },
                  children: (0, L.jsxs)(Y.Z, {
                    value: O,
                    onChange: (e, t) => {
                      R(t);
                    },
                    'aria-label': 'basic tabs example',
                    children: [
                      (0, L.jsx)(K.Z, { label: 'Channels', ...le(0) }),
                      (0, L.jsx)(K.Z, { label: 'Admins', ...le(1) }),
                    ],
                  }),
                }),
                (0, L.jsx)(se, {
                  value: O,
                  index: 0,
                  children: (0, L.jsxs)(q.ZP, {
                    container: !0,
                    spacing: 2,
                    children: [
                      (0, L.jsx)(q.ZP, {
                        item: !0,
                        xs: 12,
                        sm: 6,
                        children: (0, L.jsxs)(q.ZP, {
                          container: !0,
                          spacing: 2,
                          alignItems: 'center',
                          children: [
                            (0, L.jsx)(q.ZP, {
                              item: !0,
                              xs: 12,
                              children: (0, L.jsx)(a.Z, {
                                theme: oe,
                                children: (0, L.jsx)(Q.Z, {
                                  options: t,
                                  getOptionLabel: (e) => e.name,
                                  onChange: (e, t) => {
                                    v(
                                      null === t || void 0 === t ? void 0 : t.id
                                    );
                                  },
                                  renderInput: (e) =>
                                    (0, L.jsx)(X.Z, {
                                      ...e,
                                      fullWidth: !0,
                                      id: 'outlined-basic',
                                      label: 'Join Channel',
                                      variant: 'outlined',
                                      onChange: (e) => {
                                        _(e.target.value);
                                      },
                                    }),
                                  renderOption: (e, t) =>
                                    (0, L.jsx)('li', {
                                      ...e,
                                      children: (0, L.jsxs)(d.Z, {
                                        display: 'flex',
                                        alignItems: 'center',
                                        children: [
                                          (0, L.jsx)(H.Z, {
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
                            (0, L.jsx)(q.ZP, {
                              item: !0,
                              xs: 12,
                              children: (0, L.jsx)(a.Z, {
                                theme: oe,
                                children: (0, L.jsx)(ee.Z, {
                                  variant: 'contained',
                                  color: 'info',
                                  fullWidth: !0,
                                  onClick: async () => {
                                    var e;
                                    const t = JSON.parse(
                                      localStorage.getItem('login')
                                    );
                                    if (
                                      !(null !== localStorage.getItem('login'))
                                    )
                                      return window.open(
                                        window.location.origin,
                                        '_self'
                                      );
                                    if (!Z)
                                      return k(
                                        'You have not specified an channel.'
                                      );
                                    const n = await fetch(
                                      `https://api.devlsco.github.io/channels?id=${encodeURIComponent(
                                        Z
                                      )}`,
                                      {
                                        method: 'POST',
                                        headers: {
                                          Authorization: t.access_token,
                                        },
                                      }
                                    );
                                    if (!n.ok)
                                      return k(
                                        null !== (e = i.message) && void 0 !== e
                                          ? e
                                          : 'An error has occurred. Try again later'
                                      );
                                    const i = await n.json();
                                    return g([i.data, ...p]), $(i.message);
                                  },
                                  children: 'Join',
                                }),
                              }),
                            }),
                            j &&
                              (0, L.jsxs)(L.Fragment, {
                                children: [
                                  (0, L.jsx)(q.ZP, {
                                    item: !0,
                                    xs: 6,
                                    children: (0, L.jsx)(a.Z, {
                                      theme: oe,
                                      children: (0, L.jsx)(X.Z, {
                                        fullWidth: !0,
                                        id: 'outlined-basic',
                                        label: 'Login',
                                        variant: 'outlined',
                                        type: 'text',
                                        value: re(j.login, j.displayName),
                                        disabled: !0,
                                      }),
                                    }),
                                  }),
                                  (0, L.jsx)(q.ZP, {
                                    item: !0,
                                    xs: 6,
                                    children: (0, L.jsx)(a.Z, {
                                      theme: oe,
                                      children: (0, L.jsx)(X.Z, {
                                        fullWidth: !0,
                                        id: 'outlined-basic',
                                        label: 'ID',
                                        variant: 'outlined',
                                        type: 'text',
                                        value: j.id,
                                        disabled: !0,
                                      }),
                                    }),
                                  }),
                                  (0, L.jsx)(q.ZP, {
                                    item: !0,
                                    xs: 12,
                                    children: (0, L.jsx)(a.Z, {
                                      theme: oe,
                                      children: (0, L.jsx)(X.Z, {
                                        fullWidth: !0,
                                        id: 'outlined-basic',
                                        label: 'ID',
                                        variant: 'outlined',
                                        type: 'text',
                                        value: j.prefix,
                                        onChange: (e) => {
                                          b({
                                            id: j.id,
                                            login: j.login,
                                            displayName: j.displayName,
                                            pfp: j.pfp,
                                            prefix: e.target.value,
                                            joinedAt: j.joinedAt,
                                          });
                                        },
                                      }),
                                    }),
                                  }),
                                  (0, L.jsx)(q.ZP, {
                                    item: !0,
                                    xs: 12,
                                    children: (0, L.jsx)(a.Z, {
                                      theme: oe,
                                      children: (0, L.jsx)(ee.Z, {
                                        variant: 'text',
                                        color: 'info',
                                        fullWidth: !0,
                                        onClick: async () => {
                                          var e;
                                          const t = JSON.parse(
                                            localStorage.getItem('login')
                                          );
                                          if (
                                            !(
                                              null !==
                                              localStorage.getItem('login')
                                            )
                                          )
                                            return window.open(
                                              window.location.origin,
                                              '_self'
                                            );
                                          if (!j)
                                            return k(
                                              'You have not specified a channel.'
                                            );
                                          const n = await fetch(
                                            `https://api.devlsco.github.io/channels?id=${encodeURIComponent(
                                              j.id
                                            )}&prefix=${j.prefix}`,
                                            {
                                              method: 'PUT',
                                              headers: {
                                                Authorization: t.access_token,
                                              },
                                            }
                                          );
                                          if (!n.ok)
                                            return k(
                                              null !== (e = i.message) &&
                                                void 0 !== e
                                                ? e
                                                : 'An error has occurred. Try again later'
                                            );
                                          const i = await n.json(),
                                            a = p.findIndex(
                                              (e) => e.id === j.id
                                            );
                                          if (-1 !== a) {
                                            const e = [...p];
                                            (e[a].prefix = j.prefix), g(e);
                                          }
                                          return $(i.message);
                                        },
                                        children: 'Update',
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                          ],
                        }),
                      }),
                      (0, L.jsx)(q.ZP, {
                        item: !0,
                        xs: 12,
                        sm: 6,
                        children: (0, L.jsxs)(q.ZP, {
                          container: !0,
                          spacing: 2,
                          alignItems: 'center',
                          children: [
                            (0, L.jsx)(q.ZP, {
                              item: !0,
                              xs: 12,
                              children: (0, L.jsx)(a.Z, {
                                theme: oe,
                                children: (0, L.jsx)(X.Z, {
                                  fullWidth: !0,
                                  id: 'outlined-basic',
                                  label: 'Search Channels',
                                  variant: 'outlined',
                                  type: 'search',
                                  value: S,
                                  onChange: (e) => {
                                    var t;
                                    const n = p.filter((t) => {
                                      var n, i;
                                      const a = t.login.toLowerCase(),
                                        o =
                                          null !==
                                            (n =
                                              null ===
                                                (i = e.target.value.trim()) ||
                                              void 0 === i
                                                ? void 0
                                                : i.toLowerCase()) &&
                                          void 0 !== n
                                            ? n
                                            : null;
                                      return a.includes(o);
                                    });
                                    I(
                                      null !== (t = e.target.value.trim()) &&
                                        void 0 !== t
                                        ? t
                                        : null
                                    ),
                                      s(n);
                                  },
                                }),
                              }),
                            }),
                            (0, L.jsx)(q.ZP, {
                              item: !0,
                              xs: 12,
                              children: p
                                ? (0, L.jsxs)(L.Fragment, {
                                    children: ['Channels: ', p.length],
                                  })
                                : (0, L.jsx)(te.Z, {
                                    variant: 'rounded',
                                    width: '100%',
                                  }),
                            }),
                            (0, L.jsx)(q.ZP, {
                              item: !0,
                              xs: 12,
                              children: p
                                ? S
                                  ? (0, L.jsxs)(d.Z, {
                                      ref: e,
                                      children: [
                                        (0, L.jsx)(c.ZP, {}),
                                        (0, L.jsx)(u.Z, {
                                          sx: {
                                            width: '100%',
                                            bgcolor: 'background.paper',
                                            position: 'relative',
                                            overflow: 'auto',
                                            maxHeight: 400,
                                          },
                                          subheader: (0, L.jsx)('li', {}),
                                          children: i.length
                                            ? i.map((e, t) => {
                                                let {
                                                  id: n,
                                                  login: i,
                                                  displayName: a,
                                                  pfp: o,
                                                  prefix: r,
                                                  joinedAt: s,
                                                } = e;
                                                return (0, L.jsxs)(
                                                  M,
                                                  {
                                                    button: !0,
                                                    onClick: () =>
                                                      b({
                                                        id: n,
                                                        login: i,
                                                        displayName: a,
                                                        pfp: o,
                                                        prefix: r,
                                                        joinedAt: s,
                                                      }),
                                                    children: [
                                                      (0, L.jsx)(V, {
                                                        children: (0, L.jsx)(
                                                          H.Z,
                                                          {
                                                            alt: 'Profile Picture',
                                                            src: o,
                                                          }
                                                        ),
                                                      }),
                                                      (0, L.jsx)(E.Z, {
                                                        primary: re(i, a),
                                                        secondary: (0, L.jsxs)(
                                                          L.Fragment,
                                                          {
                                                            children: [
                                                              'Joined ',
                                                              (0, L.jsx)(l.Z, {
                                                                date: new Date(
                                                                  s
                                                                ),
                                                                locale: 'en-US',
                                                              }),
                                                              ' -',
                                                              ' ',
                                                              new Date(
                                                                s
                                                              ).toLocaleString(
                                                                'en'
                                                              ),
                                                              (0, L.jsx)(
                                                                'br',
                                                                {}
                                                              ),
                                                              'Prefix: ',
                                                              r,
                                                            ],
                                                          }
                                                        ),
                                                      }),
                                                      (0, L.jsx)(ne.Z, {
                                                        color: 'error',
                                                        onClick: () => D(n),
                                                        children: (0, L.jsx)(
                                                          U.Z,
                                                          {}
                                                        ),
                                                      }),
                                                    ],
                                                  },
                                                  t + n
                                                );
                                              })
                                            : (0, L.jsx)(B.Z, {
                                                children:
                                                  'No channel match that query.',
                                              }),
                                        }),
                                      ],
                                    })
                                  : (0, L.jsxs)(d.Z, {
                                      ref: e,
                                      children: [
                                        (0, L.jsx)(c.ZP, {}),
                                        (0, L.jsx)(u.Z, {
                                          sx: {
                                            width: '100%',
                                            bgcolor: 'background.paper',
                                            position: 'relative',
                                            overflow: 'auto',
                                            maxHeight: 400,
                                          },
                                          subheader: (0, L.jsx)('li', {}),
                                          children: p.length
                                            ? p.map((e, t) => {
                                                let {
                                                  id: n,
                                                  login: i,
                                                  displayName: a,
                                                  pfp: o,
                                                  prefix: r,
                                                  joinedAt: s,
                                                } = e;
                                                return (0, L.jsxs)(
                                                  M,
                                                  {
                                                    button: !0,
                                                    onClick: () =>
                                                      b({
                                                        id: n,
                                                        login: i,
                                                        displayName: a,
                                                        pfp: o,
                                                        prefix: r,
                                                        joinedAt: s,
                                                      }),
                                                    children: [
                                                      (0, L.jsx)(V, {
                                                        children: (0, L.jsx)(
                                                          H.Z,
                                                          {
                                                            alt: 'Profile Picture',
                                                            src: o,
                                                          }
                                                        ),
                                                      }),
                                                      (0, L.jsx)(E.Z, {
                                                        primary: re(i, a),
                                                        secondary: (0, L.jsxs)(
                                                          L.Fragment,
                                                          {
                                                            children: [
                                                              'Joined ',
                                                              (0, L.jsx)(l.Z, {
                                                                date: new Date(
                                                                  s
                                                                ),
                                                                locale: 'en-US',
                                                              }),
                                                              ' -',
                                                              ' ',
                                                              new Date(
                                                                s
                                                              ).toLocaleString(
                                                                'en'
                                                              ),
                                                              (0, L.jsx)(
                                                                'br',
                                                                {}
                                                              ),
                                                              'Prefix: ',
                                                              r,
                                                            ],
                                                          }
                                                        ),
                                                      }),
                                                      (0, L.jsx)(ne.Z, {
                                                        color: 'error',
                                                        onClick: () => D(n),
                                                        children: (0, L.jsx)(
                                                          U.Z,
                                                          {}
                                                        ),
                                                      }),
                                                    ],
                                                  },
                                                  t + n
                                                );
                                              })
                                            : (0, L.jsx)(B.Z, {
                                                children: 'No channels',
                                              }),
                                        }),
                                      ],
                                    })
                                : (0, L.jsx)(te.Z, {
                                    variant: 'rounded',
                                    width: '100%',
                                    height: 400,
                                  }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
                (0, L.jsx)(se, {
                  value: O,
                  index: 1,
                  children: (0, L.jsxs)(q.ZP, {
                    container: !0,
                    spacing: 2,
                    children: [
                      (0, L.jsx)(q.ZP, {
                        item: !0,
                        xs: 12,
                        sm: 6,
                        children: (0, L.jsxs)(q.ZP, {
                          container: !0,
                          spacing: 2,
                          alignItems: 'center',
                          children: [
                            (0, L.jsx)(q.ZP, {
                              item: !0,
                              xs: 12,
                              children: (0, L.jsx)(a.Z, {
                                theme: oe,
                                children: (0, L.jsx)(Q.Z, {
                                  options: t,
                                  getOptionLabel: (e) => e.name,
                                  onChange: (e, t) => {
                                    y(
                                      null === t || void 0 === t ? void 0 : t.id
                                    );
                                  },
                                  renderInput: (e) =>
                                    (0, L.jsx)(X.Z, {
                                      ...e,
                                      fullWidth: !0,
                                      id: 'outlined-basic',
                                      label: 'Add Admin',
                                      variant: 'outlined',
                                      onChange: (e) => {
                                        _(e.target.value);
                                      },
                                    }),
                                  renderOption: (e, t) =>
                                    (0, L.jsx)('li', {
                                      ...e,
                                      children: (0, L.jsxs)(d.Z, {
                                        display: 'flex',
                                        alignItems: 'center',
                                        children: [
                                          (0, L.jsx)(H.Z, {
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
                            (0, L.jsx)(q.ZP, {
                              item: !0,
                              xs: 12,
                              children: (0, L.jsx)(a.Z, {
                                theme: oe,
                                children: (0, L.jsx)(ee.Z, {
                                  variant: 'contained',
                                  color: 'info',
                                  fullWidth: !0,
                                  onClick: async () => {
                                    var e;
                                    const t = JSON.parse(
                                      localStorage.getItem('login')
                                    );
                                    if (
                                      !(null !== localStorage.getItem('login'))
                                    )
                                      return window.open(
                                        window.location.origin,
                                        '_self'
                                      );
                                    if (!w)
                                      return k(
                                        'You have not specified an admin.'
                                      );
                                    const n = await fetch(
                                      `https://api.devlsco.github.io/admins?id=${encodeURIComponent(
                                        w
                                      )}`,
                                      {
                                        method: 'POST',
                                        headers: {
                                          Authorization: t.access_token,
                                        },
                                      }
                                    );
                                    if (!n.ok)
                                      return k(
                                        null !== (e = i.message) && void 0 !== e
                                          ? e
                                          : 'An error has occurred. Try again later'
                                      );
                                    const i = await n.json();
                                    return f([i.data, ...x]), $(i.message);
                                  },
                                  children: 'Add',
                                }),
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, L.jsx)(q.ZP, {
                        item: !0,
                        xs: 12,
                        sm: 6,
                        children: (0, L.jsxs)(q.ZP, {
                          container: !0,
                          spacing: 2,
                          alignItems: 'center',
                          children: [
                            (0, L.jsx)(q.ZP, {
                              item: !0,
                              xs: 12,
                              children: (0, L.jsx)(a.Z, {
                                theme: oe,
                                children: (0, L.jsx)(X.Z, {
                                  fullWidth: !0,
                                  id: 'outlined-basic',
                                  label: 'Search Admins',
                                  variant: 'outlined',
                                  type: 'search',
                                  value: C,
                                  onChange: (e) => {
                                    var t;
                                    const n = x.filter((t) => {
                                      var n, i;
                                      const a = t.login.toLowerCase(),
                                        o =
                                          null !==
                                            (n =
                                              null ===
                                                (i = e.target.value.trim()) ||
                                              void 0 === i
                                                ? void 0
                                                : i.toLowerCase()) &&
                                          void 0 !== n
                                            ? n
                                            : null;
                                      return a.includes(o);
                                    });
                                    P(
                                      null !== (t = e.target.value.trim()) &&
                                        void 0 !== t
                                        ? t
                                        : null
                                    ),
                                      m(n);
                                  },
                                }),
                              }),
                            }),
                            (0, L.jsx)(q.ZP, {
                              item: !0,
                              xs: 12,
                              children: x
                                ? (0, L.jsxs)(L.Fragment, {
                                    children: ['Admins: ', x.length],
                                  })
                                : (0, L.jsx)(te.Z, {
                                    variant: 'rounded',
                                    width: '100%',
                                  }),
                            }),
                            (0, L.jsx)(q.ZP, {
                              item: !0,
                              xs: 12,
                              children: x
                                ? C
                                  ? (0, L.jsxs)(d.Z, {
                                      ref: e,
                                      children: [
                                        (0, L.jsx)(c.ZP, {}),
                                        (0, L.jsx)(u.Z, {
                                          sx: {
                                            width: '100%',
                                            bgcolor: 'background.paper',
                                            position: 'relative',
                                            overflow: 'auto',
                                            maxHeight: 400,
                                          },
                                          subheader: (0, L.jsx)('li', {}),
                                          children: h.length
                                            ? h.map((e, t) => {
                                                let {
                                                  id: n,
                                                  login: i,
                                                  displayName: a,
                                                  pfp: o,
                                                  grantedAt: r,
                                                } = e;
                                                return (0, L.jsxs)(
                                                  M,
                                                  {
                                                    button: !0,
                                                    children: [
                                                      (0, L.jsx)(V, {
                                                        children: (0, L.jsx)(
                                                          H.Z,
                                                          {
                                                            alt: 'Profile Picture',
                                                            src: o,
                                                          }
                                                        ),
                                                      }),
                                                      (0, L.jsx)(E.Z, {
                                                        primary: re(i, a),
                                                        secondary: (0, L.jsxs)(
                                                          L.Fragment,
                                                          {
                                                            children: [
                                                              'Granted ',
                                                              (0, L.jsx)(l.Z, {
                                                                date: new Date(
                                                                  r
                                                                ),
                                                                locale: 'en-US',
                                                              }),
                                                              ' -',
                                                              ' ',
                                                              new Date(
                                                                r
                                                              ).toLocaleString(
                                                                'en'
                                                              ),
                                                            ],
                                                          }
                                                        ),
                                                      }),
                                                      (0, L.jsx)(ne.Z, {
                                                        color: 'error',
                                                        onClick: () => F(n),
                                                        children: (0, L.jsx)(
                                                          U.Z,
                                                          {}
                                                        ),
                                                      }),
                                                    ],
                                                  },
                                                  t + n
                                                );
                                              })
                                            : (0, L.jsx)(B.Z, {
                                                children:
                                                  'No Admins match that query.',
                                              }),
                                        }),
                                      ],
                                    })
                                  : (0, L.jsxs)(d.Z, {
                                      ref: e,
                                      children: [
                                        (0, L.jsx)(c.ZP, {}),
                                        (0, L.jsx)(u.Z, {
                                          sx: {
                                            width: '100%',
                                            bgcolor: 'background.paper',
                                            position: 'relative',
                                            overflow: 'auto',
                                            maxHeight: 400,
                                          },
                                          subheader: (0, L.jsx)('li', {}),
                                          children: x.length
                                            ? x.map((e, t) => {
                                                let {
                                                  id: n,
                                                  login: i,
                                                  displayName: a,
                                                  pfp: o,
                                                  grantedAt: r,
                                                } = e;
                                                return (0, L.jsxs)(
                                                  M,
                                                  {
                                                    button: !0,
                                                    children: [
                                                      (0, L.jsx)(V, {
                                                        children: (0, L.jsx)(
                                                          H.Z,
                                                          {
                                                            alt: 'Profile Picture',
                                                            src: o,
                                                          }
                                                        ),
                                                      }),
                                                      (0, L.jsx)(E.Z, {
                                                        primary: re(i, a),
                                                        secondary: (0, L.jsxs)(
                                                          L.Fragment,
                                                          {
                                                            children: [
                                                              'Granted ',
                                                              (0, L.jsx)(l.Z, {
                                                                date: new Date(
                                                                  r
                                                                ),
                                                                locale: 'en-US',
                                                              }),
                                                              ' -',
                                                              ' ',
                                                              new Date(
                                                                r
                                                              ).toLocaleString(
                                                                'en'
                                                              ),
                                                            ],
                                                          }
                                                        ),
                                                      }),
                                                      (0, L.jsx)(ne.Z, {
                                                        color: 'error',
                                                        onClick: () => F(n),
                                                        children: (0, L.jsx)(
                                                          U.Z,
                                                          {}
                                                        ),
                                                      }),
                                                    ],
                                                  },
                                                  t + n
                                                );
                                              })
                                            : (0, L.jsx)(B.Z, {
                                                children: 'No Admins',
                                              }),
                                        }),
                                      ],
                                    })
                                : (0, L.jsx)(te.Z, {
                                    variant: 'rounded',
                                    width: '100%',
                                    height: 400,
                                  }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
            (0, L.jsx)(ie.Z, {
              open: A,
              autoHideDuration: 5e3,
              color: 'error',
              onClose: () => {
                k(null);
              },
              message: A,
            }),
            (0, L.jsx)(ie.Z, {
              open: N,
              autoHideDuration: 5e3,
              color: 'error',
              onClose: () => {
                $(null);
              },
              message: N,
            }),
          ],
        });
      };
    },
    7247: function (e, t, n) {
      var i = n(4836);
      t.Z = void 0;
      var a = i(n(5649)),
        o = n(184),
        r = (0, a.default)(
          (0, o.jsx)('path', {
            d: 'M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z',
          }),
          'Delete'
        );
      t.Z = r;
    },
  },
]);
//# sourceMappingURL=613.281dcfc0.chunk.js.map
