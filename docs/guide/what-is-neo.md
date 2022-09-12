# What is neo

`neo` - a short name of `new repo`, it uses pnpm manage starter templates.

## Movitation

Side projects build on top of lots of tools, such as `webpack`, `rollup`, `eslint`, `Next.js` etc..., and you may choose `TypeScript` instead of `JavaScript` to develop, you may also need `changeset` and `Github Workflows` to publish package. At the begaining, it's really hard to combine those tools to create a minial starter repo.

If you meet a new tool, and you really need this one in your side project, maybe `vite`, maybe `electron`. Or even more complicated, you want to try `vite + electron` to create a cross platform application, but official only provide basic template.

After you spend a long time to find a perfect starter repo, you clone it or use it as template directly. Then add your config(`yaml`, `.eslintrc`, etc...) into this template to improve your develop experience.

At sencond time, you did it again.

Why not save ***add your config into this template*** into common workflow? Why not save ***finial template repo*** into your personal codebase.

So, I create ***NEO***, it contain follow useful features:

1. You can repeat same action on your second, third... side project via neo generator.

2. You can save your personal template into local virtual store from remote, like github, npm etc... Local cache make create a new side project as quick as possible.

3. You can choose which one as your starter repo from a interaction template list. Not open browser anymore.
