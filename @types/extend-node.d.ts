interface NodeModule {
  hot?: {
    accept(modules: string[], callback: () => void): void;
  };
}
