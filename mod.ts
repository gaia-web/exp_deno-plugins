// deno-lint-ignore-file no-case-declarations no-explicit-any ban-unused-ignore

const pluginMap = new Map<
  string,
  { doSomething: (message: string) => string }
>();

while (true) {
  const input = prompt("cmd?");
  switch (true) {
    case input?.startsWith("load"):
      {
        const [_, path, name] = input?.split(/\s+/) || [];
        const pluginModule = await import(path);
        pluginMap.set(name, pluginModule);
      }
      break;
    case input?.startsWith("run"):
      {
        const [_, name, arg] = input?.split(/\s+/) || [];
        const pluginModule = pluginMap.get(name);
        const result = pluginModule?.doSomething(arg);
        console.log(result);
      }
      break;
  }
}
