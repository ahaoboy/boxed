export function entries<T>(value: T): {
  [K in keyof T]: K extends string ? [K, T[K]] : never;
}[keyof T][] {
  return Object.entries(value) as {
    [K in keyof T]: K extends string ? [K, T[K]] : never;
  }[keyof T][];
}

export function keys<T>(value: T): {
  [K in keyof T]: K extends string ? K : never;
}[keyof T][] {
  return Object.keys(value) as {
    [K in keyof T]: K extends string ? K : never;
  }[keyof T][];
}

export function values<T>(value: T): {
  [K in keyof T]: K extends string ? T[K] : never;
}[keyof T][] {
  return Object.values(value) as {
    [K in keyof T]: K extends string ? T[K] : never;
  }[keyof T][];
}
