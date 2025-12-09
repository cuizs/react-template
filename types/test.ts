// export type FooParams = {
//   items?: Array<{ quantity: number }>;
// };

type FooParamsItems = { quantity: number };

export interface FooParams {
  items?: Array<FooParamsItems>;
}
