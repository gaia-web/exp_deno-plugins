## Before run it
Have [Deno](https://deno.land) installed.

## To run it
```sh
deno run mod.ts
```

## Commands

### `load`
Loading a plugin.
```sh
load <plugin_path> <plugin_name>
```
- `plugin_path` The path of plugin, which needs to start with "/" or "./"
- `plugin_name` A alias for the plugin for later use.

ex.
```sh
load ./plugin1.ts p1
```

### `run`
Run `doSomething()` function of the plugin.
```sh
run <plugin_name> <arg>
```
- `plugin_name` The name set by the `load` command.
- `arg` A string to be passed into `doSomething()`.

ex.
```sh
run p1 something
```