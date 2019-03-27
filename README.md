5000 Nodes
==========

This is just an experiment to find the most performant way of rendering 5000 React component nodes at a single level.

Currently, it's using a combination of [`react-virtualized`](https://github.com/bvaughn/react-virtualized),
[`immutability-helper`](https://github.com/kolodny/immutability-helper) and [functional, memoized components](https://reactjs.org/docs/react-api.html#reactmemo)
to reach maximum performance, but I'm sure more can be done...

### Running

1. `yarn install`
1. `yarn start`

### License

This is released under the [MIT License](LICENSE).
