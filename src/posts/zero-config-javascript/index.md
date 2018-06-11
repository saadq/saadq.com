---
path: "/blog/zero-config-javascript"
date: "2018-06-11T04:39:52.409Z"
title: "Zero Config JavaScript"
---

Recently, there's been a trend in JavaScript tooling known as #0CJS – Zero Config JavaScript. With the advent of tools like `Parcel`, `create-react-app`, `Next.js`, etc. the JS ecosystem has come a long way, especially for newer developers who just want to start working on an app and don't want to spend hours learning how to setup multi-hundred-line config files.

I don't think that this means configuration shouldn't exist at all. As much as possible, a tool should try to have sensible defaults that covers the general use cases. The user should be allowed to customize further on top of that if they wish, but ideally there should be a working product out of the box. Also, there should be an attempt to keep these config options as simple as possible – when designing your config schema, try to prefer boolean values for most things (if possible) for turning settings on/off rather than using strings to specify what the user wants to allow/reject.

One tool in particular that does this well is [`Prettier`](https://github.com/prettier/prettier), a code formatter. There are very few configuration options for it, with most of them being simple boolean values (like `semi: false`), and most of the defaults follow the conventions set by the JS community. This will be even more true once v2 is released which is improving some default settings like using single quotes instead of double.

I was inspired to write this post after some learning some lessons from releasing a tool called [`lynt`](https://github.com/saadq/lynt/) which is a zero config JavaScript linter with support for Typescript, Flow, and React. The idea behind it was to not have any style-only lint rules in its config, which would encourage the use of a formatting tool like Prettier to be used alongside it. I thought that omitting style rules from the config would make it usable by pretty much anyone, so I didn't allow any of the rules to be configurable.

In retrospect, this was a mistake. No feature (like lint rule customization) should be removed from a tool, unless there is some benefit gained in return. Removing style rules from the linter made sense because it encouraged the use of a code formatting tool like Prettier (which is more suitable for enforcing code style when compared to a linter). However, there was no benefit from removing the customization of other rules like `prefer-const`, etc. I've realized my mistake, and the next version of `lynt` will let the user have extra configuration for non-style rules.

*Configuration is not a bad thing*, when done properly. When designing a tool, remember to make it have sensible defaults and to limit/simplify config options.
