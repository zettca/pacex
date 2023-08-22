interface ObjectConstructor {
  entries<T, K extends string>(o: Record<K, T>): [K, T][];
}
