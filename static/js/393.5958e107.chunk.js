'use strict';
(self.webpackChunkpage = self.webpackChunkpage || []).push([
  [393],
  {
    3393: function (e, t, i) {
      i.r(t);
      var a = i(1979),
        n = i(4507),
        r = i(2791),
        s = i(1889),
        o = i(6377),
        d = i(7391),
        l = i(8870),
        c = i(3044),
        h = i(6151),
        u = i(8096),
        p = i(829),
        m = i(8837),
        v = i(3786),
        f = i(890),
        g = i(6999),
        x = i(184);
      const b = (0, a.Z)({ palette: { mode: 'dark' } });
      t.default = () => {
        const [e, t] = (0, r.useState)(''),
          [i, a] = (0, r.useState)(''),
          [Z, y] = (0, r.useState)(''),
          [j, k] = (0, r.useState)([]),
          [I, $] = (0, r.useState)(''),
          [w, S] = (0, r.useState)(''),
          [C, _] = (0, r.useState)(null),
          [O, N] = (0, r.useState)([]),
          [P, T] = (0, r.useState)('');
        (0, r.useEffect)(() => {
          document.title = 'LsCo Software - Channel Manager';
        }, []),
          (0, r.useEffect)(() => {
            (async () => {
              try {
                const e = (
                  localStorage.getItem('tokens')
                    ? JSON.parse(localStorage.getItem('tokens'))
                    : []
                ).find((e) => e.id === I);
                if (!e) return;
                await M(e.access_token);
              } catch (e) {
                return a(e.message), void y('');
              }
            })();
          }, [I]);
        const A = () => {
          const e = (JSON.parse(localStorage.getItem('tokens')) || []).map(
            (e) => {
              let { login: t, id: i } = e;
              return { id: i, name: t };
            }
          );
          e.length >= 1 ? k(e) : k([{ id: '', name: 'No Channels' }]);
        };
        (0, r.useEffect)(() => {
          A();
        }, []),
          (0, r.useEffect)(() => {
            a(''), y('');
            const e = async (e) => {
                const t = JSON.parse(localStorage.getItem('tokens')) || [],
                  i = t.findIndex((e) => e.id === I);
                if (-1 === i) return N([]);
                if ('' !== e.trim()) {
                  const a = await fetch(
                      `https://api.twitch.tv/helix/search/channels?query=${e}&first=25`,
                      {
                        headers: {
                          Authorization: 'Bearer ' + t[i].access_token,
                          'Client-ID': t[i].client_id,
                        },
                      }
                    ),
                    n = await a.json();
                  a.ok
                    ? N(
                        n.data.map((e) => ({
                          name: e.display_name,
                          id: e.id,
                          avatarUrl: e.thumbnail_url.replace(
                            '300x300',
                            '50x50'
                          ),
                        }))
                      )
                    : N([]);
                } else N([]);
              },
              t = async () => {
                if (!I) return a('No channel specified'), void y('');
                if (!P) return a('No user specified'), void y('');
                const e = JSON.parse(localStorage.getItem('tokens')) || [],
                  t = e.findIndex((e) => e.id === I);
                if (-1 === t) return a('There are no channels'), void y('');
                const i = await fetch(
                  `https://api.twitch.tv/helix/channels/vips?broadcaster_id=${e[t].id}&user_id=${P.id}`,
                  {
                    method: 'DELETE',
                    headers: {
                      Authorization: `Bearer ${e[t].access_token}`,
                      'Client-Id': e[t].client_id,
                    },
                  }
                );
                if (!i.ok) {
                  const e = await i.json();
                  return a(e.message), void y('');
                }
                a(''),
                  y(`Successfully removed ${P.name} as VIP in ${e[t].login}`);
              },
              i = async () => {
                if (!I) return a('No channel specified'), void y('');
                if (!P) return a('No user specified'), void y('');
                const e = JSON.parse(localStorage.getItem('tokens')) || [],
                  t = e.findIndex((e) => e.id === I);
                if (-1 === t) return a('There are no channels'), void y('');
                const i = await fetch(
                  `https://api.twitch.tv/helix/moderation/moderators?broadcaster_id=${e[t].id}&user_id=${P.id}`,
                  {
                    method: 'DELETE',
                    headers: {
                      Authorization: `Bearer ${e[t].access_token}`,
                      'Client-Id': e[t].client_id,
                    },
                  }
                );
                if (!i.ok) {
                  const e = await i.json();
                  return a(e.message), void y('');
                }
                a(''),
                  y(
                    `Successfully removed ${P.name} as Moderator in ${e[t].login}`
                  );
              },
              u = async () => {
                if (!I) return a('No channel specified'), void y('');
                if (!P) return a('No user specified'), void y('');
                const e = JSON.parse(localStorage.getItem('tokens')) || [],
                  t = e.findIndex((e) => e.id === I);
                if (-1 === t) return a('There are no channels'), void y('');
                const i = await fetch(
                  `https://api.twitch.tv/helix/channels/vips?broadcaster_id=${e[t].id}&user_id=${P.id}`,
                  {
                    method: 'POST',
                    headers: {
                      Authorization: `Bearer ${e[t].access_token}`,
                      'Client-Id': e[t].client_id,
                    },
                  }
                );
                if (!i.ok) {
                  const e = await i.json();
                  return a(e.message), void y('');
                }
                a(''),
                  y(`Successfully added ${P.name} as VIP in ${e[t].login}`);
              },
              p = async () => {
                if (!I) return a('No channel specified'), void y('');
                if (!P) return a('No user specified'), void y('');
                const e = JSON.parse(localStorage.getItem('tokens')) || [],
                  t = e.findIndex((e) => e.id === I);
                if (-1 === t) return a('There are no channels'), void y('');
                const i = await fetch(
                  `https://api.twitch.tv/helix/moderation/moderators?broadcaster_id=${e[t].id}&user_id=${P.id}`,
                  {
                    method: 'POST',
                    headers: {
                      Authorization: `Bearer ${e[t].access_token}`,
                      'Client-Id': e[t].client_id,
                    },
                  }
                );
                if (!i.ok) {
                  const e = await i.json();
                  return a(e.message), void y('');
                }
                a(''),
                  y(
                    `Successfully added ${P.name} as Moderator in ${e[t].login}`
                  );
              };
            (async () => {
              if ('add-moderator' === w)
                _(
                  (0, x.jsxs)(r.Fragment, {
                    children: [
                      (0, x.jsx)(s.ZP, {
                        item: !0,
                        xs: 12,
                        children: (0, x.jsx)(n.Z, {
                          theme: b,
                          children: (0, x.jsx)(
                            o.Z,
                            {
                              options: O,
                              getOptionLabel: (e) => e.name,
                              onChange: (e, t) => {
                                T(t);
                              },
                              renderInput: (t) =>
                                (0, x.jsx)(d.Z, {
                                  ...t,
                                  fullWidth: !0,
                                  id: 'outlined-basic',
                                  label: 'User',
                                  variant: 'outlined',
                                  onChange: (t) => {
                                    e(t.target.value);
                                  },
                                }),
                              renderOption: (e, t) =>
                                (0, x.jsx)('li', {
                                  ...e,
                                  children: (0, x.jsxs)(l.Z, {
                                    display: 'flex',
                                    alignItems: 'center',
                                    children: [
                                      (0, x.jsx)(c.Z, {
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
                            },
                            'add-moderator'
                          ),
                        }),
                      }),
                      (0, x.jsx)(s.ZP, {
                        item: !0,
                        xs: 12,
                        children: (0, x.jsx)(h.Z, {
                          variant: 'contained',
                          fullWidth: !0,
                          onClick: p,
                          children: 'Add',
                        }),
                      }),
                    ],
                  })
                );
              else if ('add-vip' === w)
                _(
                  (0, x.jsxs)(r.Fragment, {
                    children: [
                      (0, x.jsx)(s.ZP, {
                        item: !0,
                        xs: 12,
                        children: (0, x.jsx)(n.Z, {
                          theme: b,
                          children: (0, x.jsx)(
                            o.Z,
                            {
                              options: O,
                              getOptionLabel: (e) => e.name,
                              onChange: (e, t) => {
                                T(t);
                              },
                              renderInput: (t) =>
                                (0, x.jsx)(d.Z, {
                                  ...t,
                                  fullWidth: !0,
                                  id: 'outlined-basic',
                                  label: 'User',
                                  variant: 'outlined',
                                  onChange: (t) => {
                                    e(t.target.value);
                                  },
                                }),
                              renderOption: (e, t) =>
                                (0, x.jsx)('li', {
                                  ...e,
                                  children: (0, x.jsxs)(l.Z, {
                                    display: 'flex',
                                    alignItems: 'center',
                                    children: [
                                      (0, x.jsx)(c.Z, {
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
                            },
                            'add-vip'
                          ),
                        }),
                      }),
                      (0, x.jsx)(s.ZP, {
                        item: !0,
                        xs: 12,
                        children: (0, x.jsx)(h.Z, {
                          variant: 'contained',
                          fullWidth: !0,
                          onClick: u,
                          children: 'Add',
                        }),
                      }),
                    ],
                  })
                );
              else if ('remove-moderator' === w) {
                const e = await (async () => {
                  if (!I) return a('No channel specified'), y(''), [];
                  const e = JSON.parse(localStorage.getItem('tokens')) || [],
                    t = e.findIndex((e) => e.id === I);
                  if (-1 === t) return a('There are no channels'), void y('');
                  let i = `https://api.twitch.tv/helix/moderation/moderators?first=100&broadcaster_id=${e[t].id}`,
                    n = null,
                    r = [];
                  for (;;) {
                    n &&
                      (i = `https://api.twitch.tv/helix/moderation/moderators?first=100&broadcaster_id=${e[t].id}&after=${n}`);
                    const s = await fetch(i, {
                        headers: {
                          Authorization: `Bearer ${e[t].access_token}`,
                          'Client-Id': e[t].client_id,
                        },
                      }),
                      o = await s.json();
                    if (!s.ok) return a(o.message), y(''), [];
                    if (
                      (r.push(
                        ...o.data.map((e) => ({
                          name: e.user_name,
                          id: e.user_id,
                        }))
                      ),
                      !o.pagination || !o.pagination.cursor)
                    )
                      break;
                    n = o.pagination.cursor;
                  }
                  return r;
                })();
                _(
                  (0, x.jsxs)(r.Fragment, {
                    children: [
                      (0, x.jsx)(s.ZP, {
                        item: !0,
                        xs: 12,
                        children: (0, x.jsx)(n.Z, {
                          theme: b,
                          children: (0, x.jsx)(
                            o.Z,
                            {
                              options: e,
                              getOptionLabel: (e) => e.name,
                              isOptionEqualToValue: (e, t) => e.name === t.name,
                              id: 'disable-close-on-select',
                              onChange: (e, t) => {
                                T(t);
                              },
                              renderInput: (e) =>
                                (0, x.jsx)(d.Z, {
                                  ...e,
                                  id: 'outlined-basic',
                                  label: 'Moderator',
                                  variant: 'outlined',
                                }),
                            },
                            'remove-moderator'
                          ),
                        }),
                      }),
                      (0, x.jsx)(s.ZP, {
                        item: !0,
                        xs: 12,
                        children: (0, x.jsx)(h.Z, {
                          variant: 'contained',
                          fullWidth: !0,
                          onClick: i,
                          children: 'Remove',
                        }),
                      }),
                    ],
                  })
                );
              } else if ('remove-vip' === w) {
                const e = await (async () => {
                  if (!I) return a('No channel specified'), y(''), [];
                  const e = JSON.parse(localStorage.getItem('tokens')) || [],
                    t = e.findIndex((e) => e.id === I);
                  let i = `https://api.twitch.tv/helix/channels/vips?first=100&broadcaster_id=${e[t].id}`,
                    n = null,
                    r = [];
                  for (;;) {
                    n &&
                      (i = `https://api.twitch.tv/helix/channels/vips?first=100&broadcaster_id=${e[t].id}&after=${n}`);
                    const s = await fetch(i, {
                        headers: {
                          Authorization: `Bearer ${e[t].access_token}`,
                          'Client-Id': e[t].client_id,
                        },
                      }),
                      o = await s.json();
                    if (!s.ok) return a(o.message), y(''), [];
                    if (
                      (r.push(
                        ...o.data.map((e) => ({
                          name: e.user_name,
                          id: e.user_id,
                        }))
                      ),
                      !o.pagination || !o.pagination.cursor)
                    )
                      break;
                    n = o.pagination.cursor;
                  }
                  return r;
                })();
                _(
                  (0, x.jsxs)(r.Fragment, {
                    children: [
                      (0, x.jsx)(s.ZP, {
                        item: !0,
                        xs: 12,
                        children: (0, x.jsx)(n.Z, {
                          theme: b,
                          children: (0, x.jsx)(
                            o.Z,
                            {
                              options: e,
                              getOptionLabel: (e) => e.name,
                              isOptionEqualToValue: (e, t) => e.name === t.name,
                              id: 'disable-close-on-select',
                              onChange: (e, t) => {
                                T(t);
                              },
                              renderInput: (e) =>
                                (0, x.jsx)(d.Z, {
                                  ...e,
                                  id: 'outlined-basic',
                                  label: 'VIP',
                                  variant: 'outlined',
                                }),
                            },
                            'remove-vip'
                          ),
                        }),
                      }),
                      (0, x.jsx)(s.ZP, {
                        item: !0,
                        xs: 12,
                        children: (0, x.jsx)(h.Z, {
                          variant: 'contained',
                          fullWidth: !0,
                          onClick: t,
                          children: 'Remove',
                        }),
                      }),
                    ],
                  })
                );
              }
            })();
          }, [w, O, I, P]);
        const M = async (e) => {
          const t = await fetch('https://id.twitch.tv/oauth2/validate', {
              headers: { Authorization: `OAuth ${e}` },
            }),
            i = await t.json();
          if (!t.ok) {
            if ('invalid access token' === i.message)
              throw new Error('Invalid access token');
            throw new Error(i.message || 'Validate token failed');
          }
          return i;
        };
        return (0, x.jsx)(g.Z, {
          title: 'Channel Manager',
          description: 'Add or remove moderators/VIPs from a specific channel.',
          children: (0, x.jsxs)(s.ZP, {
            container: !0,
            spacing: 2,
            alignItems: 'center',
            children: [
              (0, x.jsx)(s.ZP, {
                item: !0,
                xs: 12,
                children: (0, x.jsx)(n.Z, {
                  theme: b,
                  children: (0, x.jsx)(d.Z, {
                    fullWidth: !0,
                    id: 'outlined-basic',
                    label: 'OAuth Token',
                    type: 'password',
                    value: e,
                    variant: 'outlined',
                    onChange: (e) => t(e.target.value),
                  }),
                }),
              }),
              (0, x.jsx)(s.ZP, {
                item: !0,
                xs: 12,
                sm: 6,
                children: (0, x.jsx)(h.Z, {
                  variant: 'contained',
                  color: 'info',
                  fullWidth: !0,
                  onClick: async () => {
                    if ('' === e.trim())
                      return a('You must specify an OAuth Token'), void y('');
                    try {
                      const t =
                          JSON.parse(localStorage.getItem('tokens')) || [],
                        i = await M(e.replace(/^oauth[:]*/i, ''));
                      return t.find((e) => e.id === i.user_id.toLowerCase())
                        ? (a('The channel already exists'), void y(''))
                        : (t.push({
                            id: i.user_id,
                            login: i.login,
                            access_token: e.replace(/^oauth[:]*/i, ''),
                            client_id: i.client_id,
                          }),
                          localStorage.setItem('tokens', JSON.stringify(t)),
                          A(),
                          a(''),
                          void y(
                            `Successfully added login: ${i.login} - ID: ${i.user_id}`
                          ));
                    } catch (t) {
                      return a(t.message), void y('');
                    }
                  },
                  children: 'Add',
                }),
              }),
              (0, x.jsx)(s.ZP, {
                item: !0,
                xs: 12,
                sm: 6,
                children: (0, x.jsx)(h.Z, {
                  variant: 'contained',
                  color: 'error',
                  fullWidth: !0,
                  onClick: async () => {
                    if (!I) return a('No channel specified'), void y('');
                    try {
                      const e = localStorage.getItem('tokens')
                          ? JSON.parse(localStorage.getItem('tokens'))
                          : [],
                        t = e.findIndex((e) => e.id === I);
                      if (-1 === t)
                        return a('There are no channels'), void y('');
                      const i = e[t];
                      return (
                        e.splice(t, 1),
                        localStorage.setItem('tokens', JSON.stringify(e)),
                        A(),
                        a(''),
                        void y(
                          `Successfully removed login: ${i.login} - ID: ${i.id}`
                        )
                      );
                    } catch (e) {
                      return a(e.message), void y('');
                    }
                  },
                  children: 'Remove',
                }),
              }),
              (0, x.jsx)(s.ZP, {
                item: !0,
                xs: 12,
                children: (0, x.jsx)(h.Z, {
                  variant: 'text',
                  color: 'primary',
                  fullWidth: !0,
                  onClick: async () => {
                    window.open(
                      'https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=87q7zikx7uny69x0wkxtf8bm4kd5m2&redirect_uri=https://devlsco.github.io/token/callback/&scope=channel:manage:vips+channel:manage:moderators&force_verify=true',
                      '',
                      'scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=0,height=0,left=-1000,top=-1000'
                    );
                  },
                  children: 'Generate OAuth Token',
                }),
              }),
              (0, x.jsx)(s.ZP, {
                item: !0,
                xs: 12,
                sm: 6,
                children: (0, x.jsx)(n.Z, {
                  theme: b,
                  children: (0, x.jsxs)(u.Z, {
                    fullWidth: !0,
                    id: 'outlined-basic',
                    variant: 'outlined',
                    children: [
                      (0, x.jsx)(p.Z, {
                        id: 'channel-label',
                        children: 'Channel',
                      }),
                      (0, x.jsx)(m.Z, {
                        label: 'Channel',
                        value: I,
                        onChange: (e) => $(e.target.value),
                        labelId: 'channel-label',
                        id: 'channel-select',
                        children: j.map((e, t) =>
                          (0, x.jsx)(
                            v.Z,
                            {
                              value: e.id,
                              selected: 1 === t,
                              children: e.name,
                            },
                            e.id
                          )
                        ),
                      }),
                    ],
                  }),
                }),
              }),
              (0, x.jsx)(s.ZP, {
                item: !0,
                xs: 12,
                sm: 6,
                children: (0, x.jsx)(n.Z, {
                  theme: b,
                  children: (0, x.jsxs)(u.Z, {
                    fullWidth: !0,
                    id: 'outlined-basic',
                    variant: 'outlined',
                    children: [
                      (0, x.jsx)(p.Z, { id: 'type-label', children: 'Type' }),
                      (0, x.jsxs)(m.Z, {
                        label: 'Type',
                        value: w,
                        onChange: (e) => S(e.target.value),
                        labelId: 'type-label',
                        id: 'type-select',
                        children: [
                          (0, x.jsx)(v.Z, {
                            value: 'add-moderator',
                            children: 'Add Moderator',
                          }),
                          (0, x.jsx)(v.Z, {
                            value: 'add-vip',
                            children: 'Add VIP',
                          }),
                          (0, x.jsx)(v.Z, {
                            value: 'remove-moderator',
                            children: 'Remove Moderator',
                          }),
                          (0, x.jsx)(v.Z, {
                            value: 'remove-vip',
                            children: 'Remove VIP',
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
              C,
              (0, x.jsxs)(s.ZP, {
                item: !0,
                xs: 12,
                children: [
                  i &&
                    (0, x.jsx)(f.Z, {
                      variant: 'body2',
                      style: {
                        color: 'red',
                        marginTop: '10px',
                        textAlign: 'center',
                      },
                      children: i,
                    }),
                  Z &&
                    (0, x.jsx)(f.Z, {
                      variant: 'body2',
                      style: { marginTop: '10px', textAlign: 'center' },
                      children: Z,
                    }),
                ],
              }),
            ],
          }),
        });
      };
    },
    3786: function (e, t, i) {
      i.d(t, {
        Z: function () {
          return $;
        },
      });
      var a = i(3366),
        n = i(7462),
        r = i(2791),
        s = i(8182),
        o = i(4419),
        d = i(2065),
        l = i(7630),
        c = i(3736),
        h = i(6199),
        u = i(533),
        p = i(162),
        m = i(2071),
        v = i(133),
        f = i(6014),
        g = i(9849),
        x = i(5878),
        b = i(1217);
      function Z(e) {
        return (0, b.Z)('MuiMenuItem', e);
      }
      var y = (0, x.Z)('MuiMenuItem', [
          'root',
          'focusVisible',
          'dense',
          'disabled',
          'divider',
          'gutters',
          'selected',
        ]),
        j = i(184);
      const k = [
          'autoFocus',
          'component',
          'dense',
          'divider',
          'disableGutters',
          'focusVisibleClassName',
          'role',
          'tabIndex',
          'className',
        ],
        I = (0, l.ZP)(u.Z, {
          shouldForwardProp: (e) => (0, l.FO)(e) || 'classes' === e,
          name: 'MuiMenuItem',
          slot: 'Root',
          overridesResolver: (e, t) => {
            const { ownerState: i } = e;
            return [
              t.root,
              i.dense && t.dense,
              i.divider && t.divider,
              !i.disableGutters && t.gutters,
            ];
          },
        })((e) => {
          let { theme: t, ownerState: i } = e;
          return (0, n.Z)(
            {},
            t.typography.body1,
            {
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              position: 'relative',
              textDecoration: 'none',
              minHeight: 48,
              paddingTop: 6,
              paddingBottom: 6,
              boxSizing: 'border-box',
              whiteSpace: 'nowrap',
            },
            !i.disableGutters && { paddingLeft: 16, paddingRight: 16 },
            i.divider && {
              borderBottom: `1px solid ${(t.vars || t).palette.divider}`,
              backgroundClip: 'padding-box',
            },
            {
              '&:hover': {
                textDecoration: 'none',
                backgroundColor: (t.vars || t).palette.action.hover,
                '@media (hover: none)': { backgroundColor: 'transparent' },
              },
              [`&.${y.selected}`]: {
                backgroundColor: t.vars
                  ? `rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`
                  : (0, d.Fq)(
                      t.palette.primary.main,
                      t.palette.action.selectedOpacity
                    ),
                [`&.${y.focusVisible}`]: {
                  backgroundColor: t.vars
                    ? `rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`
                    : (0, d.Fq)(
                        t.palette.primary.main,
                        t.palette.action.selectedOpacity +
                          t.palette.action.focusOpacity
                      ),
                },
              },
              [`&.${y.selected}:hover`]: {
                backgroundColor: t.vars
                  ? `rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`
                  : (0, d.Fq)(
                      t.palette.primary.main,
                      t.palette.action.selectedOpacity +
                        t.palette.action.hoverOpacity
                    ),
                '@media (hover: none)': {
                  backgroundColor: t.vars
                    ? `rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`
                    : (0, d.Fq)(
                        t.palette.primary.main,
                        t.palette.action.selectedOpacity
                      ),
                },
              },
              [`&.${y.focusVisible}`]: {
                backgroundColor: (t.vars || t).palette.action.focus,
              },
              [`&.${y.disabled}`]: {
                opacity: (t.vars || t).palette.action.disabledOpacity,
              },
              [`& + .${v.Z.root}`]: {
                marginTop: t.spacing(1),
                marginBottom: t.spacing(1),
              },
              [`& + .${v.Z.inset}`]: { marginLeft: 52 },
              [`& .${g.Z.root}`]: { marginTop: 0, marginBottom: 0 },
              [`& .${g.Z.inset}`]: { paddingLeft: 36 },
              [`& .${f.Z.root}`]: { minWidth: 36 },
            },
            !i.dense && { [t.breakpoints.up('sm')]: { minHeight: 'auto' } },
            i.dense &&
              (0, n.Z)(
                { minHeight: 32, paddingTop: 4, paddingBottom: 4 },
                t.typography.body2,
                { [`& .${f.Z.root} svg`]: { fontSize: '1.25rem' } }
              )
          );
        });
      var $ = r.forwardRef(function (e, t) {
        const i = (0, c.Z)({ props: e, name: 'MuiMenuItem' }),
          {
            autoFocus: d = !1,
            component: l = 'li',
            dense: u = !1,
            divider: v = !1,
            disableGutters: f = !1,
            focusVisibleClassName: g,
            role: x = 'menuitem',
            tabIndex: b,
            className: y,
          } = i,
          $ = (0, a.Z)(i, k),
          w = r.useContext(h.Z),
          S = r.useMemo(
            () => ({ dense: u || w.dense || !1, disableGutters: f }),
            [w.dense, u, f]
          ),
          C = r.useRef(null);
        (0, p.Z)(() => {
          d && C.current && C.current.focus();
        }, [d]);
        const _ = (0, n.Z)({}, i, {
            dense: S.dense,
            divider: v,
            disableGutters: f,
          }),
          O = ((e) => {
            const {
                disabled: t,
                dense: i,
                divider: a,
                disableGutters: r,
                selected: s,
                classes: d,
              } = e,
              l = {
                root: [
                  'root',
                  i && 'dense',
                  t && 'disabled',
                  !r && 'gutters',
                  a && 'divider',
                  s && 'selected',
                ],
              },
              c = (0, o.Z)(l, Z, d);
            return (0, n.Z)({}, d, c);
          })(i),
          N = (0, m.Z)(C, t);
        let P;
        return (
          i.disabled || (P = void 0 !== b ? b : -1),
          (0, j.jsx)(h.Z.Provider, {
            value: S,
            children: (0, j.jsx)(
              I,
              (0, n.Z)(
                {
                  ref: N,
                  role: x,
                  tabIndex: P,
                  component: l,
                  focusVisibleClassName: (0, s.Z)(O.focusVisible, g),
                  className: (0, s.Z)(O.root, y),
                },
                $,
                { ownerState: _, classes: O }
              )
            ),
          })
        );
      });
    },
  },
]);
//# sourceMappingURL=393.5958e107.chunk.js.map
