import { PoolConfig } from "maxcompute";

declare module "@cubejs-backend/maxcompute-driver" {
  export default class MaxComputeDriver {
    constructor(options?: PoolConfig);
  }
}
