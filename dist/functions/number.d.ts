declare const range: (start: number | undefined, end: number) => object;
declare function oddGenerator(till: number): Generator<any, void, unknown>;
declare function evenGenerator(till: number): Generator<any, void, unknown>;
export { range, oddGenerator, evenGenerator };
